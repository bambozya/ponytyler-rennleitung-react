export interface Distances {
    white: number;
    black: number;
}
export interface BikeFeed {
    readonly kind: "serial" | "simulation";
    readonly problem: string | null;
    reset(): void;
    distances(): Distances;
}
export declare function parseArduinoLine(line: string): [number, number] | null;
export declare class SerialBikeFeed implements BikeFeed {
    private readonly path;
    private readonly whiteIndex;
    readonly kind = "serial";
    problem: string | null;
    private readonly logger;
    private port;
    private raw;
    private zero;
    private buffer;
    constructor(path: string, whiteIndex: 0 | 1);
    private open;
    private fail;
    private receive;
    reset(): void;
    distances(): Distances;
}
export declare class SimulatedBikeFeed implements BikeFeed {
    readonly kind = "simulation";
    readonly problem: any;
    private riders;
    private lastStep;
    private newRider;
    reset(): void;
    distances(): Distances;
}
