import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SongModel = runtime.Types.Result.DefaultSelection<Prisma.$SongPayload>;
export type AggregateSong = {
    _count: SongCountAggregateOutputType | null;
    _avg: SongAvgAggregateOutputType | null;
    _sum: SongSumAggregateOutputType | null;
    _min: SongMinAggregateOutputType | null;
    _max: SongMaxAggregateOutputType | null;
};
export type SongAvgAggregateOutputType = {
    id: number | null;
};
export type SongSumAggregateOutputType = {
    id: number | null;
};
export type SongMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    artist: string | null;
    selectable: boolean | null;
    deleted: boolean | null;
    origin: string | null;
};
export type SongMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    artist: string | null;
    selectable: boolean | null;
    deleted: boolean | null;
    origin: string | null;
};
export type SongCountAggregateOutputType = {
    id: number;
    name: number;
    artist: number;
    selectable: number;
    deleted: number;
    origin: number;
    _all: number;
};
export type SongAvgAggregateInputType = {
    id?: true;
};
export type SongSumAggregateInputType = {
    id?: true;
};
export type SongMinAggregateInputType = {
    id?: true;
    name?: true;
    artist?: true;
    selectable?: true;
    deleted?: true;
    origin?: true;
};
export type SongMaxAggregateInputType = {
    id?: true;
    name?: true;
    artist?: true;
    selectable?: true;
    deleted?: true;
    origin?: true;
};
export type SongCountAggregateInputType = {
    id?: true;
    name?: true;
    artist?: true;
    selectable?: true;
    deleted?: true;
    origin?: true;
    _all?: true;
};
export type SongAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    cursor?: Prisma.SongWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SongCountAggregateInputType;
    _avg?: SongAvgAggregateInputType;
    _sum?: SongSumAggregateInputType;
    _min?: SongMinAggregateInputType;
    _max?: SongMaxAggregateInputType;
};
export type GetSongAggregateType<T extends SongAggregateArgs> = {
    [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSong[P]> : Prisma.GetScalarType<T[P], AggregateSong[P]>;
};
export type SongGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithAggregationInput | Prisma.SongOrderByWithAggregationInput[];
    by: Prisma.SongScalarFieldEnum[] | Prisma.SongScalarFieldEnum;
    having?: Prisma.SongScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SongCountAggregateInputType | true;
    _avg?: SongAvgAggregateInputType;
    _sum?: SongSumAggregateInputType;
    _min?: SongMinAggregateInputType;
    _max?: SongMaxAggregateInputType;
};
export type SongGroupByOutputType = {
    id: number;
    name: string;
    artist: string;
    selectable: boolean;
    deleted: boolean;
    origin: string;
    _count: SongCountAggregateOutputType | null;
    _avg: SongAvgAggregateOutputType | null;
    _sum: SongSumAggregateOutputType | null;
    _min: SongMinAggregateOutputType | null;
    _max: SongMaxAggregateOutputType | null;
};
export type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SongGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SongGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SongGroupByOutputType[P]>;
}>>;
export type SongWhereInput = {
    AND?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    OR?: Prisma.SongWhereInput[];
    NOT?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    id?: Prisma.IntFilter<"Song"> | number;
    name?: Prisma.StringFilter<"Song"> | string;
    artist?: Prisma.StringFilter<"Song"> | string;
    selectable?: Prisma.BoolFilter<"Song"> | boolean;
    deleted?: Prisma.BoolFilter<"Song"> | boolean;
    origin?: Prisma.StringFilter<"Song"> | string;
    pickedByPerson1?: Prisma.RaceListRelationFilter;
    pickedByPerson2?: Prisma.RaceListRelationFilter;
};
export type SongOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    selectable?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
    pickedByPerson1?: Prisma.RaceOrderByRelationAggregateInput;
    pickedByPerson2?: Prisma.RaceOrderByRelationAggregateInput;
};
export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    OR?: Prisma.SongWhereInput[];
    NOT?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    name?: Prisma.StringFilter<"Song"> | string;
    artist?: Prisma.StringFilter<"Song"> | string;
    selectable?: Prisma.BoolFilter<"Song"> | boolean;
    deleted?: Prisma.BoolFilter<"Song"> | boolean;
    origin?: Prisma.StringFilter<"Song"> | string;
    pickedByPerson1?: Prisma.RaceListRelationFilter;
    pickedByPerson2?: Prisma.RaceListRelationFilter;
}, "id">;
export type SongOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    selectable?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
    _count?: Prisma.SongCountOrderByAggregateInput;
    _avg?: Prisma.SongAvgOrderByAggregateInput;
    _max?: Prisma.SongMaxOrderByAggregateInput;
    _min?: Prisma.SongMinOrderByAggregateInput;
    _sum?: Prisma.SongSumOrderByAggregateInput;
};
export type SongScalarWhereWithAggregatesInput = {
    AND?: Prisma.SongScalarWhereWithAggregatesInput | Prisma.SongScalarWhereWithAggregatesInput[];
    OR?: Prisma.SongScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SongScalarWhereWithAggregatesInput | Prisma.SongScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Song"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Song"> | string;
    artist?: Prisma.StringWithAggregatesFilter<"Song"> | string;
    selectable?: Prisma.BoolWithAggregatesFilter<"Song"> | boolean;
    deleted?: Prisma.BoolWithAggregatesFilter<"Song"> | boolean;
    origin?: Prisma.StringWithAggregatesFilter<"Song"> | string;
};
export type SongCreateInput = {
    name: string;
    artist: string;
    selectable?: boolean;
    deleted?: boolean;
    origin?: string;
    pickedByPerson1?: Prisma.RaceCreateNestedManyWithoutSong1Input;
    pickedByPerson2?: Prisma.RaceCreateNestedManyWithoutSong2Input;
};
export type SongUncheckedCreateInput = {
    id?: number;
    name: string;
    artist: string;
    selectable?: boolean;
    deleted?: boolean;
    origin?: string;
    pickedByPerson1?: Prisma.RaceUncheckedCreateNestedManyWithoutSong1Input;
    pickedByPerson2?: Prisma.RaceUncheckedCreateNestedManyWithoutSong2Input;
};
export type SongUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    selectable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    pickedByPerson1?: Prisma.RaceUpdateManyWithoutSong1NestedInput;
    pickedByPerson2?: Prisma.RaceUpdateManyWithoutSong2NestedInput;
};
export type SongUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    selectable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    pickedByPerson1?: Prisma.RaceUncheckedUpdateManyWithoutSong1NestedInput;
    pickedByPerson2?: Prisma.RaceUncheckedUpdateManyWithoutSong2NestedInput;
};
export type SongCreateManyInput = {
    id?: number;
    name: string;
    artist: string;
    selectable?: boolean;
    deleted?: boolean;
    origin?: string;
};
export type SongUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    selectable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SongUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    selectable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SongCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    selectable?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
};
export type SongAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SongMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    selectable?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
};
export type SongMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    selectable?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
};
export type SongSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SongNullableScalarRelationFilter = {
    is?: Prisma.SongWhereInput | null;
    isNot?: Prisma.SongWhereInput | null;
};
export type SongCreateNestedOneWithoutPickedByPerson1Input = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPickedByPerson1Input, Prisma.SongUncheckedCreateWithoutPickedByPerson1Input>;
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPickedByPerson1Input;
    connect?: Prisma.SongWhereUniqueInput;
};
export type SongCreateNestedOneWithoutPickedByPerson2Input = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPickedByPerson2Input, Prisma.SongUncheckedCreateWithoutPickedByPerson2Input>;
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPickedByPerson2Input;
    connect?: Prisma.SongWhereUniqueInput;
};
export type SongUpdateOneWithoutPickedByPerson1NestedInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPickedByPerson1Input, Prisma.SongUncheckedCreateWithoutPickedByPerson1Input>;
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPickedByPerson1Input;
    upsert?: Prisma.SongUpsertWithoutPickedByPerson1Input;
    disconnect?: Prisma.SongWhereInput | boolean;
    delete?: Prisma.SongWhereInput | boolean;
    connect?: Prisma.SongWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SongUpdateToOneWithWhereWithoutPickedByPerson1Input, Prisma.SongUpdateWithoutPickedByPerson1Input>, Prisma.SongUncheckedUpdateWithoutPickedByPerson1Input>;
};
export type SongUpdateOneWithoutPickedByPerson2NestedInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPickedByPerson2Input, Prisma.SongUncheckedCreateWithoutPickedByPerson2Input>;
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPickedByPerson2Input;
    upsert?: Prisma.SongUpsertWithoutPickedByPerson2Input;
    disconnect?: Prisma.SongWhereInput | boolean;
    delete?: Prisma.SongWhereInput | boolean;
    connect?: Prisma.SongWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SongUpdateToOneWithWhereWithoutPickedByPerson2Input, Prisma.SongUpdateWithoutPickedByPerson2Input>, Prisma.SongUncheckedUpdateWithoutPickedByPerson2Input>;
};
export type SongCreateWithoutPickedByPerson1Input = {
    name: string;
    artist: string;
    selectable?: boolean;
    deleted?: boolean;
    origin?: string;
    pickedByPerson2?: Prisma.RaceCreateNestedManyWithoutSong2Input;
};
export type SongUncheckedCreateWithoutPickedByPerson1Input = {
    id?: number;
    name: string;
    artist: string;
    selectable?: boolean;
    deleted?: boolean;
    origin?: string;
    pickedByPerson2?: Prisma.RaceUncheckedCreateNestedManyWithoutSong2Input;
};
export type SongCreateOrConnectWithoutPickedByPerson1Input = {
    where: Prisma.SongWhereUniqueInput;
    create: Prisma.XOR<Prisma.SongCreateWithoutPickedByPerson1Input, Prisma.SongUncheckedCreateWithoutPickedByPerson1Input>;
};
export type SongCreateWithoutPickedByPerson2Input = {
    name: string;
    artist: string;
    selectable?: boolean;
    deleted?: boolean;
    origin?: string;
    pickedByPerson1?: Prisma.RaceCreateNestedManyWithoutSong1Input;
};
export type SongUncheckedCreateWithoutPickedByPerson2Input = {
    id?: number;
    name: string;
    artist: string;
    selectable?: boolean;
    deleted?: boolean;
    origin?: string;
    pickedByPerson1?: Prisma.RaceUncheckedCreateNestedManyWithoutSong1Input;
};
export type SongCreateOrConnectWithoutPickedByPerson2Input = {
    where: Prisma.SongWhereUniqueInput;
    create: Prisma.XOR<Prisma.SongCreateWithoutPickedByPerson2Input, Prisma.SongUncheckedCreateWithoutPickedByPerson2Input>;
};
export type SongUpsertWithoutPickedByPerson1Input = {
    update: Prisma.XOR<Prisma.SongUpdateWithoutPickedByPerson1Input, Prisma.SongUncheckedUpdateWithoutPickedByPerson1Input>;
    create: Prisma.XOR<Prisma.SongCreateWithoutPickedByPerson1Input, Prisma.SongUncheckedCreateWithoutPickedByPerson1Input>;
    where?: Prisma.SongWhereInput;
};
export type SongUpdateToOneWithWhereWithoutPickedByPerson1Input = {
    where?: Prisma.SongWhereInput;
    data: Prisma.XOR<Prisma.SongUpdateWithoutPickedByPerson1Input, Prisma.SongUncheckedUpdateWithoutPickedByPerson1Input>;
};
export type SongUpdateWithoutPickedByPerson1Input = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    selectable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    pickedByPerson2?: Prisma.RaceUpdateManyWithoutSong2NestedInput;
};
export type SongUncheckedUpdateWithoutPickedByPerson1Input = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    selectable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    pickedByPerson2?: Prisma.RaceUncheckedUpdateManyWithoutSong2NestedInput;
};
export type SongUpsertWithoutPickedByPerson2Input = {
    update: Prisma.XOR<Prisma.SongUpdateWithoutPickedByPerson2Input, Prisma.SongUncheckedUpdateWithoutPickedByPerson2Input>;
    create: Prisma.XOR<Prisma.SongCreateWithoutPickedByPerson2Input, Prisma.SongUncheckedCreateWithoutPickedByPerson2Input>;
    where?: Prisma.SongWhereInput;
};
export type SongUpdateToOneWithWhereWithoutPickedByPerson2Input = {
    where?: Prisma.SongWhereInput;
    data: Prisma.XOR<Prisma.SongUpdateWithoutPickedByPerson2Input, Prisma.SongUncheckedUpdateWithoutPickedByPerson2Input>;
};
export type SongUpdateWithoutPickedByPerson2Input = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    selectable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    pickedByPerson1?: Prisma.RaceUpdateManyWithoutSong1NestedInput;
};
export type SongUncheckedUpdateWithoutPickedByPerson2Input = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    selectable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    pickedByPerson1?: Prisma.RaceUncheckedUpdateManyWithoutSong1NestedInput;
};
export type SongCountOutputType = {
    pickedByPerson1: number;
    pickedByPerson2: number;
};
export type SongCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pickedByPerson1?: boolean | SongCountOutputTypeCountPickedByPerson1Args;
    pickedByPerson2?: boolean | SongCountOutputTypeCountPickedByPerson2Args;
};
export type SongCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongCountOutputTypeSelect<ExtArgs> | null;
};
export type SongCountOutputTypeCountPickedByPerson1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RaceWhereInput;
};
export type SongCountOutputTypeCountPickedByPerson2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RaceWhereInput;
};
export type SongSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    artist?: boolean;
    selectable?: boolean;
    deleted?: boolean;
    origin?: boolean;
    pickedByPerson1?: boolean | Prisma.Song$pickedByPerson1Args<ExtArgs>;
    pickedByPerson2?: boolean | Prisma.Song$pickedByPerson2Args<ExtArgs>;
    _count?: boolean | Prisma.SongCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["song"]>;
