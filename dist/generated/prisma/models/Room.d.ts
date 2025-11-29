import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type RoomModel = runtime.Types.Result.DefaultSelection<Prisma.$RoomPayload>;
export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null;
    _avg: RoomAvgAggregateOutputType | null;
    _sum: RoomSumAggregateOutputType | null;
    _min: RoomMinAggregateOutputType | null;
    _max: RoomMaxAggregateOutputType | null;
};
export type RoomAvgAggregateOutputType = {
    capacity: number | null;
    price: runtime.Decimal | null;
};
export type RoomSumAggregateOutputType = {
    capacity: number | null;
    price: runtime.Decimal | null;
};
export type RoomMinAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    capacity: number | null;
    roomStatus: $Enums.Room_Status | null;
    price: runtime.Decimal | null;
    createdAt: Date | null;
};
export type RoomMaxAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    capacity: number | null;
    roomStatus: $Enums.Room_Status | null;
    price: runtime.Decimal | null;
    createdAt: Date | null;
};
export type RoomCountAggregateOutputType = {
    id: number;
    ownerId: number;
    capacity: number;
    roomStatus: number;
    price: number;
    createdAt: number;
    _all: number;
};
export type RoomAvgAggregateInputType = {
    capacity?: true;
    price?: true;
};
export type RoomSumAggregateInputType = {
    capacity?: true;
    price?: true;
};
export type RoomMinAggregateInputType = {
    id?: true;
    ownerId?: true;
    capacity?: true;
    roomStatus?: true;
    price?: true;
    createdAt?: true;
};
export type RoomMaxAggregateInputType = {
    id?: true;
    ownerId?: true;
    capacity?: true;
    roomStatus?: true;
    price?: true;
    createdAt?: true;
};
export type RoomCountAggregateInputType = {
    id?: true;
    ownerId?: true;
    capacity?: true;
    roomStatus?: true;
    price?: true;
    createdAt?: true;
    _all?: true;
};
export type RoomAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoomCountAggregateInputType;
    _avg?: RoomAvgAggregateInputType;
    _sum?: RoomSumAggregateInputType;
    _min?: RoomMinAggregateInputType;
    _max?: RoomMaxAggregateInputType;
};
export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
    [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoom[P]> : Prisma.GetScalarType<T[P], AggregateRoom[P]>;
};
export type RoomGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithAggregationInput | Prisma.RoomOrderByWithAggregationInput[];
    by: Prisma.RoomScalarFieldEnum[] | Prisma.RoomScalarFieldEnum;
    having?: Prisma.RoomScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoomCountAggregateInputType | true;
    _avg?: RoomAvgAggregateInputType;
    _sum?: RoomSumAggregateInputType;
    _min?: RoomMinAggregateInputType;
    _max?: RoomMaxAggregateInputType;
};
export type RoomGroupByOutputType = {
    id: string;
    ownerId: string;
    capacity: number;
    roomStatus: $Enums.Room_Status;
    price: runtime.Decimal;
    createdAt: Date;
    _count: RoomCountAggregateOutputType | null;
    _avg: RoomAvgAggregateOutputType | null;
    _sum: RoomSumAggregateOutputType | null;
    _min: RoomMinAggregateOutputType | null;
    _max: RoomMaxAggregateOutputType | null;
};
type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoomGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]>;
}>>;
export type RoomWhereInput = {
    AND?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    OR?: Prisma.RoomWhereInput[];
    NOT?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    id?: Prisma.StringFilter<"Room"> | string;
    ownerId?: Prisma.StringFilter<"Room"> | string;
    capacity?: Prisma.IntFilter<"Room"> | number;
    roomStatus?: Prisma.EnumRoom_StatusFilter<"Room"> | $Enums.Room_Status;
    price?: Prisma.DecimalFilter<"Room"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    bookings?: Prisma.BookingListRelationFilter;
};
export type RoomOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    roomStatus?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    bookings?: Prisma.BookingOrderByRelationAggregateInput;
    _relevance?: Prisma.RoomOrderByRelevanceInput;
};
export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    OR?: Prisma.RoomWhereInput[];
    NOT?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    ownerId?: Prisma.StringFilter<"Room"> | string;
    capacity?: Prisma.IntFilter<"Room"> | number;
    roomStatus?: Prisma.EnumRoom_StatusFilter<"Room"> | $Enums.Room_Status;
    price?: Prisma.DecimalFilter<"Room"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    bookings?: Prisma.BookingListRelationFilter;
}, "id">;
export type RoomOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    roomStatus?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RoomCountOrderByAggregateInput;
    _avg?: Prisma.RoomAvgOrderByAggregateInput;
    _max?: Prisma.RoomMaxOrderByAggregateInput;
    _min?: Prisma.RoomMinOrderByAggregateInput;
    _sum?: Prisma.RoomSumOrderByAggregateInput;
};
export type RoomScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoomScalarWhereWithAggregatesInput | Prisma.RoomScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoomScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoomScalarWhereWithAggregatesInput | Prisma.RoomScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Room"> | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Room"> | string;
    capacity?: Prisma.IntWithAggregatesFilter<"Room"> | number;
    roomStatus?: Prisma.EnumRoom_StatusWithAggregatesFilter<"Room"> | $Enums.Room_Status;
    price?: Prisma.DecimalWithAggregatesFilter<"Room"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Room"> | Date | string;
};
export type RoomCreateInput = {
    id?: string;
    capacity: number;
    roomStatus?: $Enums.Room_Status;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutRoomsInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutRoomInput;
};
export type RoomUncheckedCreateInput = {
    id?: string;
    ownerId: string;
    capacity: number;
    roomStatus?: $Enums.Room_Status;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    roomStatus?: Prisma.EnumRoom_StatusFieldUpdateOperationsInput | $Enums.Room_Status;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutRoomsNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    roomStatus?: Prisma.EnumRoom_StatusFieldUpdateOperationsInput | $Enums.Room_Status;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomCreateManyInput = {
    id?: string;
    ownerId: string;
    capacity: number;
    roomStatus?: $Enums.Room_Status;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type RoomUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    roomStatus?: Prisma.EnumRoom_StatusFieldUpdateOperationsInput | $Enums.Room_Status;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    roomStatus?: Prisma.EnumRoom_StatusFieldUpdateOperationsInput | $Enums.Room_Status;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomListRelationFilter = {
    every?: Prisma.RoomWhereInput;
    some?: Prisma.RoomWhereInput;
    none?: Prisma.RoomWhereInput;
};
export type RoomOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoomOrderByRelevanceInput = {
    fields: Prisma.RoomOrderByRelevanceFieldEnum | Prisma.RoomOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type RoomCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    roomStatus?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoomAvgOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type RoomMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    roomStatus?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoomMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    roomStatus?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoomSumOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type RoomScalarRelationFilter = {
    is?: Prisma.RoomWhereInput;
    isNot?: Prisma.RoomWhereInput;
};
export type RoomCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutOwnerInput, Prisma.RoomUncheckedCreateWithoutOwnerInput> | Prisma.RoomCreateWithoutOwnerInput[] | Prisma.RoomUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutOwnerInput | Prisma.RoomCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.RoomCreateManyOwnerInputEnvelope;
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
};
export type RoomUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutOwnerInput, Prisma.RoomUncheckedCreateWithoutOwnerInput> | Prisma.RoomCreateWithoutOwnerInput[] | Prisma.RoomUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutOwnerInput | Prisma.RoomCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.RoomCreateManyOwnerInputEnvelope;
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
};
export type RoomUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutOwnerInput, Prisma.RoomUncheckedCreateWithoutOwnerInput> | Prisma.RoomCreateWithoutOwnerInput[] | Prisma.RoomUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutOwnerInput | Prisma.RoomCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.RoomUpsertWithWhereUniqueWithoutOwnerInput | Prisma.RoomUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.RoomCreateManyOwnerInputEnvelope;
    set?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    disconnect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    delete?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    update?: Prisma.RoomUpdateWithWhereUniqueWithoutOwnerInput | Prisma.RoomUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.RoomUpdateManyWithWhereWithoutOwnerInput | Prisma.RoomUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
};
export type RoomUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutOwnerInput, Prisma.RoomUncheckedCreateWithoutOwnerInput> | Prisma.RoomCreateWithoutOwnerInput[] | Prisma.RoomUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutOwnerInput | Prisma.RoomCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.RoomUpsertWithWhereUniqueWithoutOwnerInput | Prisma.RoomUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.RoomCreateManyOwnerInputEnvelope;
    set?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    disconnect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    delete?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    update?: Prisma.RoomUpdateWithWhereUniqueWithoutOwnerInput | Prisma.RoomUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.RoomUpdateManyWithWhereWithoutOwnerInput | Prisma.RoomUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumRoom_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Room_Status;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type RoomCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutBookingsInput, Prisma.RoomUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.RoomWhereUniqueInput;
};
export type RoomUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutBookingsInput, Prisma.RoomUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.RoomUpsertWithoutBookingsInput;
    connect?: Prisma.RoomWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoomUpdateToOneWithWhereWithoutBookingsInput, Prisma.RoomUpdateWithoutBookingsInput>, Prisma.RoomUncheckedUpdateWithoutBookingsInput>;
};
export type RoomCreateWithoutOwnerInput = {
    id?: string;
    capacity: number;
    roomStatus?: $Enums.Room_Status;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    bookings?: Prisma.BookingCreateNestedManyWithoutRoomInput;
};
export type RoomUncheckedCreateWithoutOwnerInput = {
    id?: string;
    capacity: number;
    roomStatus?: $Enums.Room_Status;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomCreateOrConnectWithoutOwnerInput = {
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateWithoutOwnerInput, Prisma.RoomUncheckedCreateWithoutOwnerInput>;
};
export type RoomCreateManyOwnerInputEnvelope = {
    data: Prisma.RoomCreateManyOwnerInput | Prisma.RoomCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type RoomUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.RoomWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoomUpdateWithoutOwnerInput, Prisma.RoomUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.RoomCreateWithoutOwnerInput, Prisma.RoomUncheckedCreateWithoutOwnerInput>;
};
export type RoomUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.RoomWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoomUpdateWithoutOwnerInput, Prisma.RoomUncheckedUpdateWithoutOwnerInput>;
};
export type RoomUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.RoomScalarWhereInput;
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyWithoutOwnerInput>;
};
export type RoomScalarWhereInput = {
    AND?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
    OR?: Prisma.RoomScalarWhereInput[];
    NOT?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
    id?: Prisma.StringFilter<"Room"> | string;
    ownerId?: Prisma.StringFilter<"Room"> | string;
    capacity?: Prisma.IntFilter<"Room"> | number;
    roomStatus?: Prisma.EnumRoom_StatusFilter<"Room"> | $Enums.Room_Status;
    price?: Prisma.DecimalFilter<"Room"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
};
export type RoomCreateWithoutBookingsInput = {
    id?: string;
    capacity: number;
    roomStatus?: $Enums.Room_Status;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutRoomsInput;
};
export type RoomUncheckedCreateWithoutBookingsInput = {
    id?: string;
    ownerId: string;
    capacity: number;
    roomStatus?: $Enums.Room_Status;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type RoomCreateOrConnectWithoutBookingsInput = {
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateWithoutBookingsInput, Prisma.RoomUncheckedCreateWithoutBookingsInput>;
};
export type RoomUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.RoomUpdateWithoutBookingsInput, Prisma.RoomUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.RoomCreateWithoutBookingsInput, Prisma.RoomUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.RoomWhereInput;
};
export type RoomUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.RoomWhereInput;
    data: Prisma.XOR<Prisma.RoomUpdateWithoutBookingsInput, Prisma.RoomUncheckedUpdateWithoutBookingsInput>;
};
export type RoomUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    roomStatus?: Prisma.EnumRoom_StatusFieldUpdateOperationsInput | $Enums.Room_Status;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutRoomsNestedInput;
};
export type RoomUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    roomStatus?: Prisma.EnumRoom_StatusFieldUpdateOperationsInput | $Enums.Room_Status;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomCreateManyOwnerInput = {
    id?: string;
    capacity: number;
    roomStatus?: $Enums.Room_Status;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type RoomUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    roomStatus?: Prisma.EnumRoom_StatusFieldUpdateOperationsInput | $Enums.Room_Status;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.BookingUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    roomStatus?: Prisma.EnumRoom_StatusFieldUpdateOperationsInput | $Enums.Room_Status;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    roomStatus?: Prisma.EnumRoom_StatusFieldUpdateOperationsInput | $Enums.Room_Status;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomCountOutputType = {
    bookings: number;
};
export type RoomCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs;
};
export type RoomCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomCountOutputTypeSelect<ExtArgs> | null;
};
export type RoomCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
};
export type RoomSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    capacity?: boolean;
    roomStatus?: boolean;
    price?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.Room$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room"]>;
