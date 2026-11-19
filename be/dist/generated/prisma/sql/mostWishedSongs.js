"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostWishedSongs = void 0;
const $runtime = require("@prisma/client/runtime/client");
exports.mostWishedSongs = $runtime.makeTypedQueryFactory("SELECT\ns.artist, s.name, COUNT(*) AS totalCount\nFROM (\nSELECT r.song1Id AS songId\nFROM Race r\nWHERE r.song1Id IS NOT NULL\nUNION ALL\nSELECT r.song2Id AS songId\nFROM Race r\nWHERE r.song2Id IS NOT NULL\n) AS wished\nINNER JOIN Song s ON s.id = wished.songId\nGROUP BY s.id, s.artist, s.name\nORDER BY totalCount DESC, s.artist, s.name");
//# sourceMappingURL=mostWishedSongs.js.map