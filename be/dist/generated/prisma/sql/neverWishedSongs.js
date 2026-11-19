"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.neverWishedSongs = void 0;
const $runtime = require("@prisma/client/runtime/client");
exports.neverWishedSongs = $runtime.makeTypedQueryFactory("SELECT\ns.artist, s.name, wished.totalCount\nFROM Song s\nLEFT JOIN (\nSELECT picked.songId, COUNT(*) AS totalCount\nFROM (\nSELECT r.song1Id AS songId\nFROM Race r\nWHERE r.song1Id IS NOT NULL\nUNION ALL\nSELECT r.song2Id AS songId\nFROM Race r\nWHERE r.song2Id IS NOT NULL\n) AS picked\nGROUP BY picked.songId\n) AS wished ON wished.songId = s.id\nWHERE s.selectable = 1 AND s.deleted = 0 AND wished.songId IS NULL\nORDER BY s.artist, s.name");
//# sourceMappingURL=neverWishedSongs.js.map