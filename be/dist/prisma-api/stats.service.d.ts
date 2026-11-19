import { mostPlayedSongs, mostWishedSongs, neverWishedSongs, whichBikeWonMost } from "../generated/prisma/sql";
import { PrismaService } from "./prisma.service";
export declare class StatsService {
    private prisma;
    constructor(prisma: PrismaService);
    private readonly logger;
    mostPlayedSongs(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<mostPlayedSongs.Result[]>;
    mostWishedSongs(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<mostWishedSongs.Result[]>;
    neverWishedSongs(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<neverWishedSongs.Result[]>;
    whichBikeWonMost(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<whichBikeWonMost.Result[]>;
}
