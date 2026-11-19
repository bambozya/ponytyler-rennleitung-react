"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whichBikeWonMost = void 0;
const $runtime = require("@prisma/client/runtime/client");
exports.whichBikeWonMost = $runtime.makeTypedQueryFactory("SELECT\nCOUNT(r.bikeWon) as timesWon, r.bikeWon\nFROM Race r\nGROUP BY r.bikeWon\nORDER BY timesWon DESC");
//# sourceMappingURL=whichBikeWonMost.js.map