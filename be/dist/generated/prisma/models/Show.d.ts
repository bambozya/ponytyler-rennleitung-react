import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ShowModel = runtime.Types.Result.DefaultSelection<Prisma.$ShowPayload>;
export type AggregateShow = {
    _count: ShowCountAggregateOutputType | null;
    _avg: ShowAvgAggregateOutputType | null;
    _sum: ShowSumAggregateOutputType | null;
    _min: ShowMinAggregateOutputType | null;
    _max: ShowMaxAggregateOutputType | null;
};
export type ShowAvgAggregateOutputType = {
    id: number | null;
    duration: number | null;
};
export type ShowSumAggregateOutputType = {
    id: number | null;
    duration: number | null;
};
export type ShowMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    date: Date | null;
    actualStartTime: Date | null;
    duration: number | null;
    finished: boolean | null;
    active: boolean | null;
};
export type ShowMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    date: Date | null;
    actualStartTime: Date | null;
    duration: number | null;
    finished: boolean | null;
    active: boolean | null;
};
export type ShowCountAggregateOutputType = {
    id: number;
    name: number;
    date: number;
    actualStartTime: number;
    duration: number;
    finished: number;
    active: number;
    _all: number;
};
export type ShowAvgAggregateInputType = {
    id?: true;
    duration?: true;
};
export type ShowSumAggregateInputType = {
    id?: true;
    duration?: true;
};
export type ShowMinAggregateInputType = {
    id?: true;
    name?: true;
    date?: true;
    actualStartTime?: true;
    duration?: true;
    finished?: true;
    active?: true;
};
export type ShowMaxAggregateInputType = {
    id?: true;
    name?: true;
    date?: true;
    actualStartTime?: true;
    duration?: true;
    finished?: true;
    active?: true;
};
export type ShowCountAggregateInputType = {
    id?: true;
    name?: true;
    date?: true;
    actualStartTime?: true;
    duration?: true;
    finished?: true;
    active?: true;
    _all?: true;
};
export type ShowAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShowWhereInput;
    orderBy?: Prisma.ShowOrderByWithRelationInput | Prisma.ShowOrderByWithRelationInput[];
    cursor?: Prisma.ShowWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShowCountAggregateInputType;
    _avg?: ShowAvgAggregateInputType;
    _sum?: ShowSumAggregateInputType;
    _min?: ShowMinAggregateInputType;
    _max?: ShowMaxAggregateInputType;
};
export type GetShowAggregateType<T extends ShowAggregateArgs> = {
    [P in keyof T & keyof AggregateShow]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShow[P]> : Prisma.GetScalarType<T[P], AggregateShow[P]>;
};
export type ShowGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShowWhereInput;
    orderBy?: Prisma.ShowOrderByWithAggregationInput | Prisma.ShowOrderByWithAggregationInput[];
    by: Prisma.ShowScalarFieldEnum[] | Prisma.ShowScalarFieldEnum;
    having?: Prisma.ShowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShowCountAggregateInputType | true;
    _avg?: ShowAvgAggregateInputType;
    _sum?: ShowSumAggregateInputType;
    _min?: ShowMinAggregateInputType;
    _max?: ShowMaxAggregateInputType;
};
export type ShowGroupByOutputType = {
    id: number;
    name: string;
    date: Date | null;
    actualStartTime: Date | null;
    duration: number | null;
    finished: boolean;
    active: boolean;
    _count: ShowCountAggregateOutputType | null;
    _avg: ShowAvgAggregateOutputType | null;
    _sum: ShowSumAggregateOutputType | null;
    _min: ShowMinAggregateOutputType | null;
    _max: ShowMaxAggregateOutputType | null;
};
export type GetShowGroupByPayload<T extends ShowGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShowGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShowGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShowGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShowGroupByOutputType[P]>;
}>>;
export type ShowWhereInput = {
    AND?: Prisma.ShowWhereInput | Prisma.ShowWhereInput[];
    OR?: Prisma.ShowWhereInput[];
    NOT?: Prisma.ShowWhereInput | Prisma.ShowWhereInput[];
    id?: Prisma.IntFilter<"Show"> | number;
    name?: Prisma.StringFilter<"Show"> | string;
    date?: Prisma.DateTimeNullableFilter<"Show"> | Date | string | null;
    actualStartTime?: Prisma.DateTimeNullableFilter<"Show"> | Date | string | null;
    duration?: Prisma.IntNullableFilter<"Show"> | number | null;
    finished?: Prisma.BoolFilter<"Show"> | boolean;
    active?: Prisma.BoolFilter<"Show"> | boolean;
    races?: Prisma.RaceListRelationFilter;
    shifts?: Prisma.ShiftListRelationFilter;
};
export type ShowOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrderInput | Prisma.SortOrder;
    actualStartTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    finished?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    races?: Prisma.RaceOrderByRelationAggregateInput;
    shifts?: Prisma.ShiftOrderByRelationAggregateInput;
};
export type ShowWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.ShowWhereInput | Prisma.ShowWhereInput[];
    OR?: Prisma.ShowWhereInput[];
    NOT?: Prisma.ShowWhereInput | Prisma.ShowWhereInput[];
    date?: Prisma.DateTimeNullableFilter<"Show"> | Date | string | null;
    actualStartTime?: Prisma.DateTimeNullableFilter<"Show"> | Date | string | null;
    duration?: Prisma.IntNullableFilter<"Show"> | number | null;
    finished?: Prisma.BoolFilter<"Show"> | boolean;
    active?: Prisma.BoolFilter<"Show"> | boolean;
    races?: Prisma.RaceListRelationFilter;
    shifts?: Prisma.ShiftListRelationFilter;
}, "id" | "name">;
export type ShowOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrderInput | Prisma.SortOrder;
    actualStartTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    finished?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    _count?: Prisma.ShowCountOrderByAggregateInput;
    _avg?: Prisma.ShowAvgOrderByAggregateInput;
    _max?: Prisma.ShowMaxOrderByAggregateInput;
    _min?: Prisma.ShowMinOrderByAggregateInput;
    _sum?: Prisma.ShowSumOrderByAggregateInput;
};
export type ShowScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShowScalarWhereWithAggregatesInput | Prisma.ShowScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShowScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShowScalarWhereWithAggregatesInput | Prisma.ShowScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Show"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Show"> | string;
    date?: Prisma.DateTimeNullableWithAggregatesFilter<"Show"> | Date | string | null;
    actualStartTime?: Prisma.DateTimeNullableWithAggregatesFilter<"Show"> | Date | string | null;
    duration?: Prisma.IntNullableWithAggregatesFilter<"Show"> | number | null;
    finished?: Prisma.BoolWithAggregatesFilter<"Show"> | boolean;
    active?: Prisma.BoolWithAggregatesFilter<"Show"> | boolean;
};
export type ShowCreateInput = {
    name: string;
    date?: Date | string | null;
    actualStartTime?: Date | string | null;
    duration?: number | null;
    finished?: boolean;
    active?: boolean;
    races?: Prisma.RaceCreateNestedManyWithoutShowInput;
    shifts?: Prisma.ShiftCreateNestedManyWithoutShowInput;
};
export type ShowUncheckedCreateInput = {
    id?: number;
    name: string;
    date?: Date | string | null;
    actualStartTime?: Date | string | null;
    duration?: number | null;
    finished?: boolean;
    active?: boolean;
    races?: Prisma.RaceUncheckedCreateNestedManyWithoutShowInput;
    shifts?: Prisma.ShiftUncheckedCreateNestedManyWithoutShowInput;
};
export type ShowUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actualStartTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    finished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    races?: Prisma.RaceUpdateManyWithoutShowNestedInput;
    shifts?: Prisma.ShiftUpdateManyWithoutShowNestedInput;
};
export type ShowUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actualStartTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    finished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    races?: Prisma.RaceUncheckedUpdateManyWithoutShowNestedInput;
    shifts?: Prisma.ShiftUncheckedUpdateManyWithoutShowNestedInput;
};
export type ShowCreateManyInput = {
    id?: number;
    name: string;
    date?: Date | string | null;
    actualStartTime?: Date | string | null;
    duration?: number | null;
    finished?: boolean;
    active?: boolean;
};
export type ShowUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actualStartTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    finished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ShowUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actualStartTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    finished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ShowCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    actualStartTime?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    finished?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
};
export type ShowAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type ShowMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    actualStartTime?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    finished?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
};
export type ShowMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    actualStartTime?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    finished?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
};
export type ShowSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type ShowScalarRelationFilter = {
    is?: Prisma.ShowWhereInput;
    isNot?: Prisma.ShowWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ShowCreateNestedOneWithoutShiftsInput = {
    create?: Prisma.XOR<Prisma.ShowCreateWithoutShiftsInput, Prisma.ShowUncheckedCreateWithoutShiftsInput>;
    connectOrCreate?: Prisma.ShowCreateOrConnectWithoutShiftsInput;
    connect?: Prisma.ShowWhereUniqueInput;
};
export type ShowUpdateOneRequiredWithoutShiftsNestedInput = {
    create?: Prisma.XOR<Prisma.ShowCreateWithoutShiftsInput, Prisma.ShowUncheckedCreateWithoutShiftsInput>;
    connectOrCreate?: Prisma.ShowCreateOrConnectWithoutShiftsInput;
    upsert?: Prisma.ShowUpsertWithoutShiftsInput;
    connect?: Prisma.ShowWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShowUpdateToOneWithWhereWithoutShiftsInput, Prisma.ShowUpdateWithoutShiftsInput>, Prisma.ShowUncheckedUpdateWithoutShiftsInput>;
};
export type ShowCreateNestedOneWithoutRacesInput = {
    create?: Prisma.XOR<Prisma.ShowCreateWithoutRacesInput, Prisma.ShowUncheckedCreateWithoutRacesInput>;
    connectOrCreate?: Prisma.ShowCreateOrConnectWithoutRacesInput;
    connect?: Prisma.ShowWhereUniqueInput;
};
export type ShowUpdateOneRequiredWithoutRacesNestedInput = {
    create?: Prisma.XOR<Prisma.ShowCreateWithoutRacesInput, Prisma.ShowUncheckedCreateWithoutRacesInput>;
    connectOrCreate?: Prisma.ShowCreateOrConnectWithoutRacesInput;
    upsert?: Prisma.ShowUpsertWithoutRacesInput;
    connect?: Prisma.ShowWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShowUpdateToOneWithWhereWithoutRacesInput, Prisma.ShowUpdateWithoutRacesInput>, Prisma.ShowUncheckedUpdateWithoutRacesInput>;
};
export type ShowCreateWithoutShiftsInput = {
    name: string;
    date?: Date | string | null;
    actualStartTime?: Date | string | null;
    duration?: number | null;
    finished?: boolean;
    active?: boolean;
    races?: Prisma.RaceCreateNestedManyWithoutShowInput;
};
export type ShowUncheckedCreateWithoutShiftsInput = {
    id?: number;
    name: string;
    date?: Date | string | null;
    actualStartTime?: Date | string | null;
    duration?: number | null;
    finished?: boolean;
    active?: boolean;
    races?: Prisma.RaceUncheckedCreateNestedManyWithoutShowInput;
};
export type ShowCreateOrConnectWithoutShiftsInput = {
    where: Prisma.ShowWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShowCreateWithoutShiftsInput, Prisma.ShowUncheckedCreateWithoutShiftsInput>;
};
export type ShowUpsertWithoutShiftsInput = {
    update: Prisma.XOR<Prisma.ShowUpdateWithoutShiftsInput, Prisma.ShowUncheckedUpdateWithoutShiftsInput>;
    create: Prisma.XOR<Prisma.ShowCreateWithoutShiftsInput, Prisma.ShowUncheckedCreateWithoutShiftsInput>;
    where?: Prisma.ShowWhereInput;
};
export type ShowUpdateToOneWithWhereWithoutShiftsInput = {
    where?: Prisma.ShowWhereInput;
    data: Prisma.XOR<Prisma.ShowUpdateWithoutShiftsInput, Prisma.ShowUncheckedUpdateWithoutShiftsInput>;
};
export type ShowUpdateWithoutShiftsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actualStartTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    finished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    races?: Prisma.RaceUpdateManyWithoutShowNestedInput;
};
export type ShowUncheckedUpdateWithoutShiftsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actualStartTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    finished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    races?: Prisma.RaceUncheckedUpdateManyWithoutShowNestedInput;
};
export type ShowCreateWithoutRacesInput = {
    name: string;
    date?: Date | string | null;
    actualStartTime?: Date | string | null;
    duration?: number | null;
    finished?: boolean;
    active?: boolean;
    shifts?: Prisma.ShiftCreateNestedManyWithoutShowInput;
};
export type ShowUncheckedCreateWithoutRacesInput = {
    id?: number;
    name: string;
    date?: Date | string | null;
    actualStartTime?: Date | string | null;
    duration?: number | null;
    finished?: boolean;
    active?: boolean;
    shifts?: Prisma.ShiftUncheckedCreateNestedManyWithoutShowInput;
};
export type ShowCreateOrConnectWithoutRacesInput = {
    where: Prisma.ShowWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShowCreateWithoutRacesInput, Prisma.ShowUncheckedCreateWithoutRacesInput>;
};
export type ShowUpsertWithoutRacesInput = {
    update: Prisma.XOR<Prisma.ShowUpdateWithoutRacesInput, Prisma.ShowUncheckedUpdateWithoutRacesInput>;
    create: Prisma.XOR<Prisma.ShowCreateWithoutRacesInput, Prisma.ShowUncheckedCreateWithoutRacesInput>;
    where?: Prisma.ShowWhereInput;
};
export type ShowUpdateToOneWithWhereWithoutRacesInput = {
    where?: Prisma.ShowWhereInput;
    data: Prisma.XOR<Prisma.ShowUpdateWithoutRacesInput, Prisma.ShowUncheckedUpdateWithoutRacesInput>;
};
export type ShowUpdateWithoutRacesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actualStartTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    finished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    shifts?: Prisma.ShiftUpdateManyWithoutShowNestedInput;
};
export type ShowUncheckedUpdateWithoutRacesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actualStartTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    finished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    shifts?: Prisma.ShiftUncheckedUpdateManyWithoutShowNestedInput;
};
export type ShowCountOutputType = {
    races: number;
    shifts: number;
};
export type ShowCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    races?: boolean | ShowCountOutputTypeCountRacesArgs;
    shifts?: boolean | ShowCountOutputTypeCountShiftsArgs;
};
export type ShowCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowCountOutputTypeSelect<ExtArgs> | null;
};
export type ShowCountOutputTypeCountRacesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RaceWhereInput;
};
export type ShowCountOutputTypeCountShiftsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftWhereInput;
};
export type ShowSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    date?: boolean;
    actualStartTime?: boolean;
    duration?: boolean;
    finished?: boolean;
    active?: boolean;
    races?: boolean | Prisma.Show$racesArgs<ExtArgs>;
    shifts?: boolean | Prisma.Show$shiftsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShowCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["show"]>;
