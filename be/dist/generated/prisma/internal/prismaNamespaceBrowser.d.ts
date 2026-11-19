import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Show: "Show";
    readonly Shift: "Shift";
    readonly ShiftRole: "ShiftRole";
    readonly Song: "Song";
    readonly Race: "Race";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ShowScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly date: "date";
    readonly actualStartTime: "actualStartTime";
    readonly duration: "duration";
    readonly finished: "finished";
    readonly active: "active";
};
export type ShowScalarFieldEnum = (typeof ShowScalarFieldEnum)[keyof typeof ShowScalarFieldEnum];
export declare const ShiftScalarFieldEnum: {
    readonly id: "id";
    readonly showId: "showId";
    readonly order: "order";
    readonly duration: "duration";
    readonly shiftStarted: "shiftStarted";
    readonly shiftFinished: "shiftFinished";
};
export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum];
export declare const ShiftRoleScalarFieldEnum: {
    readonly id: "id";
    readonly shiftId: "shiftId";
    readonly roleTitle: "roleTitle";
    readonly userId: "userId";
    readonly pastUserName: "pastUserName";
};
export type ShiftRoleScalarFieldEnum = (typeof ShiftRoleScalarFieldEnum)[keyof typeof ShiftRoleScalarFieldEnum];
export declare const SongScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly artist: "artist";
    readonly selectable: "selectable";
    readonly deleted: "deleted";
    readonly origin: "origin";
};
export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum];
export declare const RaceScalarFieldEnum: {
    readonly id: "id";
    readonly showId: "showId";
    readonly orderNumber: "orderNumber";
    readonly createdAt: "createdAt";
    readonly raced: "raced";
    readonly raceState: "raceState";
    readonly person1: "person1";
    readonly song1Id: "song1Id";
    readonly person2: "person2";
    readonly song2Id: "song2Id";
    readonly bikeWon: "bikeWon";
};
export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly password: "password";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
