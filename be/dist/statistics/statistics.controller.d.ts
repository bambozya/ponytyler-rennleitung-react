import { StatsService } from "../prisma-api/stats.service";
export declare class StatisticsController {
    private readonly statsService;
    constructor(statsService: StatsService);
    mostPlayedSongs(): Promise<import("../generated/prisma/sql").mostPlayedSongs.Result[]>;
    mostWishedSongs(): Promise<import("../generated/prisma/sql").mostWishedSongs.Result[]>;
    neverWishedSongs(): Promise<import("../generated/prisma/sql").neverWishedSongs.Result[]>;
    whichBikeWonMost(): Promise<import("../generated/prisma/sql").whichBikeWonMost.Result[]>;
}
