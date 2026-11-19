"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostWishedSongs = void 0;
const $runtime = require("@prisma/client/runtime/client");
exports.mostWishedSongs = $runtime.makeTypedQueryFactory("SELECT\ns.artist, s.name, stats.totalCount\nFROM Song s\nINNER JOIN (\nSELECT\n(COALESCE(s1.songId, s2.songId, 0)) AS songId,\n(COALESCE(s1.countSong1,0)+COALESCE(s2.countSong2,0)) AS totalCount\nFROM (\nSELECT\nr.song1Id AS songId,\nCOUNT(r.song1Id) AS countSong1\nFROM Race r\nGROUP BY r.song1Id\n) AS s1\nLEFT OUTER JOIN (\nSELECT\nr.song2Id AS songId,\nCOUNT(r.song2Id) AS countSong2\nFROM Race r\nGROUP BY r.song2Id\n) AS s2 ON (s1.songId = s2.songId)\n) as stats ON (s.id = stats.songId)\nORDER BY stats.totalCount DESC\n");
//# sourceMappingURL=mostWishedSongs.js.map