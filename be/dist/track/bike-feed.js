"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulatedBikeFeed = exports.SerialBikeFeed = void 0;
exports.parseArduinoLine = parseArduinoLine;
const common_1 = require("@nestjs/common");
function parseArduinoLine(line) {
    const match = /^\s*(\d+)\s+(\d+)\s*$/.exec(line);
    if (!match)
        return null;
    return [Number(match[1]) / 100, Number(match[2]) / 100];
}
class SerialBikeFeed {
    constructor(path, whiteIndex) {
        this.path = path;
        this.whiteIndex = whiteIndex;
        this.kind = "serial";
        this.problem = null;
        this.logger = new common_1.Logger(SerialBikeFeed.name);
        this.raw = [0, 0];
        this.zero = [0, 0];
        this.buffer = "";
        this.open();
    }
    open() {
        try {
            const { SerialPort } = require("serialport");
            const port = new SerialPort({ path: this.path, baudRate: 9600 });
            port.on("open", () => {
                this.problem = null;
                this.logger.log(`Reading the bikes from ${this.path}`);
            });
            port.on("data", (chunk) => this.receive(chunk.toString("ascii")));
            port.on("error", (error) => this.fail(error.message));
            port.on("close", () => this.fail("connection closed"));
            this.port = port;
        }
        catch (error) {
            this.fail(error instanceof Error ? error.message : String(error));
        }
    }
    fail(reason) {
        this.problem = `Arduino on ${this.path}: ${reason}`;
        this.logger.error(this.problem);
    }
    receive(text) {
        this.buffer += text;
        const lines = this.buffer.split("\n");
        this.buffer = lines.pop() ?? "";
        for (const line of lines) {
            const parsed = parseArduinoLine(line);
            if (!parsed)
                continue;
            if (parsed[0] < this.zero[0])
                this.zero[0] = 0;
            if (parsed[1] < this.zero[1])
                this.zero[1] = 0;
            this.raw = parsed;
        }
    }
    reset() {
        this.zero = [...this.raw];
        try {
            this.port?.write(" ");
        }
        catch (error) {
            this.fail(error instanceof Error ? error.message : String(error));
        }
    }
    distances() {
        const blackIndex = this.whiteIndex === 0 ? 1 : 0;
        return {
            white: this.raw[this.whiteIndex] - this.zero[this.whiteIndex],
            black: this.raw[blackIndex] - this.zero[blackIndex],
        };
    }
}
exports.SerialBikeFeed = SerialBikeFeed;
class SimulatedBikeFeed {
    constructor() {
        this.kind = "simulation";
        this.problem = null;
        this.riders = [this.newRider(), this.newRider()];
        this.lastStep = Date.now();
    }
    newRider() {
        return { distance: 0, speed: 0, topSpeed: (60 + Math.random() * 20) / 3.6 };
    }
    reset() {
        this.riders = [this.newRider(), this.newRider()];
        this.lastStep = Date.now();
    }
    distances() {
        const now = Date.now();
        const seconds = (now - this.lastStep) / 1000;
        this.lastStep = now;
        for (const rider of this.riders) {
            const target = rider.topSpeed * (0.95 + Math.random() * 0.1);
            rider.speed += (target - rider.speed) * Math.min(1, seconds * 1.5);
            rider.distance += rider.speed * seconds;
        }
        return { white: this.riders[0].distance, black: this.riders[1].distance };
    }
}
exports.SimulatedBikeFeed = SimulatedBikeFeed;
//# sourceMappingURL=bike-feed.js.map