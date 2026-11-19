"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.SortOrder = exports.UserScalarFieldEnum = exports.RaceScalarFieldEnum = exports.SongScalarFieldEnum = exports.ShiftRoleScalarFieldEnum = exports.ShiftScalarFieldEnum = exports.ShowScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.10.1",
    engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Show: 'Show',
    Shift: 'Shift',
    ShiftRole: 'ShiftRole',
    Song: 'Song',
    Race: 'Race',
    User: 'User'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    Serializable: 'Serializable'
});
exports.ShowScalarFieldEnum = {
    id: 'id',
    name: 'name',
    date: 'date',
    actualStartTime: 'actualStartTime',
    duration: 'duration',
    finished: 'finished',
    active: 'active'
};
exports.ShiftScalarFieldEnum = {
    id: 'id',
    showId: 'showId',
    order: 'order',
    duration: 'duration',
    shiftStarted: 'shiftStarted',
    shiftFinished: 'shiftFinished'
};
exports.ShiftRoleScalarFieldEnum = {
    id: 'id',
    shiftId: 'shiftId',
    roleTitle: 'roleTitle',
    userId: 'userId',
    pastUserName: 'pastUserName'
};
exports.SongScalarFieldEnum = {
    id: 'id',
    name: 'name',
    artist: 'artist',
    selectable: 'selectable',
    deleted: 'deleted',
    origin: 'origin'
};
exports.RaceScalarFieldEnum = {
    id: 'id',
    showId: 'showId',
    orderNumber: 'orderNumber',
    createdAt: 'createdAt',
    raced: 'raced',
    raceState: 'raceState',
    person1: 'person1',
    song1Id: 'song1Id',
    person2: 'person2',
    song2Id: 'song2Id',
    bikeWon: 'bikeWon'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    password: 'password'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map