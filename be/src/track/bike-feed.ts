import { Logger } from "@nestjs/common";

/** Metres each bike has ridden since the last reset. */
export interface Distances {
  white: number;
  black: number;
}

export interface BikeFeed {
  readonly kind: "serial" | "simulation";
  /** Why the feed delivers nothing, or null when it is fine. */
  readonly problem: string | null;
  /** Sets both distances back to zero. */
  reset(): void;
  distances(): Distances;
}

/**
 * Parses one line of the Arduino sketch (Arduino/goldsprint_v_10.ino): "<bike0> <bike1>", the
 * distance of each roller in centimetres since the last reset. Returns metres, or null for
 * anything else (boot noise, half a line).
 */
export function parseArduinoLine(line: string): [number, number] | null {
  const match = /^\s*(\d+)\s+(\d+)\s*$/.exec(line);
  if (!match) return null;
  return [Number(match[1]) / 100, Number(match[2]) / 100];
}

/**
 * Reads the Arduino on the rollers over USB serial.
 *
 * The sketch only sends a line when a roller turns and resets its counters when it receives a
 * space. A reset here does not wait for that: it remembers the last values as the new zero, so a
 * line that was already on its way cannot bring the old distance back.
 */
export class SerialBikeFeed implements BikeFeed {
  readonly kind = "serial";
  problem: string | null = null;

  private readonly logger = new Logger(SerialBikeFeed.name);
  private port: { write(data: string): void; on(event: string, listener: (arg: any) => void): void } | undefined;
  private raw: [number, number] = [0, 0];
  private zero: [number, number] = [0, 0];
  private buffer = "";

  /** @param whiteIndex which of the two counters the sketch sends belongs to the white bike (0 or 1) */
  constructor(
    private readonly path: string,
    private readonly whiteIndex: 0 | 1,
  ) {
    this.open();
  }

  private open() {
    try {
      // Loaded here so that a machine without an Arduino never touches the native serial module.
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { SerialPort } = require("serialport");
      const port = new SerialPort({ path: this.path, baudRate: 9600 });
      port.on("open", () => {
        this.problem = null;
        this.logger.log(`Reading the bikes from ${this.path}`);
      });
      port.on("data", (chunk: Buffer) => this.receive(chunk.toString("ascii")));
      port.on("error", (error: Error) => this.fail(error.message));
      port.on("close", () => this.fail("connection closed"));
      this.port = port;
    } catch (error) {
      this.fail(error instanceof Error ? error.message : String(error));
    }
  }

  private fail(reason: string) {
    this.problem = `Arduino on ${this.path}: ${reason}`;
    this.logger.error(this.problem);
  }

  private receive(text: string) {
    this.buffer += text;
    const lines = this.buffer.split("\n");
    this.buffer = lines.pop() ?? "";
    for (const line of lines) {
      const parsed = parseArduinoLine(line);
      if (!parsed) continue;
      // Smaller than our zero point: the Arduino has reset its counters in the meantime.
      if (parsed[0] < this.zero[0]) this.zero[0] = 0;
      if (parsed[1] < this.zero[1]) this.zero[1] = 0;
      this.raw = parsed;
    }
  }

  reset() {
    this.zero = [...this.raw];
    try {
      this.port?.write(" ");
    } catch (error) {
      this.fail(error instanceof Error ? error.message : String(error));
    }
  }

  distances(): Distances {
    const blackIndex = this.whiteIndex === 0 ? 1 : 0;
    return {
      white: this.raw[this.whiteIndex] - this.zero[this.whiteIndex],
      black: this.raw[blackIndex] - this.zero[blackIndex],
    };
  }
}

interface SimulatedRider {
  distance: number;
  /** m/s */
  speed: number;
  /** m/s */
  topSpeed: number;
}

/** Two made-up riders for when no Arduino is connected: they sprint up to 60–80 km/h and wobble a bit. */
export class SimulatedBikeFeed implements BikeFeed {
  readonly kind = "simulation";
  readonly problem = null;

  private riders: [SimulatedRider, SimulatedRider] = [this.newRider(), this.newRider()];
  private lastStep = Date.now();

  private newRider(): SimulatedRider {
    return { distance: 0, speed: 0, topSpeed: (60 + Math.random() * 20) / 3.6 };
  }

  reset() {
    this.riders = [this.newRider(), this.newRider()];
    this.lastStep = Date.now();
  }

  distances(): Distances {
    const now = Date.now();
    const seconds = (now - this.lastStep) / 1000;
    this.lastStep = now;
    for (const rider of this.riders) {
      const target = rider.topSpeed * (0.95 + Math.random() * 0.1);
      // Closes most of the gap to the target speed within about two seconds.
      rider.speed += (target - rider.speed) * Math.min(1, seconds * 1.5);
      rider.distance += rider.speed * seconds;
    }
    return { white: this.riders[0].distance, black: this.riders[1].distance };
  }
}
