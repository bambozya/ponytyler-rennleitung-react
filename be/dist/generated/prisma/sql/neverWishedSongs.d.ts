import * as $runtime from "@prisma/client/runtime/client";
export declare const neverWishedSongs: () => $runtime.TypedSql<neverWishedSongs.Parameters, neverWishedSongs.Result>;
export declare namespace neverWishedSongs {
    type Parameters = [];
    type Result = {
        artist: string;
        name: string;
        totalCount: bigint | null;
    };
}
