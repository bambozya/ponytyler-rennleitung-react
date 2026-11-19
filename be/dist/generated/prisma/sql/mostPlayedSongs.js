"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostPlayedSongs = void 0;
const $runtime = require("@prisma/client/runtime/client");
exports.mostPlayedSongs = $runtime.makeTypedQueryFactory("SELECT\ns.artist, s.name, stats.totalCount\nFROM Song s\nINNER JOIN (\nSELECT\n(COALESCE(s1.songId, s2.songId, 0)) AS songId,\n(COALESCE(s1.count,0)+COALESCE(s2.count,0)) AS totalCount\nFROM (\nSELECT r.song2Id songId, COUNT(r.song2Id) AS count\nFROM Race r\nWHERE r.bikeWon = 1\nGROUP BY r.song2Id) AS s1\nLEFT OUTER JOIN (\nSELECT r.song1Id songId, COUNT(r.song1Id) AS count\nFROM Race r\nWHERE r.bikeWon = 1\nGROUP BY r.song1Id) AS s2 ON (s1.songId = s2.songId)\n) AS stats ON stats.songId = s.id\n\nORDER BY totalCount DESC");
//# sourceMappingURL=mostPlayedSongs.js.map