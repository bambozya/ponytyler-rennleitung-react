import * as $runtime from "@prisma/client/runtime/client";
export declare const whichBikeWonMost: () => $runtime.TypedSql<whichBikeWonMost.Parameters, whichBikeWonMost.Result>;
export declare namespace whichBikeWonMost {
    type Parameters = [];
    type Result = {
        timesWon: bigint;
        bikeWon: number;
    };
}
