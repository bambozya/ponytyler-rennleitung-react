import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ShiftRoleModel = runtime.Types.Result.DefaultSelection<Prisma.$ShiftRolePayload>;
export type AggregateShiftRole = {
    _count: ShiftRoleCountAggregateOutputType | null;
    _avg: ShiftRoleAvgAggregateOutputType | null;
    _sum: ShiftRoleSumAggregateOutputType | null;
    _min: ShiftRoleMinAggregateOutputType | null;
    _max: ShiftRoleMaxAggregateOutputType | null;
};
export type ShiftRoleAvgAggregateOutputType = {
    id: number | null;
    shiftId: number | null;
    userId: number | null;
};
export type ShiftRoleSumAggregateOutputType = {
    id: number | null;
    shiftId: number | null;
    userId: number | null;
};
export type ShiftRoleMinAggregateOutputType = {
    id: number | null;
    shiftId: number | null;
    roleTitle: string | null;
    userId: number | null;
    pastUserName: string | null;
};
export type ShiftRoleMaxAggregateOutputType = {
    id: number | null;
    shiftId: number | null;
    roleTitle: string | null;
    userId: number | null;
    pastUserName: string | null;
};
export type ShiftRoleCountAggregateOutputType = {
    id: number;
    shiftId: number;
    roleTitle: number;
    userId: number;
    pastUserName: number;
    _all: number;
};
export type ShiftRoleAvgAggregateInputType = {
    id?: true;
    shiftId?: true;
    userId?: true;
};
export type ShiftRoleSumAggregateInputType = {
    id?: true;
    shiftId?: true;
    userId?: true;
};
export type ShiftRoleMinAggregateInputType = {
    id?: true;
    shiftId?: true;
    roleTitle?: true;
    userId?: true;
    pastUserName?: true;
};
export type ShiftRoleMaxAggregateInputType = {
    id?: true;
    shiftId?: true;
    roleTitle?: true;
    userId?: true;
    pastUserName?: true;
};
export type ShiftRoleCountAggregateInputType = {
    id?: true;
    shiftId?: true;
    roleTitle?: true;
    userId?: true;
    pastUserName?: true;
    _all?: true;
};
export type ShiftRoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftRoleWhereInput;
    orderBy?: Prisma.ShiftRoleOrderByWithRelationInput | Prisma.ShiftRoleOrderByWithRelationInput[];
    cursor?: Prisma.ShiftRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShiftRoleCountAggregateInputType;
    _avg?: ShiftRoleAvgAggregateInputType;
    _sum?: ShiftRoleSumAggregateInputType;
    _min?: ShiftRoleMinAggregateInputType;
    _max?: ShiftRoleMaxAggregateInputType;
};
export type GetShiftRoleAggregateType<T extends ShiftRoleAggregateArgs> = {
    [P in keyof T & keyof AggregateShiftRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShiftRole[P]> : Prisma.GetScalarType<T[P], AggregateShiftRole[P]>;
};
export type ShiftRoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftRoleWhereInput;
    orderBy?: Prisma.ShiftRoleOrderByWithAggregationInput | Prisma.ShiftRoleOrderByWithAggregationInput[];
    by: Prisma.ShiftRoleScalarFieldEnum[] | Prisma.ShiftRoleScalarFieldEnum;
    having?: Prisma.ShiftRoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShiftRoleCountAggregateInputType | true;
    _avg?: ShiftRoleAvgAggregateInputType;
    _sum?: ShiftRoleSumAggregateInputType;
    _min?: ShiftRoleMinAggregateInputType;
    _max?: ShiftRoleMaxAggregateInputType;
};
export type ShiftRoleGroupByOutputType = {
    id: number;
    shiftId: number;
    roleTitle: string;
    userId: number;
    pastUserName: string | null;
    _count: ShiftRoleCountAggregateOutputType | null;
    _avg: ShiftRoleAvgAggregateOutputType | null;
    _sum: ShiftRoleSumAggregateOutputType | null;
    _min: ShiftRoleMinAggregateOutputType | null;
    _max: ShiftRoleMaxAggregateOutputType | null;
};
export type GetShiftRoleGroupByPayload<T extends ShiftRoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShiftRoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShiftRoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShiftRoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShiftRoleGroupByOutputType[P]>;
}>>;
export type ShiftRoleWhereInput = {
    AND?: Prisma.ShiftRoleWhereInput | Prisma.ShiftRoleWhereInput[];
    OR?: Prisma.ShiftRoleWhereInput[];
    NOT?: Prisma.ShiftRoleWhereInput | Prisma.ShiftRoleWhereInput[];
    id?: Prisma.IntFilter<"ShiftRole"> | number;
    shiftId?: Prisma.IntFilter<"ShiftRole"> | number;
    roleTitle?: Prisma.StringFilter<"ShiftRole"> | string;
    userId?: Prisma.IntFilter<"ShiftRole"> | number;
    pastUserName?: Prisma.StringNullableFilter<"ShiftRole"> | string | null;
    shift?: Prisma.XOR<Prisma.ShiftScalarRelationFilter, Prisma.ShiftWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ShiftRoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    roleTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    pastUserName?: Prisma.SortOrderInput | Prisma.SortOrder;
    shift?: Prisma.ShiftOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ShiftRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ShiftRoleWhereInput | Prisma.ShiftRoleWhereInput[];
    OR?: Prisma.ShiftRoleWhereInput[];
    NOT?: Prisma.ShiftRoleWhereInput | Prisma.ShiftRoleWhereInput[];
    shiftId?: Prisma.IntFilter<"ShiftRole"> | number;
    roleTitle?: Prisma.StringFilter<"ShiftRole"> | string;
    userId?: Prisma.IntFilter<"ShiftRole"> | number;
    pastUserName?: Prisma.StringNullableFilter<"ShiftRole"> | string | null;
    shift?: Prisma.XOR<Prisma.ShiftScalarRelationFilter, Prisma.ShiftWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ShiftRoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    roleTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    pastUserName?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ShiftRoleCountOrderByAggregateInput;
    _avg?: Prisma.ShiftRoleAvgOrderByAggregateInput;
    _max?: Prisma.ShiftRoleMaxOrderByAggregateInput;
    _min?: Prisma.ShiftRoleMinOrderByAggregateInput;
    _sum?: Prisma.ShiftRoleSumOrderByAggregateInput;
};
export type ShiftRoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShiftRoleScalarWhereWithAggregatesInput | Prisma.ShiftRoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShiftRoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShiftRoleScalarWhereWithAggregatesInput | Prisma.ShiftRoleScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ShiftRole"> | number;
    shiftId?: Prisma.IntWithAggregatesFilter<"ShiftRole"> | number;
    roleTitle?: Prisma.StringWithAggregatesFilter<"ShiftRole"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"ShiftRole"> | number;
    pastUserName?: Prisma.StringNullableWithAggregatesFilter<"ShiftRole"> | string | null;
};
export type ShiftRoleCreateInput = {
    roleTitle: string;
    pastUserName?: string | null;
    shift: Prisma.ShiftCreateNestedOneWithoutShiftRolesInput;
    user: Prisma.UserCreateNestedOneWithoutShiftRolesInput;
};
export type ShiftRoleUncheckedCreateInput = {
    id?: number;
    shiftId: number;
    roleTitle: string;
    userId: number;
    pastUserName?: string | null;
};
export type ShiftRoleUpdateInput = {
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shift?: Prisma.ShiftUpdateOneRequiredWithoutShiftRolesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutShiftRolesNestedInput;
};
export type ShiftRoleUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shiftId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShiftRoleCreateManyInput = {
    id?: number;
    shiftId: number;
    roleTitle: string;
    userId: number;
    pastUserName?: string | null;
};
export type ShiftRoleUpdateManyMutationInput = {
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShiftRoleUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shiftId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShiftRoleListRelationFilter = {
    every?: Prisma.ShiftRoleWhereInput;
    some?: Prisma.ShiftRoleWhereInput;
    none?: Prisma.ShiftRoleWhereInput;
};
export type ShiftRoleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShiftRoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    roleTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    pastUserName?: Prisma.SortOrder;
};
export type ShiftRoleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ShiftRoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    roleTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    pastUserName?: Prisma.SortOrder;
};
export type ShiftRoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    roleTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    pastUserName?: Prisma.SortOrder;
};
export type ShiftRoleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shiftId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ShiftRoleCreateNestedManyWithoutShiftInput = {
    create?: Prisma.XOR<Prisma.ShiftRoleCreateWithoutShiftInput, Prisma.ShiftRoleUncheckedCreateWithoutShiftInput> | Prisma.ShiftRoleCreateWithoutShiftInput[] | Prisma.ShiftRoleUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.ShiftRoleCreateOrConnectWithoutShiftInput | Prisma.ShiftRoleCreateOrConnectWithoutShiftInput[];
    createMany?: Prisma.ShiftRoleCreateManyShiftInputEnvelope;
    connect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
};
export type ShiftRoleUncheckedCreateNestedManyWithoutShiftInput = {
    create?: Prisma.XOR<Prisma.ShiftRoleCreateWithoutShiftInput, Prisma.ShiftRoleUncheckedCreateWithoutShiftInput> | Prisma.ShiftRoleCreateWithoutShiftInput[] | Prisma.ShiftRoleUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.ShiftRoleCreateOrConnectWithoutShiftInput | Prisma.ShiftRoleCreateOrConnectWithoutShiftInput[];
    createMany?: Prisma.ShiftRoleCreateManyShiftInputEnvelope;
    connect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
};
export type ShiftRoleUpdateManyWithoutShiftNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftRoleCreateWithoutShiftInput, Prisma.ShiftRoleUncheckedCreateWithoutShiftInput> | Prisma.ShiftRoleCreateWithoutShiftInput[] | Prisma.ShiftRoleUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.ShiftRoleCreateOrConnectWithoutShiftInput | Prisma.ShiftRoleCreateOrConnectWithoutShiftInput[];
    upsert?: Prisma.ShiftRoleUpsertWithWhereUniqueWithoutShiftInput | Prisma.ShiftRoleUpsertWithWhereUniqueWithoutShiftInput[];
    createMany?: Prisma.ShiftRoleCreateManyShiftInputEnvelope;
    set?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    disconnect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    delete?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    connect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    update?: Prisma.ShiftRoleUpdateWithWhereUniqueWithoutShiftInput | Prisma.ShiftRoleUpdateWithWhereUniqueWithoutShiftInput[];
    updateMany?: Prisma.ShiftRoleUpdateManyWithWhereWithoutShiftInput | Prisma.ShiftRoleUpdateManyWithWhereWithoutShiftInput[];
    deleteMany?: Prisma.ShiftRoleScalarWhereInput | Prisma.ShiftRoleScalarWhereInput[];
};
export type ShiftRoleUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftRoleCreateWithoutShiftInput, Prisma.ShiftRoleUncheckedCreateWithoutShiftInput> | Prisma.ShiftRoleCreateWithoutShiftInput[] | Prisma.ShiftRoleUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.ShiftRoleCreateOrConnectWithoutShiftInput | Prisma.ShiftRoleCreateOrConnectWithoutShiftInput[];
    upsert?: Prisma.ShiftRoleUpsertWithWhereUniqueWithoutShiftInput | Prisma.ShiftRoleUpsertWithWhereUniqueWithoutShiftInput[];
    createMany?: Prisma.ShiftRoleCreateManyShiftInputEnvelope;
    set?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    disconnect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    delete?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    connect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    update?: Prisma.ShiftRoleUpdateWithWhereUniqueWithoutShiftInput | Prisma.ShiftRoleUpdateWithWhereUniqueWithoutShiftInput[];
    updateMany?: Prisma.ShiftRoleUpdateManyWithWhereWithoutShiftInput | Prisma.ShiftRoleUpdateManyWithWhereWithoutShiftInput[];
    deleteMany?: Prisma.ShiftRoleScalarWhereInput | Prisma.ShiftRoleScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ShiftRoleCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ShiftRoleCreateWithoutUserInput, Prisma.ShiftRoleUncheckedCreateWithoutUserInput> | Prisma.ShiftRoleCreateWithoutUserInput[] | Prisma.ShiftRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShiftRoleCreateOrConnectWithoutUserInput | Prisma.ShiftRoleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ShiftRoleCreateManyUserInputEnvelope;
    connect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
};
export type ShiftRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ShiftRoleCreateWithoutUserInput, Prisma.ShiftRoleUncheckedCreateWithoutUserInput> | Prisma.ShiftRoleCreateWithoutUserInput[] | Prisma.ShiftRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShiftRoleCreateOrConnectWithoutUserInput | Prisma.ShiftRoleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ShiftRoleCreateManyUserInputEnvelope;
    connect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
};
export type ShiftRoleUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftRoleCreateWithoutUserInput, Prisma.ShiftRoleUncheckedCreateWithoutUserInput> | Prisma.ShiftRoleCreateWithoutUserInput[] | Prisma.ShiftRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShiftRoleCreateOrConnectWithoutUserInput | Prisma.ShiftRoleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ShiftRoleUpsertWithWhereUniqueWithoutUserInput | Prisma.ShiftRoleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ShiftRoleCreateManyUserInputEnvelope;
    set?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    disconnect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    delete?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    connect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    update?: Prisma.ShiftRoleUpdateWithWhereUniqueWithoutUserInput | Prisma.ShiftRoleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ShiftRoleUpdateManyWithWhereWithoutUserInput | Prisma.ShiftRoleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ShiftRoleScalarWhereInput | Prisma.ShiftRoleScalarWhereInput[];
};
export type ShiftRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftRoleCreateWithoutUserInput, Prisma.ShiftRoleUncheckedCreateWithoutUserInput> | Prisma.ShiftRoleCreateWithoutUserInput[] | Prisma.ShiftRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShiftRoleCreateOrConnectWithoutUserInput | Prisma.ShiftRoleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ShiftRoleUpsertWithWhereUniqueWithoutUserInput | Prisma.ShiftRoleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ShiftRoleCreateManyUserInputEnvelope;
    set?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    disconnect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    delete?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    connect?: Prisma.ShiftRoleWhereUniqueInput | Prisma.ShiftRoleWhereUniqueInput[];
    update?: Prisma.ShiftRoleUpdateWithWhereUniqueWithoutUserInput | Prisma.ShiftRoleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ShiftRoleUpdateManyWithWhereWithoutUserInput | Prisma.ShiftRoleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ShiftRoleScalarWhereInput | Prisma.ShiftRoleScalarWhereInput[];
};
export type ShiftRoleCreateWithoutShiftInput = {
    roleTitle: string;
    pastUserName?: string | null;
    user: Prisma.UserCreateNestedOneWithoutShiftRolesInput;
};
export type ShiftRoleUncheckedCreateWithoutShiftInput = {
    id?: number;
    roleTitle: string;
    userId: number;
    pastUserName?: string | null;
};
export type ShiftRoleCreateOrConnectWithoutShiftInput = {
    where: Prisma.ShiftRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftRoleCreateWithoutShiftInput, Prisma.ShiftRoleUncheckedCreateWithoutShiftInput>;
};
export type ShiftRoleCreateManyShiftInputEnvelope = {
    data: Prisma.ShiftRoleCreateManyShiftInput | Prisma.ShiftRoleCreateManyShiftInput[];
};
export type ShiftRoleUpsertWithWhereUniqueWithoutShiftInput = {
    where: Prisma.ShiftRoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShiftRoleUpdateWithoutShiftInput, Prisma.ShiftRoleUncheckedUpdateWithoutShiftInput>;
    create: Prisma.XOR<Prisma.ShiftRoleCreateWithoutShiftInput, Prisma.ShiftRoleUncheckedCreateWithoutShiftInput>;
};
export type ShiftRoleUpdateWithWhereUniqueWithoutShiftInput = {
    where: Prisma.ShiftRoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShiftRoleUpdateWithoutShiftInput, Prisma.ShiftRoleUncheckedUpdateWithoutShiftInput>;
};
export type ShiftRoleUpdateManyWithWhereWithoutShiftInput = {
    where: Prisma.ShiftRoleScalarWhereInput;
    data: Prisma.XOR<Prisma.ShiftRoleUpdateManyMutationInput, Prisma.ShiftRoleUncheckedUpdateManyWithoutShiftInput>;
};
export type ShiftRoleScalarWhereInput = {
    AND?: Prisma.ShiftRoleScalarWhereInput | Prisma.ShiftRoleScalarWhereInput[];
    OR?: Prisma.ShiftRoleScalarWhereInput[];
    NOT?: Prisma.ShiftRoleScalarWhereInput | Prisma.ShiftRoleScalarWhereInput[];
    id?: Prisma.IntFilter<"ShiftRole"> | number;
    shiftId?: Prisma.IntFilter<"ShiftRole"> | number;
    roleTitle?: Prisma.StringFilter<"ShiftRole"> | string;
    userId?: Prisma.IntFilter<"ShiftRole"> | number;
    pastUserName?: Prisma.StringNullableFilter<"ShiftRole"> | string | null;
};
export type ShiftRoleCreateWithoutUserInput = {
    roleTitle: string;
    pastUserName?: string | null;
    shift: Prisma.ShiftCreateNestedOneWithoutShiftRolesInput;
};
export type ShiftRoleUncheckedCreateWithoutUserInput = {
    id?: number;
    shiftId: number;
    roleTitle: string;
    pastUserName?: string | null;
};
export type ShiftRoleCreateOrConnectWithoutUserInput = {
    where: Prisma.ShiftRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftRoleCreateWithoutUserInput, Prisma.ShiftRoleUncheckedCreateWithoutUserInput>;
};
export type ShiftRoleCreateManyUserInputEnvelope = {
    data: Prisma.ShiftRoleCreateManyUserInput | Prisma.ShiftRoleCreateManyUserInput[];
};
export type ShiftRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ShiftRoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShiftRoleUpdateWithoutUserInput, Prisma.ShiftRoleUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ShiftRoleCreateWithoutUserInput, Prisma.ShiftRoleUncheckedCreateWithoutUserInput>;
};
export type ShiftRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ShiftRoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShiftRoleUpdateWithoutUserInput, Prisma.ShiftRoleUncheckedUpdateWithoutUserInput>;
};
export type ShiftRoleUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ShiftRoleScalarWhereInput;
    data: Prisma.XOR<Prisma.ShiftRoleUpdateManyMutationInput, Prisma.ShiftRoleUncheckedUpdateManyWithoutUserInput>;
};
export type ShiftRoleCreateManyShiftInput = {
    id?: number;
    roleTitle: string;
    userId: number;
    pastUserName?: string | null;
};
export type ShiftRoleUpdateWithoutShiftInput = {
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutShiftRolesNestedInput;
};
export type ShiftRoleUncheckedUpdateWithoutShiftInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShiftRoleUncheckedUpdateManyWithoutShiftInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShiftRoleCreateManyUserInput = {
    id?: number;
    shiftId: number;
    roleTitle: string;
    pastUserName?: string | null;
};
export type ShiftRoleUpdateWithoutUserInput = {
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shift?: Prisma.ShiftUpdateOneRequiredWithoutShiftRolesNestedInput;
};
export type ShiftRoleUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shiftId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShiftRoleUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shiftId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    pastUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShiftRoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shiftId?: boolean;
    roleTitle?: boolean;
    userId?: boolean;
    pastUserName?: boolean;
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shiftRole"]>;
export type ShiftRoleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shiftId?: boolean;
    roleTitle?: boolean;
    userId?: boolean;
    pastUserName?: boolean;
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shiftRole"]>;
export type ShiftRoleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shiftId?: boolean;
    roleTitle?: boolean;
    userId?: boolean;
    pastUserName?: boolean;
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shiftRole"]>;
export type ShiftRoleSelectScalar = {
    id?: boolean;
    shiftId?: boolean;
    roleTitle?: boolean;
    userId?: boolean;
    pastUserName?: boolean;
};
export type ShiftRoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shiftId" | "roleTitle" | "userId" | "pastUserName", ExtArgs["result"]["shiftRole"]>;
export type ShiftRoleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ShiftRoleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ShiftRoleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shift?: boolean | Prisma.ShiftDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ShiftRolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShiftRole";
    objects: {
        shift: Prisma.$ShiftPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shiftId: number;
        roleTitle: string;
        userId: number;
        pastUserName: string | null;
    }, ExtArgs["result"]["shiftRole"]>;
    composites: {};
};
export type ShiftRoleGetPayload<S extends boolean | null | undefined | ShiftRoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload, S>;
export type ShiftRoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShiftRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShiftRoleCountAggregateInputType | true;
};
export interface ShiftRoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShiftRole'];
        meta: {
            name: 'ShiftRole';
        };
    };
    findUnique<T extends ShiftRoleFindUniqueArgs>(args: Prisma.SelectSubset<T, ShiftRoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShiftRoleClient<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShiftRoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShiftRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftRoleClient<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShiftRoleFindFirstArgs>(args?: Prisma.SelectSubset<T, ShiftRoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShiftRoleClient<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShiftRoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShiftRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftRoleClient<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShiftRoleFindManyArgs>(args?: Prisma.SelectSubset<T, ShiftRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShiftRoleCreateArgs>(args: Prisma.SelectSubset<T, ShiftRoleCreateArgs<ExtArgs>>): Prisma.Prisma__ShiftRoleClient<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShiftRoleCreateManyArgs>(args?: Prisma.SelectSubset<T, ShiftRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShiftRoleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShiftRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShiftRoleDeleteArgs>(args: Prisma.SelectSubset<T, ShiftRoleDeleteArgs<ExtArgs>>): Prisma.Prisma__ShiftRoleClient<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShiftRoleUpdateArgs>(args: Prisma.SelectSubset<T, ShiftRoleUpdateArgs<ExtArgs>>): Prisma.Prisma__ShiftRoleClient<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShiftRoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShiftRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShiftRoleUpdateManyArgs>(args: Prisma.SelectSubset<T, ShiftRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShiftRoleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShiftRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShiftRoleUpsertArgs>(args: Prisma.SelectSubset<T, ShiftRoleUpsertArgs<ExtArgs>>): Prisma.Prisma__ShiftRoleClient<runtime.Types.Result.GetResult<Prisma.$ShiftRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShiftRoleCountArgs>(args?: Prisma.Subset<T, ShiftRoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShiftRoleCountAggregateOutputType> : number>;
    aggregate<T extends ShiftRoleAggregateArgs>(args: Prisma.Subset<T, ShiftRoleAggregateArgs>): Prisma.PrismaPromise<GetShiftRoleAggregateType<T>>;
    groupBy<T extends ShiftRoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShiftRoleGroupByArgs['orderBy'];
    } : {
        orderBy?: ShiftRoleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShiftRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShiftRoleFieldRefs;
}
export interface Prisma__ShiftRoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shift<T extends Prisma.ShiftDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShiftDefaultArgs<ExtArgs>>): Prisma.Prisma__ShiftClient<runtime.Types.Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShiftRoleFieldRefs {
    readonly id: Prisma.FieldRef<"ShiftRole", 'Int'>;
    readonly shiftId: Prisma.FieldRef<"ShiftRole", 'Int'>;
    readonly roleTitle: Prisma.FieldRef<"ShiftRole", 'String'>;
    readonly userId: Prisma.FieldRef<"ShiftRole", 'Int'>;
    readonly pastUserName: Prisma.FieldRef<"ShiftRole", 'String'>;
}
export type ShiftRoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    include?: Prisma.ShiftRoleInclude<ExtArgs> | null;
    where: Prisma.ShiftRoleWhereUniqueInput;
};
export type ShiftRoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    include?: Prisma.ShiftRoleInclude<ExtArgs> | null;
    where: Prisma.ShiftRoleWhereUniqueInput;
};
export type ShiftRoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftRoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftRoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftRoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    include?: Prisma.ShiftRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftRoleCreateInput, Prisma.ShiftRoleUncheckedCreateInput>;
};
export type ShiftRoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShiftRoleCreateManyInput | Prisma.ShiftRoleCreateManyInput[];
};
export type ShiftRoleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    data: Prisma.ShiftRoleCreateManyInput | Prisma.ShiftRoleCreateManyInput[];
    include?: Prisma.ShiftRoleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShiftRoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    include?: Prisma.ShiftRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftRoleUpdateInput, Prisma.ShiftRoleUncheckedUpdateInput>;
    where: Prisma.ShiftRoleWhereUniqueInput;
};
export type ShiftRoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShiftRoleUpdateManyMutationInput, Prisma.ShiftRoleUncheckedUpdateManyInput>;
    where?: Prisma.ShiftRoleWhereInput;
    limit?: number;
};
export type ShiftRoleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftRoleUpdateManyMutationInput, Prisma.ShiftRoleUncheckedUpdateManyInput>;
    where?: Prisma.ShiftRoleWhereInput;
    limit?: number;
    include?: Prisma.ShiftRoleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShiftRoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    include?: Prisma.ShiftRoleInclude<ExtArgs> | null;
    where: Prisma.ShiftRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftRoleCreateInput, Prisma.ShiftRoleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShiftRoleUpdateInput, Prisma.ShiftRoleUncheckedUpdateInput>;
};
export type ShiftRoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    include?: Prisma.ShiftRoleInclude<ExtArgs> | null;
    where: Prisma.ShiftRoleWhereUniqueInput;
};
export type ShiftRoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftRoleWhereInput;
    limit?: number;
};
export type ShiftRoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftRoleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftRoleOmit<ExtArgs> | null;
    include?: Prisma.ShiftRoleInclude<ExtArgs> | null;
};