export type SongSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    artist?: boolean;
    selectable?: boolean;
    deleted?: boolean;
    origin?: boolean;
}, ExtArgs["result"]["song"]>;
export type SongSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    artist?: boolean;
    selectable?: boolean;
    deleted?: boolean;
    origin?: boolean;
}, ExtArgs["result"]["song"]>;
export type SongSelectScalar = {
    id?: boolean;
    name?: boolean;
    artist?: boolean;
    selectable?: boolean;
    deleted?: boolean;
    origin?: boolean;
};
export type SongOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "artist" | "selectable" | "deleted" | "origin", ExtArgs["result"]["song"]>;
export type SongInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pickedByPerson1?: boolean | Prisma.Song$pickedByPerson1Args<ExtArgs>;
    pickedByPerson2?: boolean | Prisma.Song$pickedByPerson2Args<ExtArgs>;
    _count?: boolean | Prisma.SongCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SongIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SongIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SongPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Song";
    objects: {
        pickedByPerson1: Prisma.$RacePayload<ExtArgs>[];
        pickedByPerson2: Prisma.$RacePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        artist: string;
        selectable: boolean;
        deleted: boolean;
        origin: string;
    }, ExtArgs["result"]["song"]>;
    composites: {};
};
export type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SongPayload, S>;
export type SongCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SongCountAggregateInputType | true;
};
export interface SongDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Song'];
        meta: {
            name: 'Song';
        };
    };
    findUnique<T extends SongFindUniqueArgs>(args: Prisma.SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SongFindFirstArgs>(args?: Prisma.SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SongFindManyArgs>(args?: Prisma.SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SongCreateArgs>(args: Prisma.SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SongCreateManyArgs>(args?: Prisma.SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SongDeleteArgs>(args: Prisma.SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SongUpdateArgs>(args: Prisma.SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SongDeleteManyArgs>(args?: Prisma.SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SongUpdateManyArgs>(args: Prisma.SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SongUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SongUpsertArgs>(args: Prisma.SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SongCountArgs>(args?: Prisma.Subset<T, SongCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SongCountAggregateOutputType> : number>;
    aggregate<T extends SongAggregateArgs>(args: Prisma.Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>;
    groupBy<T extends SongGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SongGroupByArgs['orderBy'];
    } : {
        orderBy?: SongGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SongFieldRefs;
}
export interface Prisma__SongClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pickedByPerson1<T extends Prisma.Song$pickedByPerson1Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Song$pickedByPerson1Args<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pickedByPerson2<T extends Prisma.Song$pickedByPerson2Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Song$pickedByPerson2Args<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SongFieldRefs {
    readonly id: Prisma.FieldRef<"Song", 'Int'>;
    readonly name: Prisma.FieldRef<"Song", 'String'>;
    readonly artist: Prisma.FieldRef<"Song", 'String'>;
    readonly selectable: Prisma.FieldRef<"Song", 'Boolean'>;
    readonly deleted: Prisma.FieldRef<"Song", 'Boolean'>;
    readonly origin: Prisma.FieldRef<"Song", 'String'>;
}
export type SongFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where: Prisma.SongWhereUniqueInput;
};
export type SongFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where: Prisma.SongWhereUniqueInput;
};
export type SongFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    cursor?: Prisma.SongWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
export type SongFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    cursor?: Prisma.SongWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
export type SongFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    cursor?: Prisma.SongWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
export type SongCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SongCreateInput, Prisma.SongUncheckedCreateInput>;
};
export type SongCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SongCreateManyInput | Prisma.SongCreateManyInput[];
};
export type SongCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    data: Prisma.SongCreateManyInput | Prisma.SongCreateManyInput[];
};
export type SongUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SongUpdateInput, Prisma.SongUncheckedUpdateInput>;
    where: Prisma.SongWhereUniqueInput;
};
export type SongUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SongUpdateManyMutationInput, Prisma.SongUncheckedUpdateManyInput>;
    where?: Prisma.SongWhereInput;
    limit?: number;
};
export type SongUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SongUpdateManyMutationInput, Prisma.SongUncheckedUpdateManyInput>;
    where?: Prisma.SongWhereInput;
    limit?: number;
};
export type SongUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where: Prisma.SongWhereUniqueInput;
    create: Prisma.XOR<Prisma.SongCreateInput, Prisma.SongUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SongUpdateInput, Prisma.SongUncheckedUpdateInput>;
};
export type SongDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where: Prisma.SongWhereUniqueInput;
};
export type SongDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SongWhereInput;
    limit?: number;
};
export type Song$pickedByPerson1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Song$pickedByPerson2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SongDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
};
