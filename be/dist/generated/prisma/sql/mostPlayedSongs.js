"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostPlayedSongs = void 0;
const $runtime = require("@prisma/client/runtime/client");
exports.mostPlayedSongs = $runtime.makeTypedQueryFactory("SELECT\ns.artist, s.name, COUNT(*) AS totalCount\nFROM (\nSELECT r.song1Id AS songId\nFROM Race r\nWHERE r.raceState = 'RACED' AND r.bikeWon IN (1, 3) AND r.song1Id IS NOT NULL\nUNION ALL\nSELECT r.song2Id AS songId\nFROM Race r\nWHERE r.raceState = 'RACED' AND r.bikeWon IN (2, 3) AND r.song2Id IS NOT NULL\n) AS played\nINNER JOIN Song s ON s.id = played.songId\nGROUP BY s.id, s.artist, s.name\nORDER BY totalCount DESC, s.artist, s.name");
//# sourceMappingURL=mostPlayedSongs.js.map