export type RoomSelectScalar = {
    id?: boolean;
    ownerId?: boolean;
    capacity?: boolean;
    roomStatus?: boolean;
    price?: boolean;
    createdAt?: boolean;
};
export type RoomOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ownerId" | "capacity" | "roomStatus" | "price" | "createdAt", ExtArgs["result"]["room"]>;
export type RoomInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.Room$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $RoomPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Room";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        bookings: Prisma.$BookingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ownerId: string;
        capacity: number;
        roomStatus: $Enums.Room_Status;
        price: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["room"]>;
    composites: {};
};
export type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoomPayload, S>;
export type RoomCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoomCountAggregateInputType | true;
};
export interface RoomDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Room'];
        meta: {
            name: 'Room';
        };
    };
    findUnique<T extends RoomFindUniqueArgs>(args: Prisma.SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoomFindFirstArgs>(args?: Prisma.SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoomFindManyArgs>(args?: Prisma.SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoomCreateArgs>(args: Prisma.SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoomCreateManyArgs>(args?: Prisma.SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends RoomDeleteArgs>(args: Prisma.SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoomUpdateArgs>(args: Prisma.SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoomDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoomUpdateManyArgs>(args: Prisma.SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends RoomUpsertArgs>(args: Prisma.SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoomCountArgs>(args?: Prisma.Subset<T, RoomCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoomCountAggregateOutputType> : number>;
    aggregate<T extends RoomAggregateArgs>(args: Prisma.Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>;
    groupBy<T extends RoomGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoomGroupByArgs['orderBy'];
    } : {
        orderBy?: RoomGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoomFieldRefs;
}
export interface Prisma__RoomClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bookings<T extends Prisma.Room$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoomFieldRefs {
    readonly id: Prisma.FieldRef<"Room", 'String'>;
    readonly ownerId: Prisma.FieldRef<"Room", 'String'>;
    readonly capacity: Prisma.FieldRef<"Room", 'Int'>;
    readonly roomStatus: Prisma.FieldRef<"Room", 'Room_Status'>;
    readonly price: Prisma.FieldRef<"Room", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Room", 'DateTime'>;
}
export type RoomFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomCreateInput, Prisma.RoomUncheckedCreateInput>;
};
export type RoomCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoomCreateManyInput | Prisma.RoomCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoomUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomUpdateInput, Prisma.RoomUncheckedUpdateInput>;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyInput>;
    where?: Prisma.RoomWhereInput;
    limit?: number;
};
export type RoomUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateInput, Prisma.RoomUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoomUpdateInput, Prisma.RoomUncheckedUpdateInput>;
};
export type RoomDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    limit?: number;
};
export type Room$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
export type RoomDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
};
export {};