export type ShowSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    date?: boolean;
    actualStartTime?: boolean;
    duration?: boolean;
    finished?: boolean;
    active?: boolean;
}, ExtArgs["result"]["show"]>;
export type ShowSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    date?: boolean;
    actualStartTime?: boolean;
    duration?: boolean;
    finished?: boolean;
    active?: boolean;
}, ExtArgs["result"]["show"]>;
export type ShowSelectScalar = {
    id?: boolean;
    name?: boolean;
    date?: boolean;
    actualStartTime?: boolean;
    duration?: boolean;
    finished?: boolean;
    active?: boolean;
};
export type ShowOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "date" | "actualStartTime" | "duration" | "finished" | "active", ExtArgs["result"]["show"]>;
export type ShowInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    races?: boolean | Prisma.Show$racesArgs<ExtArgs>;
    shifts?: boolean | Prisma.Show$shiftsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShowCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShowIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ShowIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ShowPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Show";
    objects: {
        races: Prisma.$RacePayload<ExtArgs>[];
        shifts: Prisma.$ShiftPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        date: Date | null;
        actualStartTime: Date | null;
        duration: number | null;
        finished: boolean;
        active: boolean;
    }, ExtArgs["result"]["show"]>;
    composites: {};
};
export type ShowGetPayload<S extends boolean | null | undefined | ShowDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShowPayload, S>;
export type ShowCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShowCountAggregateInputType | true;
};
export interface ShowDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Show'];
        meta: {
            name: 'Show';
        };
    };
    findUnique<T extends ShowFindUniqueArgs>(args: Prisma.SelectSubset<T, ShowFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShowFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShowFindFirstArgs>(args?: Prisma.SelectSubset<T, ShowFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShowFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShowFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShowFindManyArgs>(args?: Prisma.SelectSubset<T, ShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShowCreateArgs>(args: Prisma.SelectSubset<T, ShowCreateArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShowCreateManyArgs>(args?: Prisma.SelectSubset<T, ShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShowCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShowDeleteArgs>(args: Prisma.SelectSubset<T, ShowDeleteArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShowUpdateArgs>(args: Prisma.SelectSubset<T, ShowUpdateArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShowDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShowUpdateManyArgs>(args: Prisma.SelectSubset<T, ShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShowUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShowUpsertArgs>(args: Prisma.SelectSubset<T, ShowUpsertArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShowCountArgs>(args?: Prisma.Subset<T, ShowCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShowCountAggregateOutputType> : number>;
    aggregate<T extends ShowAggregateArgs>(args: Prisma.Subset<T, ShowAggregateArgs>): Prisma.PrismaPromise<GetShowAggregateType<T>>;
    groupBy<T extends ShowGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShowGroupByArgs['orderBy'];
    } : {
        orderBy?: ShowGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShowFieldRefs;
}
export interface Prisma__ShowClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    races<T extends Prisma.Show$racesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Show$racesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shifts<T extends Prisma.Show$shiftsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Show$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShowFieldRefs {
    readonly id: Prisma.FieldRef<"Show", 'Int'>;
    readonly name: Prisma.FieldRef<"Show", 'String'>;
    readonly date: Prisma.FieldRef<"Show", 'DateTime'>;
    readonly actualStartTime: Prisma.FieldRef<"Show", 'DateTime'>;
    readonly duration: Prisma.FieldRef<"Show", 'Int'>;
    readonly finished: Prisma.FieldRef<"Show", 'Boolean'>;
    readonly active: Prisma.FieldRef<"Show", 'Boolean'>;
}
export type ShowFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
    where: Prisma.ShowWhereUniqueInput;
};
export type ShowFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
    where: Prisma.ShowWhereUniqueInput;
};
export type ShowFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
    where?: Prisma.ShowWhereInput;
    orderBy?: Prisma.ShowOrderByWithRelationInput | Prisma.ShowOrderByWithRelationInput[];
    cursor?: Prisma.ShowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShowScalarFieldEnum | Prisma.ShowScalarFieldEnum[];
};
export type ShowFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
    where?: Prisma.ShowWhereInput;
    orderBy?: Prisma.ShowOrderByWithRelationInput | Prisma.ShowOrderByWithRelationInput[];
    cursor?: Prisma.ShowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShowScalarFieldEnum | Prisma.ShowScalarFieldEnum[];
};
export type ShowFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
    where?: Prisma.ShowWhereInput;
    orderBy?: Prisma.ShowOrderByWithRelationInput | Prisma.ShowOrderByWithRelationInput[];
    cursor?: Prisma.ShowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShowScalarFieldEnum | Prisma.ShowScalarFieldEnum[];
};
export type ShowCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShowCreateInput, Prisma.ShowUncheckedCreateInput>;
};
export type ShowCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShowCreateManyInput | Prisma.ShowCreateManyInput[];
};
export type ShowCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    data: Prisma.ShowCreateManyInput | Prisma.ShowCreateManyInput[];
};
export type ShowUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShowUpdateInput, Prisma.ShowUncheckedUpdateInput>;
    where: Prisma.ShowWhereUniqueInput;
};
export type ShowUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShowUpdateManyMutationInput, Prisma.ShowUncheckedUpdateManyInput>;
    where?: Prisma.ShowWhereInput;
    limit?: number;
};
export type ShowUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShowUpdateManyMutationInput, Prisma.ShowUncheckedUpdateManyInput>;
    where?: Prisma.ShowWhereInput;
    limit?: number;
};
export type ShowUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
    where: Prisma.ShowWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShowCreateInput, Prisma.ShowUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShowUpdateInput, Prisma.ShowUncheckedUpdateInput>;
};
export type ShowDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
    where: Prisma.ShowWhereUniqueInput;
};
export type ShowDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShowWhereInput;
    limit?: number;
};
export type Show$racesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Show$shiftsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where?: Prisma.ShiftWhereInput;
    orderBy?: Prisma.ShiftOrderByWithRelationInput | Prisma.ShiftOrderByWithRelationInput[];
    cursor?: Prisma.ShiftWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftScalarFieldEnum | Prisma.ShiftScalarFieldEnum[];
};
export type ShowDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSelect<ExtArgs> | null;
    omit?: Prisma.ShowOmit<ExtArgs> | null;
    include?: Prisma.ShowInclude<ExtArgs> | null;
};
