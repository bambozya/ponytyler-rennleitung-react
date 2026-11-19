import * as $runtime from "@prisma/client/runtime/client";
export declare const mostPlayedSongs: () => $runtime.TypedSql<mostPlayedSongs.Parameters, mostPlayedSongs.Result>;
export declare namespace mostPlayedSongs {
    type Parameters = [];
    type Result = {
        artist: string;
        name: string;
        totalCount: bigint;
    };
}
