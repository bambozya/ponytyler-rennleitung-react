import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type RaceModel = runtime.Types.Result.DefaultSelection<Prisma.$RacePayload>;
export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null;
    _avg: RaceAvgAggregateOutputType | null;
    _sum: RaceSumAggregateOutputType | null;
    _min: RaceMinAggregateOutputType | null;
    _max: RaceMaxAggregateOutputType | null;
};
export type RaceAvgAggregateOutputType = {
    id: number | null;
    showId: number | null;
    orderNumber: number | null;
    song1Id: number | null;
    song2Id: number | null;
    bikeWon: number | null;
};
export type RaceSumAggregateOutputType = {
    id: number | null;
    showId: number | null;
    orderNumber: number | null;
    song1Id: number | null;
    song2Id: number | null;
    bikeWon: number | null;
};
export type RaceMinAggregateOutputType = {
    id: number | null;
    showId: number | null;
    orderNumber: number | null;
    createdAt: Date | null;
    raced: boolean | null;
    raceState: string | null;
    person1: string | null;
    song1Id: number | null;
    person2: string | null;
    song2Id: number | null;
    bikeWon: number | null;
};
export type RaceMaxAggregateOutputType = {
    id: number | null;
    showId: number | null;
    orderNumber: number | null;
    createdAt: Date | null;
    raced: boolean | null;
    raceState: string | null;
    person1: string | null;
    song1Id: number | null;
    person2: string | null;
    song2Id: number | null;
    bikeWon: number | null;
};
export type RaceCountAggregateOutputType = {
    id: number;
    showId: number;
    orderNumber: number;
    createdAt: number;
    raced: number;
    raceState: number;
    person1: number;
    song1Id: number;
    person2: number;
    song2Id: number;
    bikeWon: number;
    _all: number;
};
export type RaceAvgAggregateInputType = {
    id?: true;
    showId?: true;
    orderNumber?: true;
    song1Id?: true;
    song2Id?: true;
    bikeWon?: true;
};
export type RaceSumAggregateInputType = {
    id?: true;
    showId?: true;
    orderNumber?: true;
    song1Id?: true;
    song2Id?: true;
    bikeWon?: true;
};
export type RaceMinAggregateInputType = {
    id?: true;
    showId?: true;
    orderNumber?: true;
    createdAt?: true;
    raced?: true;
    raceState?: true;
    person1?: true;
    song1Id?: true;
    person2?: true;
    song2Id?: true;
    bikeWon?: true;
};
export type RaceMaxAggregateInputType = {
    id?: true;
    showId?: true;
    orderNumber?: true;
    createdAt?: true;
    raced?: true;
    raceState?: true;
    person1?: true;
    song1Id?: true;
    person2?: true;
    song2Id?: true;
    bikeWon?: true;
};
export type RaceCountAggregateInputType = {
    id?: true;
    showId?: true;
    orderNumber?: true;
    createdAt?: true;
    raced?: true;
    raceState?: true;
    person1?: true;
    song1Id?: true;
    person2?: true;
    song2Id?: true;
    bikeWon?: true;
    _all?: true;
};
export type RaceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RaceWhereInput;
    orderBy?: Prisma.RaceOrderByWithRelationInput | Prisma.RaceOrderByWithRelationInput[];
    cursor?: Prisma.RaceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RaceCountAggregateInputType;
    _avg?: RaceAvgAggregateInputType;
    _sum?: RaceSumAggregateInputType;
    _min?: RaceMinAggregateInputType;
    _max?: RaceMaxAggregateInputType;
};
export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
    [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRace[P]> : Prisma.GetScalarType<T[P], AggregateRace[P]>;
};
export type RaceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RaceWhereInput;
    orderBy?: Prisma.RaceOrderByWithAggregationInput | Prisma.RaceOrderByWithAggregationInput[];
    by: Prisma.RaceScalarFieldEnum[] | Prisma.RaceScalarFieldEnum;
    having?: Prisma.RaceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RaceCountAggregateInputType | true;
    _avg?: RaceAvgAggregateInputType;
    _sum?: RaceSumAggregateInputType;
    _min?: RaceMinAggregateInputType;
    _max?: RaceMaxAggregateInputType;
};
export type RaceGroupByOutputType = {
    id: number;
    showId: number;
    orderNumber: number;
    createdAt: Date;
    raced: boolean;
    raceState: string;
    person1: string | null;
    song1Id: number | null;
    person2: string | null;
    song2Id: number | null;
    bikeWon: number;
    _count: RaceCountAggregateOutputType | null;
    _avg: RaceAvgAggregateOutputType | null;
    _sum: RaceSumAggregateOutputType | null;
    _min: RaceMinAggregateOutputType | null;
    _max: RaceMaxAggregateOutputType | null;
};
export type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RaceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RaceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RaceGroupByOutputType[P]>;
}>>;
export type RaceWhereInput = {
    AND?: Prisma.RaceWhereInput | Prisma.RaceWhereInput[];
    OR?: Prisma.RaceWhereInput[];
    NOT?: Prisma.RaceWhereInput | Prisma.RaceWhereInput[];
    id?: Prisma.IntFilter<"Race"> | number;
    showId?: Prisma.IntFilter<"Race"> | number;
    orderNumber?: Prisma.IntFilter<"Race"> | number;
    createdAt?: Prisma.DateTimeFilter<"Race"> | Date | string;
    raced?: Prisma.BoolFilter<"Race"> | boolean;
    raceState?: Prisma.StringFilter<"Race"> | string;
    person1?: Prisma.StringNullableFilter<"Race"> | string | null;
    song1Id?: Prisma.IntNullableFilter<"Race"> | number | null;
    person2?: Prisma.StringNullableFilter<"Race"> | string | null;
    song2Id?: Prisma.IntNullableFilter<"Race"> | number | null;
    bikeWon?: Prisma.IntFilter<"Race"> | number;
    show?: Prisma.XOR<Prisma.ShowScalarRelationFilter, Prisma.ShowWhereInput>;
    song1?: Prisma.XOR<Prisma.SongNullableScalarRelationFilter, Prisma.SongWhereInput> | null;
    song2?: Prisma.XOR<Prisma.SongNullableScalarRelationFilter, Prisma.SongWhereInput> | null;
};
export type RaceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    raced?: Prisma.SortOrder;
    raceState?: Prisma.SortOrder;
    person1?: Prisma.SortOrderInput | Prisma.SortOrder;
    song1Id?: Prisma.SortOrderInput | Prisma.SortOrder;
    person2?: Prisma.SortOrderInput | Prisma.SortOrder;
    song2Id?: Prisma.SortOrderInput | Prisma.SortOrder;
    bikeWon?: Prisma.SortOrder;
    show?: Prisma.ShowOrderByWithRelationInput;
    song1?: Prisma.SongOrderByWithRelationInput;
    song2?: Prisma.SongOrderByWithRelationInput;
};
export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RaceWhereInput | Prisma.RaceWhereInput[];
    OR?: Prisma.RaceWhereInput[];
    NOT?: Prisma.RaceWhereInput | Prisma.RaceWhereInput[];
    showId?: Prisma.IntFilter<"Race"> | number;
    orderNumber?: Prisma.IntFilter<"Race"> | number;
    createdAt?: Prisma.DateTimeFilter<"Race"> | Date | string;
    raced?: Prisma.BoolFilter<"Race"> | boolean;
    raceState?: Prisma.StringFilter<"Race"> | string;
    person1?: Prisma.StringNullableFilter<"Race"> | string | null;
    song1Id?: Prisma.IntNullableFilter<"Race"> | number | null;
    person2?: Prisma.StringNullableFilter<"Race"> | string | null;
    song2Id?: Prisma.IntNullableFilter<"Race"> | number | null;
    bikeWon?: Prisma.IntFilter<"Race"> | number;
    show?: Prisma.XOR<Prisma.ShowScalarRelationFilter, Prisma.ShowWhereInput>;
    song1?: Prisma.XOR<Prisma.SongNullableScalarRelationFilter, Prisma.SongWhereInput> | null;
    song2?: Prisma.XOR<Prisma.SongNullableScalarRelationFilter, Prisma.SongWhereInput> | null;
}, "id">;
export type RaceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    raced?: Prisma.SortOrder;
    raceState?: Prisma.SortOrder;
    person1?: Prisma.SortOrderInput | Prisma.SortOrder;
    song1Id?: Prisma.SortOrderInput | Prisma.SortOrder;
    person2?: Prisma.SortOrderInput | Prisma.SortOrder;
    song2Id?: Prisma.SortOrderInput | Prisma.SortOrder;
    bikeWon?: Prisma.SortOrder;
    _count?: Prisma.RaceCountOrderByAggregateInput;
    _avg?: Prisma.RaceAvgOrderByAggregateInput;
    _max?: Prisma.RaceMaxOrderByAggregateInput;
    _min?: Prisma.RaceMinOrderByAggregateInput;
    _sum?: Prisma.RaceSumOrderByAggregateInput;
};
export type RaceScalarWhereWithAggregatesInput = {
    AND?: Prisma.RaceScalarWhereWithAggregatesInput | Prisma.RaceScalarWhereWithAggregatesInput[];
    OR?: Prisma.RaceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RaceScalarWhereWithAggregatesInput | Prisma.RaceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Race"> | number;
    showId?: Prisma.IntWithAggregatesFilter<"Race"> | number;
    orderNumber?: Prisma.IntWithAggregatesFilter<"Race"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Race"> | Date | string;
    raced?: Prisma.BoolWithAggregatesFilter<"Race"> | boolean;
    raceState?: Prisma.StringWithAggregatesFilter<"Race"> | string;
    person1?: Prisma.StringNullableWithAggregatesFilter<"Race"> | string | null;
    song1Id?: Prisma.IntNullableWithAggregatesFilter<"Race"> | number | null;
    person2?: Prisma.StringNullableWithAggregatesFilter<"Race"> | string | null;
    song2Id?: Prisma.IntNullableWithAggregatesFilter<"Race"> | number | null;
    bikeWon?: Prisma.IntWithAggregatesFilter<"Race"> | number;
};
export type RaceCreateInput = {
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    person2?: string | null;
    bikeWon?: number;
    show: Prisma.ShowCreateNestedOneWithoutRacesInput;
    song1?: Prisma.SongCreateNestedOneWithoutPickedByPerson1Input;
    song2?: Prisma.SongCreateNestedOneWithoutPickedByPerson2Input;
};
export type RaceUncheckedCreateInput = {
    id?: number;
    showId: number;
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    song1Id?: number | null;
    person2?: string | null;
    song2Id?: number | null;
    bikeWon?: number;
};
export type RaceUpdateInput = {
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
    show?: Prisma.ShowUpdateOneRequiredWithoutRacesNestedInput;
    song1?: Prisma.SongUpdateOneWithoutPickedByPerson1NestedInput;
    song2?: Prisma.SongUpdateOneWithoutPickedByPerson2NestedInput;
};
export type RaceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    showId?: Prisma.IntFieldUpdateOperationsInput | number;
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song1Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song2Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RaceCreateManyInput = {
    id?: number;
    showId: number;
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    song1Id?: number | null;
    person2?: string | null;
    song2Id?: number | null;
    bikeWon?: number;
};
export type RaceUpdateManyMutationInput = {
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RaceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    showId?: Prisma.IntFieldUpdateOperationsInput | number;
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song1Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song2Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RaceListRelationFilter = {
    every?: Prisma.RaceWhereInput;
    some?: Prisma.RaceWhereInput;
    none?: Prisma.RaceWhereInput;
};
export type RaceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RaceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    raced?: Prisma.SortOrder;
    raceState?: Prisma.SortOrder;
    person1?: Prisma.SortOrder;
    song1Id?: Prisma.SortOrder;
    person2?: Prisma.SortOrder;
    song2Id?: Prisma.SortOrder;
    bikeWon?: Prisma.SortOrder;
};
export type RaceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    song1Id?: Prisma.SortOrder;
    song2Id?: Prisma.SortOrder;
    bikeWon?: Prisma.SortOrder;
};
export type RaceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    raced?: Prisma.SortOrder;
    raceState?: Prisma.SortOrder;
    person1?: Prisma.SortOrder;
    song1Id?: Prisma.SortOrder;
    person2?: Prisma.SortOrder;
    song2Id?: Prisma.SortOrder;
    bikeWon?: Prisma.SortOrder;
};
export type RaceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    raced?: Prisma.SortOrder;
    raceState?: Prisma.SortOrder;
    person1?: Prisma.SortOrder;
    song1Id?: Prisma.SortOrder;
    person2?: Prisma.SortOrder;
    song2Id?: Prisma.SortOrder;
    bikeWon?: Prisma.SortOrder;
};
export type RaceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    song1Id?: Prisma.SortOrder;
    song2Id?: Prisma.SortOrder;
    bikeWon?: Prisma.SortOrder;
};
export type RaceCreateNestedManyWithoutShowInput = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutShowInput, Prisma.RaceUncheckedCreateWithoutShowInput> | Prisma.RaceCreateWithoutShowInput[] | Prisma.RaceUncheckedCreateWithoutShowInput[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutShowInput | Prisma.RaceCreateOrConnectWithoutShowInput[];
    createMany?: Prisma.RaceCreateManyShowInputEnvelope;
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
};
export type RaceUncheckedCreateNestedManyWithoutShowInput = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutShowInput, Prisma.RaceUncheckedCreateWithoutShowInput> | Prisma.RaceCreateWithoutShowInput[] | Prisma.RaceUncheckedCreateWithoutShowInput[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutShowInput | Prisma.RaceCreateOrConnectWithoutShowInput[];
    createMany?: Prisma.RaceCreateManyShowInputEnvelope;
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
};
export type RaceUpdateManyWithoutShowNestedInput = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutShowInput, Prisma.RaceUncheckedCreateWithoutShowInput> | Prisma.RaceCreateWithoutShowInput[] | Prisma.RaceUncheckedCreateWithoutShowInput[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutShowInput | Prisma.RaceCreateOrConnectWithoutShowInput[];
    upsert?: Prisma.RaceUpsertWithWhereUniqueWithoutShowInput | Prisma.RaceUpsertWithWhereUniqueWithoutShowInput[];
    createMany?: Prisma.RaceCreateManyShowInputEnvelope;
    set?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    disconnect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    delete?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    update?: Prisma.RaceUpdateWithWhereUniqueWithoutShowInput | Prisma.RaceUpdateWithWhereUniqueWithoutShowInput[];
    updateMany?: Prisma.RaceUpdateManyWithWhereWithoutShowInput | Prisma.RaceUpdateManyWithWhereWithoutShowInput[];
    deleteMany?: Prisma.RaceScalarWhereInput | Prisma.RaceScalarWhereInput[];
};
export type RaceUncheckedUpdateManyWithoutShowNestedInput = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutShowInput, Prisma.RaceUncheckedCreateWithoutShowInput> | Prisma.RaceCreateWithoutShowInput[] | Prisma.RaceUncheckedCreateWithoutShowInput[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutShowInput | Prisma.RaceCreateOrConnectWithoutShowInput[];
    upsert?: Prisma.RaceUpsertWithWhereUniqueWithoutShowInput | Prisma.RaceUpsertWithWhereUniqueWithoutShowInput[];
    createMany?: Prisma.RaceCreateManyShowInputEnvelope;
    set?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    disconnect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    delete?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    update?: Prisma.RaceUpdateWithWhereUniqueWithoutShowInput | Prisma.RaceUpdateWithWhereUniqueWithoutShowInput[];
    updateMany?: Prisma.RaceUpdateManyWithWhereWithoutShowInput | Prisma.RaceUpdateManyWithWhereWithoutShowInput[];
    deleteMany?: Prisma.RaceScalarWhereInput | Prisma.RaceScalarWhereInput[];
};
export type RaceCreateNestedManyWithoutSong1Input = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutSong1Input, Prisma.RaceUncheckedCreateWithoutSong1Input> | Prisma.RaceCreateWithoutSong1Input[] | Prisma.RaceUncheckedCreateWithoutSong1Input[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutSong1Input | Prisma.RaceCreateOrConnectWithoutSong1Input[];
    createMany?: Prisma.RaceCreateManySong1InputEnvelope;
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
};
export type RaceCreateNestedManyWithoutSong2Input = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutSong2Input, Prisma.RaceUncheckedCreateWithoutSong2Input> | Prisma.RaceCreateWithoutSong2Input[] | Prisma.RaceUncheckedCreateWithoutSong2Input[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutSong2Input | Prisma.RaceCreateOrConnectWithoutSong2Input[];
    createMany?: Prisma.RaceCreateManySong2InputEnvelope;
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
};
export type RaceUncheckedCreateNestedManyWithoutSong1Input = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutSong1Input, Prisma.RaceUncheckedCreateWithoutSong1Input> | Prisma.RaceCreateWithoutSong1Input[] | Prisma.RaceUncheckedCreateWithoutSong1Input[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutSong1Input | Prisma.RaceCreateOrConnectWithoutSong1Input[];
    createMany?: Prisma.RaceCreateManySong1InputEnvelope;
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
};
export type RaceUncheckedCreateNestedManyWithoutSong2Input = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutSong2Input, Prisma.RaceUncheckedCreateWithoutSong2Input> | Prisma.RaceCreateWithoutSong2Input[] | Prisma.RaceUncheckedCreateWithoutSong2Input[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutSong2Input | Prisma.RaceCreateOrConnectWithoutSong2Input[];
    createMany?: Prisma.RaceCreateManySong2InputEnvelope;
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
};
export type RaceUpdateManyWithoutSong1NestedInput = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutSong1Input, Prisma.RaceUncheckedCreateWithoutSong1Input> | Prisma.RaceCreateWithoutSong1Input[] | Prisma.RaceUncheckedCreateWithoutSong1Input[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutSong1Input | Prisma.RaceCreateOrConnectWithoutSong1Input[];
    upsert?: Prisma.RaceUpsertWithWhereUniqueWithoutSong1Input | Prisma.RaceUpsertWithWhereUniqueWithoutSong1Input[];
    createMany?: Prisma.RaceCreateManySong1InputEnvelope;
    set?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    disconnect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    delete?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    update?: Prisma.RaceUpdateWithWhereUniqueWithoutSong1Input | Prisma.RaceUpdateWithWhereUniqueWithoutSong1Input[];
    updateMany?: Prisma.RaceUpdateManyWithWhereWithoutSong1Input | Prisma.RaceUpdateManyWithWhereWithoutSong1Input[];
    deleteMany?: Prisma.RaceScalarWhereInput | Prisma.RaceScalarWhereInput[];
};
export type RaceUpdateManyWithoutSong2NestedInput = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutSong2Input, Prisma.RaceUncheckedCreateWithoutSong2Input> | Prisma.RaceCreateWithoutSong2Input[] | Prisma.RaceUncheckedCreateWithoutSong2Input[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutSong2Input | Prisma.RaceCreateOrConnectWithoutSong2Input[];
    upsert?: Prisma.RaceUpsertWithWhereUniqueWithoutSong2Input | Prisma.RaceUpsertWithWhereUniqueWithoutSong2Input[];
    createMany?: Prisma.RaceCreateManySong2InputEnvelope;
    set?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    disconnect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    delete?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    update?: Prisma.RaceUpdateWithWhereUniqueWithoutSong2Input | Prisma.RaceUpdateWithWhereUniqueWithoutSong2Input[];
    updateMany?: Prisma.RaceUpdateManyWithWhereWithoutSong2Input | Prisma.RaceUpdateManyWithWhereWithoutSong2Input[];
    deleteMany?: Prisma.RaceScalarWhereInput | Prisma.RaceScalarWhereInput[];
};
export type RaceUncheckedUpdateManyWithoutSong1NestedInput = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutSong1Input, Prisma.RaceUncheckedCreateWithoutSong1Input> | Prisma.RaceCreateWithoutSong1Input[] | Prisma.RaceUncheckedCreateWithoutSong1Input[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutSong1Input | Prisma.RaceCreateOrConnectWithoutSong1Input[];
    upsert?: Prisma.RaceUpsertWithWhereUniqueWithoutSong1Input | Prisma.RaceUpsertWithWhereUniqueWithoutSong1Input[];
    createMany?: Prisma.RaceCreateManySong1InputEnvelope;
    set?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    disconnect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    delete?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    update?: Prisma.RaceUpdateWithWhereUniqueWithoutSong1Input | Prisma.RaceUpdateWithWhereUniqueWithoutSong1Input[];
    updateMany?: Prisma.RaceUpdateManyWithWhereWithoutSong1Input | Prisma.RaceUpdateManyWithWhereWithoutSong1Input[];
    deleteMany?: Prisma.RaceScalarWhereInput | Prisma.RaceScalarWhereInput[];
};
export type RaceUncheckedUpdateManyWithoutSong2NestedInput = {
    create?: Prisma.XOR<Prisma.RaceCreateWithoutSong2Input, Prisma.RaceUncheckedCreateWithoutSong2Input> | Prisma.RaceCreateWithoutSong2Input[] | Prisma.RaceUncheckedCreateWithoutSong2Input[];
    connectOrCreate?: Prisma.RaceCreateOrConnectWithoutSong2Input | Prisma.RaceCreateOrConnectWithoutSong2Input[];
    upsert?: Prisma.RaceUpsertWithWhereUniqueWithoutSong2Input | Prisma.RaceUpsertWithWhereUniqueWithoutSong2Input[];
    createMany?: Prisma.RaceCreateManySong2InputEnvelope;
    set?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    disconnect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    delete?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    connect?: Prisma.RaceWhereUniqueInput | Prisma.RaceWhereUniqueInput[];
    update?: Prisma.RaceUpdateWithWhereUniqueWithoutSong2Input | Prisma.RaceUpdateWithWhereUniqueWithoutSong2Input[];
    updateMany?: Prisma.RaceUpdateManyWithWhereWithoutSong2Input | Prisma.RaceUpdateManyWithWhereWithoutSong2Input[];
    deleteMany?: Prisma.RaceScalarWhereInput | Prisma.RaceScalarWhereInput[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type RaceCreateWithoutShowInput = {
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    person2?: string | null;
    bikeWon?: number;
    song1?: Prisma.SongCreateNestedOneWithoutPickedByPerson1Input;
    song2?: Prisma.SongCreateNestedOneWithoutPickedByPerson2Input;
};
export type RaceUncheckedCreateWithoutShowInput = {
    id?: number;
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    song1Id?: number | null;
    person2?: string | null;
    song2Id?: number | null;
    bikeWon?: number;
};
export type RaceCreateOrConnectWithoutShowInput = {
    where: Prisma.RaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.RaceCreateWithoutShowInput, Prisma.RaceUncheckedCreateWithoutShowInput>;
};
export type RaceCreateManyShowInputEnvelope = {
    data: Prisma.RaceCreateManyShowInput | Prisma.RaceCreateManyShowInput[];
};
export type RaceUpsertWithWhereUniqueWithoutShowInput = {
    where: Prisma.RaceWhereUniqueInput;
    update: Prisma.XOR<Prisma.RaceUpdateWithoutShowInput, Prisma.RaceUncheckedUpdateWithoutShowInput>;
    create: Prisma.XOR<Prisma.RaceCreateWithoutShowInput, Prisma.RaceUncheckedCreateWithoutShowInput>;
};
export type RaceUpdateWithWhereUniqueWithoutShowInput = {
    where: Prisma.RaceWhereUniqueInput;
    data: Prisma.XOR<Prisma.RaceUpdateWithoutShowInput, Prisma.RaceUncheckedUpdateWithoutShowInput>;
};
export type RaceUpdateManyWithWhereWithoutShowInput = {
    where: Prisma.RaceScalarWhereInput;
    data: Prisma.XOR<Prisma.RaceUpdateManyMutationInput, Prisma.RaceUncheckedUpdateManyWithoutShowInput>;
};
export type RaceScalarWhereInput = {
    AND?: Prisma.RaceScalarWhereInput | Prisma.RaceScalarWhereInput[];
    OR?: Prisma.RaceScalarWhereInput[];
    NOT?: Prisma.RaceScalarWhereInput | Prisma.RaceScalarWhereInput[];
    id?: Prisma.IntFilter<"Race"> | number;
    showId?: Prisma.IntFilter<"Race"> | number;
    orderNumber?: Prisma.IntFilter<"Race"> | number;
    createdAt?: Prisma.DateTimeFilter<"Race"> | Date | string;
    raced?: Prisma.BoolFilter<"Race"> | boolean;
    raceState?: Prisma.StringFilter<"Race"> | string;
    person1?: Prisma.StringNullableFilter<"Race"> | string | null;
    song1Id?: Prisma.IntNullableFilter<"Race"> | number | null;
    person2?: Prisma.StringNullableFilter<"Race"> | string | null;
    song2Id?: Prisma.IntNullableFilter<"Race"> | number | null;
    bikeWon?: Prisma.IntFilter<"Race"> | number;
};
export type RaceCreateWithoutSong1Input = {
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    person2?: string | null;
    bikeWon?: number;
    show: Prisma.ShowCreateNestedOneWithoutRacesInput;
    song2?: Prisma.SongCreateNestedOneWithoutPickedByPerson2Input;
};
export type RaceUncheckedCreateWithoutSong1Input = {
    id?: number;
    showId: number;
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    person2?: string | null;
    song2Id?: number | null;
    bikeWon?: number;
};
export type RaceCreateOrConnectWithoutSong1Input = {
    where: Prisma.RaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.RaceCreateWithoutSong1Input, Prisma.RaceUncheckedCreateWithoutSong1Input>;
};
export type RaceCreateManySong1InputEnvelope = {
    data: Prisma.RaceCreateManySong1Input | Prisma.RaceCreateManySong1Input[];
};
export type RaceCreateWithoutSong2Input = {
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    person2?: string | null;
    bikeWon?: number;
    show: Prisma.ShowCreateNestedOneWithoutRacesInput;
    song1?: Prisma.SongCreateNestedOneWithoutPickedByPerson1Input;
};
export type RaceUncheckedCreateWithoutSong2Input = {
    id?: number;
    showId: number;
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    song1Id?: number | null;
    person2?: string | null;
    bikeWon?: number;
};
export type RaceCreateOrConnectWithoutSong2Input = {
    where: Prisma.RaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.RaceCreateWithoutSong2Input, Prisma.RaceUncheckedCreateWithoutSong2Input>;
};
export type RaceCreateManySong2InputEnvelope = {
    data: Prisma.RaceCreateManySong2Input | Prisma.RaceCreateManySong2Input[];
};
export type RaceUpsertWithWhereUniqueWithoutSong1Input = {
    where: Prisma.RaceWhereUniqueInput;
    update: Prisma.XOR<Prisma.RaceUpdateWithoutSong1Input, Prisma.RaceUncheckedUpdateWithoutSong1Input>;
    create: Prisma.XOR<Prisma.RaceCreateWithoutSong1Input, Prisma.RaceUncheckedCreateWithoutSong1Input>;
};
export type RaceUpdateWithWhereUniqueWithoutSong1Input = {
    where: Prisma.RaceWhereUniqueInput;
    data: Prisma.XOR<Prisma.RaceUpdateWithoutSong1Input, Prisma.RaceUncheckedUpdateWithoutSong1Input>;
};
export type RaceUpdateManyWithWhereWithoutSong1Input = {
    where: Prisma.RaceScalarWhereInput;
    data: Prisma.XOR<Prisma.RaceUpdateManyMutationInput, Prisma.RaceUncheckedUpdateManyWithoutSong1Input>;
};
export type RaceUpsertWithWhereUniqueWithoutSong2Input = {
    where: Prisma.RaceWhereUniqueInput;
    update: Prisma.XOR<Prisma.RaceUpdateWithoutSong2Input, Prisma.RaceUncheckedUpdateWithoutSong2Input>;
    create: Prisma.XOR<Prisma.RaceCreateWithoutSong2Input, Prisma.RaceUncheckedCreateWithoutSong2Input>;
};
export type RaceUpdateWithWhereUniqueWithoutSong2Input = {
    where: Prisma.RaceWhereUniqueInput;
    data: Prisma.XOR<Prisma.RaceUpdateWithoutSong2Input, Prisma.RaceUncheckedUpdateWithoutSong2Input>;
};
export type RaceUpdateManyWithWhereWithoutSong2Input = {
    where: Prisma.RaceScalarWhereInput;
    data: Prisma.XOR<Prisma.RaceUpdateManyMutationInput, Prisma.RaceUncheckedUpdateManyWithoutSong2Input>;
};
export type RaceCreateManyShowInput = {
    id?: number;
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    song1Id?: number | null;
    person2?: string | null;
    song2Id?: number | null;
    bikeWon?: number;
};
export type RaceUpdateWithoutShowInput = {
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
    song1?: Prisma.SongUpdateOneWithoutPickedByPerson1NestedInput;
    song2?: Prisma.SongUpdateOneWithoutPickedByPerson2NestedInput;
};
export type RaceUncheckedUpdateWithoutShowInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song1Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song2Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RaceUncheckedUpdateManyWithoutShowInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song1Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song2Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RaceCreateManySong1Input = {
    id?: number;
    showId: number;
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    person2?: string | null;
    song2Id?: number | null;
    bikeWon?: number;
};
export type RaceCreateManySong2Input = {
    id?: number;
    showId: number;
    orderNumber: number;
    createdAt: Date | string;
    raced?: boolean;
    raceState?: string;
    person1?: string | null;
    song1Id?: number | null;
    person2?: string | null;
    bikeWon?: number;
};
export type RaceUpdateWithoutSong1Input = {
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
    show?: Prisma.ShowUpdateOneRequiredWithoutRacesNestedInput;
    song2?: Prisma.SongUpdateOneWithoutPickedByPerson2NestedInput;
};
export type RaceUncheckedUpdateWithoutSong1Input = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    showId?: Prisma.IntFieldUpdateOperationsInput | number;
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song2Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RaceUncheckedUpdateManyWithoutSong1Input = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    showId?: Prisma.IntFieldUpdateOperationsInput | number;
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song2Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RaceUpdateWithoutSong2Input = {
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
    show?: Prisma.ShowUpdateOneRequiredWithoutRacesNestedInput;
    song1?: Prisma.SongUpdateOneWithoutPickedByPerson1NestedInput;
};
export type RaceUncheckedUpdateWithoutSong2Input = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    showId?: Prisma.IntFieldUpdateOperationsInput | number;
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song1Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RaceUncheckedUpdateManyWithoutSong2Input = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    showId?: Prisma.IntFieldUpdateOperationsInput | number;
    orderNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raced?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    raceState?: Prisma.StringFieldUpdateOperationsInput | string;
    person1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    song1Id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    person2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bikeWon?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RaceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    showId?: boolean;
    orderNumber?: boolean;
    createdAt?: boolean;
    raced?: boolean;
    raceState?: boolean;
    person1?: boolean;
    song1Id?: boolean;
    person2?: boolean;
    song2Id?: boolean;
    bikeWon?: boolean;
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
    song1?: boolean | Prisma.Race$song1Args<ExtArgs>;
    song2?: boolean | Prisma.Race$song2Args<ExtArgs>;
}, ExtArgs["result"]["race"]>;
export type RaceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    showId?: boolean;
    orderNumber?: boolean;
    createdAt?: boolean;
    raced?: boolean;
    raceState?: boolean;
    person1?: boolean;
    song1Id?: boolean;
    person2?: boolean;
    song2Id?: boolean;
    bikeWon?: boolean;
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
    song1?: boolean | Prisma.Race$song1Args<ExtArgs>;
    song2?: boolean | Prisma.Race$song2Args<ExtArgs>;
}, ExtArgs["result"]["race"]>;
export type RaceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    showId?: boolean;
    orderNumber?: boolean;
    createdAt?: boolean;
    raced?: boolean;
    raceState?: boolean;
    person1?: boolean;
    song1Id?: boolean;
    person2?: boolean;
    song2Id?: boolean;
    bikeWon?: boolean;
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
    song1?: boolean | Prisma.Race$song1Args<ExtArgs>;
    song2?: boolean | Prisma.Race$song2Args<ExtArgs>;
}, ExtArgs["result"]["race"]>;
export type RaceSelectScalar = {
    id?: boolean;
    showId?: boolean;
    orderNumber?: boolean;
    createdAt?: boolean;
    raced?: boolean;
    raceState?: boolean;
    person1?: boolean;
    song1Id?: boolean;
    person2?: boolean;
    song2Id?: boolean;
    bikeWon?: boolean;
};
export type RaceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "showId" | "orderNumber" | "createdAt" | "raced" | "raceState" | "person1" | "song1Id" | "person2" | "song2Id" | "bikeWon", ExtArgs["result"]["race"]>;
export type RaceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
    song1?: boolean | Prisma.Race$song1Args<ExtArgs>;
    song2?: boolean | Prisma.Race$song2Args<ExtArgs>;
};
export type RaceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
    song1?: boolean | Prisma.Race$song1Args<ExtArgs>;
    song2?: boolean | Prisma.Race$song2Args<ExtArgs>;
};
export type RaceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
    song1?: boolean | Prisma.Race$song1Args<ExtArgs>;
    song2?: boolean | Prisma.Race$song2Args<ExtArgs>;
};
export type $RacePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Race";
    objects: {
        show: Prisma.$ShowPayload<ExtArgs>;
        song1: Prisma.$SongPayload<ExtArgs> | null;
        song2: Prisma.$SongPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        showId: number;
        orderNumber: number;
        createdAt: Date;
        raced: boolean;
        raceState: string;
        person1: string | null;
        song1Id: number | null;
        person2: string | null;
        song2Id: number | null;
        bikeWon: number;
    }, ExtArgs["result"]["race"]>;
    composites: {};
};
export type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RacePayload, S>;
export type RaceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RaceCountAggregateInputType | true;
};
export interface RaceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Race'];
        meta: {
            name: 'Race';
        };
    };
    findUnique<T extends RaceFindUniqueArgs>(args: Prisma.SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RaceClient<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RaceClient<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RaceFindFirstArgs>(args?: Prisma.SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma.Prisma__RaceClient<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RaceClient<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RaceFindManyArgs>(args?: Prisma.SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RaceCreateArgs>(args: Prisma.SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma.Prisma__RaceClient<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RaceCreateManyArgs>(args?: Prisma.SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RaceDeleteArgs>(args: Prisma.SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma.Prisma__RaceClient<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RaceUpdateArgs>(args: Prisma.SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma.Prisma__RaceClient<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RaceDeleteManyArgs>(args?: Prisma.SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RaceUpdateManyArgs>(args: Prisma.SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RaceUpsertArgs>(args: Prisma.SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma.Prisma__RaceClient<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RaceCountArgs>(args?: Prisma.Subset<T, RaceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RaceCountAggregateOutputType> : number>;
    aggregate<T extends RaceAggregateArgs>(args: Prisma.Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>;
    groupBy<T extends RaceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RaceGroupByArgs['orderBy'];
    } : {
        orderBy?: RaceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RaceFieldRefs;
}
export interface Prisma__RaceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    show<T extends Prisma.ShowDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShowDefaultArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    song1<T extends Prisma.Race$song1Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Race$song1Args<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    song2<T extends Prisma.Race$song2Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Race$song2Args<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RaceFieldRefs {
    readonly id: Prisma.FieldRef<"Race", 'Int'>;
    readonly showId: Prisma.FieldRef<"Race", 'Int'>;
    readonly orderNumber: Prisma.FieldRef<"Race", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Race", 'DateTime'>;
    readonly raced: Prisma.FieldRef<"Race", 'Boolean'>;
    readonly raceState: Prisma.FieldRef<"Race", 'String'>;
    readonly person1: Prisma.FieldRef<"Race", 'String'>;
    readonly song1Id: Prisma.FieldRef<"Race", 'Int'>;
    readonly person2: Prisma.FieldRef<"Race", 'String'>;
    readonly song2Id: Prisma.FieldRef<"Race", 'Int'>;
    readonly bikeWon: Prisma.FieldRef<"Race", 'Int'>;
}
export type RaceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
    where: Prisma.RaceWhereUniqueInput;
};
export type RaceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
    where: Prisma.RaceWhereUniqueInput;
};
export type RaceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
    where?: Prisma.RaceWhereInput;
    orderBy?: Prisma.RaceOrderByWithRelationInput | Prisma.RaceOrderByWithRelationInput[];
    cursor?: Prisma.RaceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RaceScalarFieldEnum | Prisma.RaceScalarFieldEnum[];
};
export type RaceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
    where?: Prisma.RaceWhereInput;
    orderBy?: Prisma.RaceOrderByWithRelationInput | Prisma.RaceOrderByWithRelationInput[];
    cursor?: Prisma.RaceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RaceScalarFieldEnum | Prisma.RaceScalarFieldEnum[];
};
export type RaceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
    where?: Prisma.RaceWhereInput;
    orderBy?: Prisma.RaceOrderByWithRelationInput | Prisma.RaceOrderByWithRelationInput[];
    cursor?: Prisma.RaceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RaceScalarFieldEnum | Prisma.RaceScalarFieldEnum[];
};
export type RaceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RaceCreateInput, Prisma.RaceUncheckedCreateInput>;
};
export type RaceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RaceCreateManyInput | Prisma.RaceCreateManyInput[];
};
export type RaceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    data: Prisma.RaceCreateManyInput | Prisma.RaceCreateManyInput[];
    include?: Prisma.RaceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RaceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RaceUpdateInput, Prisma.RaceUncheckedUpdateInput>;
    where: Prisma.RaceWhereUniqueInput;
};
export type RaceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RaceUpdateManyMutationInput, Prisma.RaceUncheckedUpdateManyInput>;
    where?: Prisma.RaceWhereInput;
    limit?: number;
};
export type RaceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RaceUpdateManyMutationInput, Prisma.RaceUncheckedUpdateManyInput>;
    where?: Prisma.RaceWhereInput;
    limit?: number;
    include?: Prisma.RaceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RaceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
    where: Prisma.RaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.RaceCreateInput, Prisma.RaceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RaceUpdateInput, Prisma.RaceUncheckedUpdateInput>;
};
export type RaceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
    where: Prisma.RaceWhereUniqueInput;
};
export type RaceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RaceWhereInput;
    limit?: number;
};
export type Race$song1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where?: Prisma.SongWhereInput;
};
export type Race$song2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where?: Prisma.SongWhereInput;
};
export type RaceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RaceSelect<ExtArgs> | null;
    omit?: Prisma.RaceOmit<ExtArgs> | null;
    include?: Prisma.RaceInclude<ExtArgs> | null;
};
