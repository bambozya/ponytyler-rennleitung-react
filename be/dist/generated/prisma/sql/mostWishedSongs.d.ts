import * as $runtime from "@prisma/client/runtime/client";
export declare const mostWishedSongs: () => $runtime.TypedSql<mostWishedSongs.Parameters, mostWishedSongs.Result>;
export declare namespace mostWishedSongs {
    type Parameters = [];
    type Result = {
        artist: string;
        name: string;
        totalCount: bigint;
    };
}
