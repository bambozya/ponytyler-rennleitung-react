import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ShiftModel = runtime.Types.Result.DefaultSelection<Prisma.$ShiftPayload>;
export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null;
    _avg: ShiftAvgAggregateOutputType | null;
    _sum: ShiftSumAggregateOutputType | null;
    _min: ShiftMinAggregateOutputType | null;
    _max: ShiftMaxAggregateOutputType | null;
};
export type ShiftAvgAggregateOutputType = {
    id: number | null;
    showId: number | null;
    order: number | null;
    duration: number | null;
};
export type ShiftSumAggregateOutputType = {
    id: number | null;
    showId: number | null;
    order: number | null;
    duration: number | null;
};
export type ShiftMinAggregateOutputType = {
    id: number | null;
    showId: number | null;
    order: number | null;
    duration: number | null;
    shiftStarted: Date | null;
    shiftFinished: Date | null;
};
export type ShiftMaxAggregateOutputType = {
    id: number | null;
    showId: number | null;
    order: number | null;
    duration: number | null;
    shiftStarted: Date | null;
    shiftFinished: Date | null;
};
export type ShiftCountAggregateOutputType = {
    id: number;
    showId: number;
    order: number;
    duration: number;
    shiftStarted: number;
    shiftFinished: number;
    _all: number;
};
export type ShiftAvgAggregateInputType = {
    id?: true;
    showId?: true;
    order?: true;
    duration?: true;
};
export type ShiftSumAggregateInputType = {
    id?: true;
    showId?: true;
    order?: true;
    duration?: true;
};
export type ShiftMinAggregateInputType = {
    id?: true;
    showId?: true;
    order?: true;
    duration?: true;
    shiftStarted?: true;
    shiftFinished?: true;
};
export type ShiftMaxAggregateInputType = {
    id?: true;
    showId?: true;
    order?: true;
    duration?: true;
    shiftStarted?: true;
    shiftFinished?: true;
};
export type ShiftCountAggregateInputType = {
    id?: true;
    showId?: true;
    order?: true;
    duration?: true;
    shiftStarted?: true;
    shiftFinished?: true;
    _all?: true;
};
export type ShiftAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftWhereInput;
    orderBy?: Prisma.ShiftOrderByWithRelationInput | Prisma.ShiftOrderByWithRelationInput[];
    cursor?: Prisma.ShiftWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShiftCountAggregateInputType;
    _avg?: ShiftAvgAggregateInputType;
    _sum?: ShiftSumAggregateInputType;
    _min?: ShiftMinAggregateInputType;
    _max?: ShiftMaxAggregateInputType;
};
export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
    [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShift[P]> : Prisma.GetScalarType<T[P], AggregateShift[P]>;
};
export type ShiftGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftWhereInput;
    orderBy?: Prisma.ShiftOrderByWithAggregationInput | Prisma.ShiftOrderByWithAggregationInput[];
    by: Prisma.ShiftScalarFieldEnum[] | Prisma.ShiftScalarFieldEnum;
    having?: Prisma.ShiftScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShiftCountAggregateInputType | true;
    _avg?: ShiftAvgAggregateInputType;
    _sum?: ShiftSumAggregateInputType;
    _min?: ShiftMinAggregateInputType;
    _max?: ShiftMaxAggregateInputType;
};
export type ShiftGroupByOutputType = {
    id: number;
    showId: number;
    order: number;
    duration: number | null;
    shiftStarted: Date | null;
    shiftFinished: Date | null;
    _count: ShiftCountAggregateOutputType | null;
    _avg: ShiftAvgAggregateOutputType | null;
    _sum: ShiftSumAggregateOutputType | null;
    _min: ShiftMinAggregateOutputType | null;
    _max: ShiftMaxAggregateOutputType | null;
};
export type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShiftGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShiftGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShiftGroupByOutputType[P]>;
}>>;
export type ShiftWhereInput = {
    AND?: Prisma.ShiftWhereInput | Prisma.ShiftWhereInput[];
    OR?: Prisma.ShiftWhereInput[];
    NOT?: Prisma.ShiftWhereInput | Prisma.ShiftWhereInput[];
    id?: Prisma.IntFilter<"Shift"> | number;
    showId?: Prisma.IntFilter<"Shift"> | number;
    order?: Prisma.IntFilter<"Shift"> | number;
    duration?: Prisma.IntNullableFilter<"Shift"> | number | null;
    shiftStarted?: Prisma.DateTimeNullableFilter<"Shift"> | Date | string | null;
    shiftFinished?: Prisma.DateTimeNullableFilter<"Shift"> | Date | string | null;
    show?: Prisma.XOR<Prisma.ShowScalarRelationFilter, Prisma.ShowWhereInput>;
    shiftRoles?: Prisma.ShiftRoleListRelationFilter;
};
export type ShiftOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    shiftStarted?: Prisma.SortOrderInput | Prisma.SortOrder;
    shiftFinished?: Prisma.SortOrderInput | Prisma.SortOrder;
    show?: Prisma.ShowOrderByWithRelationInput;
    shiftRoles?: Prisma.ShiftRoleOrderByRelationAggregateInput;
};
export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ShiftWhereInput | Prisma.ShiftWhereInput[];
    OR?: Prisma.ShiftWhereInput[];
    NOT?: Prisma.ShiftWhereInput | Prisma.ShiftWhereInput[];
    showId?: Prisma.IntFilter<"Shift"> | number;
    order?: Prisma.IntFilter<"Shift"> | number;
    duration?: Prisma.IntNullableFilter<"Shift"> | number | null;
    shiftStarted?: Prisma.DateTimeNullableFilter<"Shift"> | Date | string | null;
    shiftFinished?: Prisma.DateTimeNullableFilter<"Shift"> | Date | string | null;
    show?: Prisma.XOR<Prisma.ShowScalarRelationFilter, Prisma.ShowWhereInput>;
    shiftRoles?: Prisma.ShiftRoleListRelationFilter;
}, "id">;
export type ShiftOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    shiftStarted?: Prisma.SortOrderInput | Prisma.SortOrder;
    shiftFinished?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ShiftCountOrderByAggregateInput;
    _avg?: Prisma.ShiftAvgOrderByAggregateInput;
    _max?: Prisma.ShiftMaxOrderByAggregateInput;
    _min?: Prisma.ShiftMinOrderByAggregateInput;
    _sum?: Prisma.ShiftSumOrderByAggregateInput;
};
export type ShiftScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShiftScalarWhereWithAggregatesInput | Prisma.ShiftScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShiftScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShiftScalarWhereWithAggregatesInput | Prisma.ShiftScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Shift"> | number;
    showId?: Prisma.IntWithAggregatesFilter<"Shift"> | number;
    order?: Prisma.IntWithAggregatesFilter<"Shift"> | number;
    duration?: Prisma.IntNullableWithAggregatesFilter<"Shift"> | number | null;
    shiftStarted?: Prisma.DateTimeNullableWithAggregatesFilter<"Shift"> | Date | string | null;
    shiftFinished?: Prisma.DateTimeNullableWithAggregatesFilter<"Shift"> | Date | string | null;
};
export type ShiftCreateInput = {
    order: number;
    duration?: number | null;
    shiftStarted?: Date | string | null;
    shiftFinished?: Date | string | null;
    show: Prisma.ShowCreateNestedOneWithoutShiftsInput;
    shiftRoles?: Prisma.ShiftRoleCreateNestedManyWithoutShiftInput;
};
export type ShiftUncheckedCreateInput = {
    id?: number;
    showId: number;
    order: number;
    duration?: number | null;
    shiftStarted?: Date | string | null;
    shiftFinished?: Date | string | null;
    shiftRoles?: Prisma.ShiftRoleUncheckedCreateNestedManyWithoutShiftInput;
};
export type ShiftUpdateInput = {
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shiftStarted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftFinished?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    show?: Prisma.ShowUpdateOneRequiredWithoutShiftsNestedInput;
    shiftRoles?: Prisma.ShiftRoleUpdateManyWithoutShiftNestedInput;
};
export type ShiftUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    showId?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shiftStarted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftFinished?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftRoles?: Prisma.ShiftRoleUncheckedUpdateManyWithoutShiftNestedInput;
};
export type ShiftCreateManyInput = {
    id?: number;
    showId: number;
    order: number;
    duration?: number | null;
    shiftStarted?: Date | string | null;
    shiftFinished?: Date | string | null;
};
export type ShiftUpdateManyMutationInput = {
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shiftStarted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftFinished?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShiftUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    showId?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shiftStarted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftFinished?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShiftListRelationFilter = {
    every?: Prisma.ShiftWhereInput;
    some?: Prisma.ShiftWhereInput;
    none?: Prisma.ShiftWhereInput;
};
export type ShiftOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShiftCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    shiftStarted?: Prisma.SortOrder;
    shiftFinished?: Prisma.SortOrder;
};
export type ShiftAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type ShiftMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    shiftStarted?: Prisma.SortOrder;
    shiftFinished?: Prisma.SortOrder;
};
export type ShiftMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    shiftStarted?: Prisma.SortOrder;
    shiftFinished?: Prisma.SortOrder;
};
export type ShiftSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    showId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type ShiftScalarRelationFilter = {
    is?: Prisma.ShiftWhereInput;
    isNot?: Prisma.ShiftWhereInput;
};
export type ShiftCreateNestedManyWithoutShowInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutShowInput, Prisma.ShiftUncheckedCreateWithoutShowInput> | Prisma.ShiftCreateWithoutShowInput[] | Prisma.ShiftUncheckedCreateWithoutShowInput[];
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutShowInput | Prisma.ShiftCreateOrConnectWithoutShowInput[];
    createMany?: Prisma.ShiftCreateManyShowInputEnvelope;
    connect?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
};
export type ShiftUncheckedCreateNestedManyWithoutShowInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutShowInput, Prisma.ShiftUncheckedCreateWithoutShowInput> | Prisma.ShiftCreateWithoutShowInput[] | Prisma.ShiftUncheckedCreateWithoutShowInput[];
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutShowInput | Prisma.ShiftCreateOrConnectWithoutShowInput[];
    createMany?: Prisma.ShiftCreateManyShowInputEnvelope;
    connect?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
};
export type ShiftUpdateManyWithoutShowNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutShowInput, Prisma.ShiftUncheckedCreateWithoutShowInput> | Prisma.ShiftCreateWithoutShowInput[] | Prisma.ShiftUncheckedCreateWithoutShowInput[];
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutShowInput | Prisma.ShiftCreateOrConnectWithoutShowInput[];
    upsert?: Prisma.ShiftUpsertWithWhereUniqueWithoutShowInput | Prisma.ShiftUpsertWithWhereUniqueWithoutShowInput[];
    createMany?: Prisma.ShiftCreateManyShowInputEnvelope;
    set?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
    disconnect?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
    delete?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
    connect?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
    update?: Prisma.ShiftUpdateWithWhereUniqueWithoutShowInput | Prisma.ShiftUpdateWithWhereUniqueWithoutShowInput[];
    updateMany?: Prisma.ShiftUpdateManyWithWhereWithoutShowInput | Prisma.ShiftUpdateManyWithWhereWithoutShowInput[];
    deleteMany?: Prisma.ShiftScalarWhereInput | Prisma.ShiftScalarWhereInput[];
};
export type ShiftUncheckedUpdateManyWithoutShowNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutShowInput, Prisma.ShiftUncheckedCreateWithoutShowInput> | Prisma.ShiftCreateWithoutShowInput[] | Prisma.ShiftUncheckedCreateWithoutShowInput[];
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutShowInput | Prisma.ShiftCreateOrConnectWithoutShowInput[];
    upsert?: Prisma.ShiftUpsertWithWhereUniqueWithoutShowInput | Prisma.ShiftUpsertWithWhereUniqueWithoutShowInput[];
    createMany?: Prisma.ShiftCreateManyShowInputEnvelope;
    set?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
    disconnect?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
    delete?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
    connect?: Prisma.ShiftWhereUniqueInput | Prisma.ShiftWhereUniqueInput[];
    update?: Prisma.ShiftUpdateWithWhereUniqueWithoutShowInput | Prisma.ShiftUpdateWithWhereUniqueWithoutShowInput[];
    updateMany?: Prisma.ShiftUpdateManyWithWhereWithoutShowInput | Prisma.ShiftUpdateManyWithWhereWithoutShowInput[];
    deleteMany?: Prisma.ShiftScalarWhereInput | Prisma.ShiftScalarWhereInput[];
};
export type ShiftCreateNestedOneWithoutShiftRolesInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutShiftRolesInput, Prisma.ShiftUncheckedCreateWithoutShiftRolesInput>;
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutShiftRolesInput;
    connect?: Prisma.ShiftWhereUniqueInput;
};
export type ShiftUpdateOneRequiredWithoutShiftRolesNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftCreateWithoutShiftRolesInput, Prisma.ShiftUncheckedCreateWithoutShiftRolesInput>;
    connectOrCreate?: Prisma.ShiftCreateOrConnectWithoutShiftRolesInput;
    upsert?: Prisma.ShiftUpsertWithoutShiftRolesInput;
    connect?: Prisma.ShiftWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShiftUpdateToOneWithWhereWithoutShiftRolesInput, Prisma.ShiftUpdateWithoutShiftRolesInput>, Prisma.ShiftUncheckedUpdateWithoutShiftRolesInput>;
};
export type ShiftCreateWithoutShowInput = {
    order: number;
    duration?: number | null;
    shiftStarted?: Date | string | null;
    shiftFinished?: Date | string | null;
    shiftRoles?: Prisma.ShiftRoleCreateNestedManyWithoutShiftInput;
};
export type ShiftUncheckedCreateWithoutShowInput = {
    id?: number;
    order: number;
    duration?: number | null;
    shiftStarted?: Date | string | null;
    shiftFinished?: Date | string | null;
    shiftRoles?: Prisma.ShiftRoleUncheckedCreateNestedManyWithoutShiftInput;
};
export type ShiftCreateOrConnectWithoutShowInput = {
    where: Prisma.ShiftWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftCreateWithoutShowInput, Prisma.ShiftUncheckedCreateWithoutShowInput>;
};
export type ShiftCreateManyShowInputEnvelope = {
    data: Prisma.ShiftCreateManyShowInput | Prisma.ShiftCreateManyShowInput[];
};
export type ShiftUpsertWithWhereUniqueWithoutShowInput = {
    where: Prisma.ShiftWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShiftUpdateWithoutShowInput, Prisma.ShiftUncheckedUpdateWithoutShowInput>;
    create: Prisma.XOR<Prisma.ShiftCreateWithoutShowInput, Prisma.ShiftUncheckedCreateWithoutShowInput>;
};
export type ShiftUpdateWithWhereUniqueWithoutShowInput = {
    where: Prisma.ShiftWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShiftUpdateWithoutShowInput, Prisma.ShiftUncheckedUpdateWithoutShowInput>;
};
export type ShiftUpdateManyWithWhereWithoutShowInput = {
    where: Prisma.ShiftScalarWhereInput;
    data: Prisma.XOR<Prisma.ShiftUpdateManyMutationInput, Prisma.ShiftUncheckedUpdateManyWithoutShowInput>;
};
export type ShiftScalarWhereInput = {
    AND?: Prisma.ShiftScalarWhereInput | Prisma.ShiftScalarWhereInput[];
    OR?: Prisma.ShiftScalarWhereInput[];
    NOT?: Prisma.ShiftScalarWhereInput | Prisma.ShiftScalarWhereInput[];
    id?: Prisma.IntFilter<"Shift"> | number;
    showId?: Prisma.IntFilter<"Shift"> | number;
    order?: Prisma.IntFilter<"Shift"> | number;
    duration?: Prisma.IntNullableFilter<"Shift"> | number | null;
    shiftStarted?: Prisma.DateTimeNullableFilter<"Shift"> | Date | string | null;
    shiftFinished?: Prisma.DateTimeNullableFilter<"Shift"> | Date | string | null;
};
export type ShiftCreateWithoutShiftRolesInput = {
    order: number;
    duration?: number | null;
    shiftStarted?: Date | string | null;
    shiftFinished?: Date | string | null;
    show: Prisma.ShowCreateNestedOneWithoutShiftsInput;
};
export type ShiftUncheckedCreateWithoutShiftRolesInput = {
    id?: number;
    showId: number;
    order: number;
    duration?: number | null;
    shiftStarted?: Date | string | null;
    shiftFinished?: Date | string | null;
};
export type ShiftCreateOrConnectWithoutShiftRolesInput = {
    where: Prisma.ShiftWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftCreateWithoutShiftRolesInput, Prisma.ShiftUncheckedCreateWithoutShiftRolesInput>;
};
export type ShiftUpsertWithoutShiftRolesInput = {
    update: Prisma.XOR<Prisma.ShiftUpdateWithoutShiftRolesInput, Prisma.ShiftUncheckedUpdateWithoutShiftRolesInput>;
    create: Prisma.XOR<Prisma.ShiftCreateWithoutShiftRolesInput, Prisma.ShiftUncheckedCreateWithoutShiftRolesInput>;
    where?: Prisma.ShiftWhereInput;
};
export type ShiftUpdateToOneWithWhereWithoutShiftRolesInput = {
    where?: Prisma.ShiftWhereInput;
    data: Prisma.XOR<Prisma.ShiftUpdateWithoutShiftRolesInput, Prisma.ShiftUncheckedUpdateWithoutShiftRolesInput>;
};
export type ShiftUpdateWithoutShiftRolesInput = {
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shiftStarted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftFinished?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    show?: Prisma.ShowUpdateOneRequiredWithoutShiftsNestedInput;
};
export type ShiftUncheckedUpdateWithoutShiftRolesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    showId?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shiftStarted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftFinished?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShiftCreateManyShowInput = {
    id?: number;
    order: number;
    duration?: number | null;
    shiftStarted?: Date | string | null;
    shiftFinished?: Date | string | null;
};
export type ShiftUpdateWithoutShowInput = {
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shiftStarted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftFinished?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftRoles?: Prisma.ShiftRoleUpdateManyWithoutShiftNestedInput;
};
export type ShiftUncheckedUpdateWithoutShowInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shiftStarted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftFinished?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftRoles?: Prisma.ShiftRoleUncheckedUpdateManyWithoutShiftNestedInput;
};
export type ShiftUncheckedUpdateManyWithoutShowInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shiftStarted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shiftFinished?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShiftCountOutputType = {
    shiftRoles: number;
};
export type ShiftCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shiftRoles?: boolean | ShiftCountOutputTypeCountShiftRolesArgs;
};
export type ShiftCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftCountOutputTypeSelect<ExtArgs> | null;
};
export type ShiftCountOutputTypeCountShiftRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftRoleWhereInput;
};
export type ShiftSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    showId?: boolean;
    order?: boolean;
    duration?: boolean;
    shiftStarted?: boolean;
    shiftFinished?: boolean;
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
    shiftRoles?: boolean | Prisma.Shift$shiftRolesArgs<ExtArgs>;
    _count?: boolean | Prisma.ShiftCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shift"]>;
export type ShiftSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    showId?: boolean;
    order?: boolean;
    duration?: boolean;
    shiftStarted?: boolean;
    shiftFinished?: boolean;
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shift"]>;
export type ShiftSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    showId?: boolean;
    order?: boolean;
    duration?: boolean;
    shiftStarted?: boolean;
    shiftFinished?: boolean;
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shift"]>;
export type ShiftSelectScalar = {
    id?: boolean;
    showId?: boolean;
    order?: boolean;
    duration?: boolean;
    shiftStarted?: boolean;
    shiftFinished?: boolean;
};
export type ShiftOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "showId" | "order" | "duration" | "shiftStarted" | "shiftFinished", ExtArgs["result"]["shift"]>;
export type ShiftInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
    shiftRoles?: boolean | Prisma.Shift$shiftRolesArgs<ExtArgs>;
    _count?: boolean | Prisma.ShiftCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShiftIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
};
export type ShiftIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    show?: boolean | Prisma.ShowDefaultArgs<ExtArgs>;
};
export type $ShiftPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Shift";
    objects: {
        show: Prisma.$ShowPayload<ExtArgs>;
        shiftRoles: Prisma.$ShiftRolePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        showId: number;
        order: number;
        duration: number | null;
        shiftStarted: Date | null;
        shiftFinished: Date | null;
    }, ExtArgs["result"]["shift"]>;
    composites: {};
};
export type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShiftPayload, S>;
export type ShiftCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShiftCountAggregateInputType | true;
};
export interface ShiftDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Shift'];
        meta: {
            name: 'Shift';
        };
    };
    findUnique<T extends ShiftFindUniqueArgs>(args: Prisma.SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShiftFindFirstArgs>(args?: Prisma.SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShiftFindManyArgs>(args?: Prisma.SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShiftCreateArgs>(args: Prisma.SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShiftCreateManyArgs>(args?: Prisma.SelectSubset<T, ShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShiftCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShiftDeleteArgs>(args: Prisma.SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShiftUpdateArgs>(args: Prisma.SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShiftDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShiftUpdateManyArgs>(args: Prisma.SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShiftUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShiftUpsertArgs>(args: Prisma.SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShiftCountArgs>(args?: Prisma.Subset<T, ShiftCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShiftCountAggregateOutputType> : number>;
    aggregate<T extends ShiftAggregateArgs>(args: Prisma.Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>;
    groupBy<T extends ShiftGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShiftGroupByArgs['orderBy'];
    } : {
        orderBy?: ShiftGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShiftFieldRefs;
}
export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    show<T extends Prisma.ShowDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShowDefaultArgs<ExtArgs>>): Prisma.Prisma__ShowClient<runtime.Types.Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    shiftRoles<T extends Prisma.Shift$shiftRolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Shift$shiftRolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShiftFieldRefs {
    readonly id: Prisma.FieldRef<"Shift", 'Int'>;
    readonly showId: Prisma.FieldRef<"Shift", 'Int'>;
    readonly order: Prisma.FieldRef<"Shift", 'Int'>;
    readonly duration: Prisma.FieldRef<"Shift", 'Int'>;
    readonly shiftStarted: Prisma.FieldRef<"Shift", 'DateTime'>;
    readonly shiftFinished: Prisma.FieldRef<"Shift", 'DateTime'>;
}
export type ShiftFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where: Prisma.ShiftWhereUniqueInput;
};
export type ShiftFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where: Prisma.ShiftWhereUniqueInput;
};
export type ShiftFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftCreateInput, Prisma.ShiftUncheckedCreateInput>;
};
export type ShiftCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShiftCreateManyInput | Prisma.ShiftCreateManyInput[];
};
export type ShiftCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    data: Prisma.ShiftCreateManyInput | Prisma.ShiftCreateManyInput[];
    include?: Prisma.ShiftIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShiftUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftUpdateInput, Prisma.ShiftUncheckedUpdateInput>;
    where: Prisma.ShiftWhereUniqueInput;
};
export type ShiftUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShiftUpdateManyMutationInput, Prisma.ShiftUncheckedUpdateManyInput>;
    where?: Prisma.ShiftWhereInput;
    limit?: number;
};
export type ShiftUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftUpdateManyMutationInput, Prisma.ShiftUncheckedUpdateManyInput>;
    where?: Prisma.ShiftWhereInput;
    limit?: number;
    include?: Prisma.ShiftIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShiftUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where: Prisma.ShiftWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftCreateInput, Prisma.ShiftUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShiftUpdateInput, Prisma.ShiftUncheckedUpdateInput>;
};
export type ShiftDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
    where: Prisma.ShiftWhereUniqueInput;
};
export type ShiftDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftWhereInput;
    limit?: number;
};
export type Shift$shiftRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    include?: Prisma.ShiftRoleInclude<ExtArgs> | null;
    where?: Prisma.ShiftRoleWhereInput;
    orderBy?: Prisma.ShiftRoleOrderByWithRelationInput | Prisma.ShiftRoleOrderByWithRelationInput[];
    cursor?: Prisma.ShiftRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftRoleScalarFieldEnum | Prisma.ShiftRoleScalarFieldEnum[];
};
export type ShiftDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftSelect<ExtArgs> | null;
    omit?: Prisma.ShiftOmit<ExtArgs> | null;
    include?: Prisma.ShiftInclude<ExtArgs> | null;
};
