import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type BookingModel = runtime.Types.Result.DefaultSelection<Prisma.$BookingPayload>;
export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
};
export type BookingAvgAggregateOutputType = {
    totalPrice: number | null;
};
export type BookingSumAggregateOutputType = {
    totalPrice: number | null;
};
export type BookingMinAggregateOutputType = {
    id: string | null;
    guestId: string | null;
    roomId: string | null;
    checkIn: Date | null;
    checkOut: Date | null;
    totalPrice: number | null;
    status: $Enums.Booking_Status | null;
    createdAt: Date | null;
};
export type BookingMaxAggregateOutputType = {
    id: string | null;
    guestId: string | null;
    roomId: string | null;
    checkIn: Date | null;
    checkOut: Date | null;
    totalPrice: number | null;
    status: $Enums.Booking_Status | null;
    createdAt: Date | null;
};
export type BookingCountAggregateOutputType = {
    id: number;
    guestId: number;
    roomId: number;
    checkIn: number;
    checkOut: number;
    totalPrice: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type BookingAvgAggregateInputType = {
    totalPrice?: true;
};
export type BookingSumAggregateInputType = {
    totalPrice?: true;
};
export type BookingMinAggregateInputType = {
    id?: true;
    guestId?: true;
    roomId?: true;
    checkIn?: true;
    checkOut?: true;
    totalPrice?: true;
    status?: true;
    createdAt?: true;
};
export type BookingMaxAggregateInputType = {
    id?: true;
    guestId?: true;
    roomId?: true;
    checkIn?: true;
    checkOut?: true;
    totalPrice?: true;
    status?: true;
    createdAt?: true;
};
export type BookingCountAggregateInputType = {
    id?: true;
    guestId?: true;
    roomId?: true;
    checkIn?: true;
    checkOut?: true;
    totalPrice?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type BookingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookingCountAggregateInputType;
    _avg?: BookingAvgAggregateInputType;
    _sum?: BookingSumAggregateInputType;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
};
export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBooking[P]> : Prisma.GetScalarType<T[P], AggregateBooking[P]>;
};
export type BookingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithAggregationInput | Prisma.BookingOrderByWithAggregationInput[];
    by: Prisma.BookingScalarFieldEnum[] | Prisma.BookingScalarFieldEnum;
    having?: Prisma.BookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _avg?: BookingAvgAggregateInputType;
    _sum?: BookingSumAggregateInputType;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
};
export type BookingGroupByOutputType = {
    id: string;
    guestId: string;
    roomId: string;
    checkIn: Date;
    checkOut: Date;
    totalPrice: number;
    status: $Enums.Booking_Status;
    createdAt: Date;
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
};
type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookingGroupByOutputType[P]>;
}>>;
export type BookingWhereInput = {
    AND?: Prisma.BookingWhereInput | Prisma.BookingWhereInput[];
    OR?: Prisma.BookingWhereInput[];
    NOT?: Prisma.BookingWhereInput | Prisma.BookingWhereInput[];
    id?: Prisma.StringFilter<"Booking"> | string;
    guestId?: Prisma.StringFilter<"Booking"> | string;
    roomId?: Prisma.StringFilter<"Booking"> | string;
    checkIn?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    checkOut?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    totalPrice?: Prisma.IntFilter<"Booking"> | number;
    status?: Prisma.EnumBooking_StatusFilter<"Booking"> | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    guest?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    room?: Prisma.XOR<Prisma.RoomScalarRelationFilter, Prisma.RoomWhereInput>;
};
export type BookingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    checkIn?: Prisma.SortOrder;
    checkOut?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    guest?: Prisma.UserOrderByWithRelationInput;
    room?: Prisma.RoomOrderByWithRelationInput;
    _relevance?: Prisma.BookingOrderByRelevanceInput;
};
export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BookingWhereInput | Prisma.BookingWhereInput[];
    OR?: Prisma.BookingWhereInput[];
    NOT?: Prisma.BookingWhereInput | Prisma.BookingWhereInput[];
    guestId?: Prisma.StringFilter<"Booking"> | string;
    roomId?: Prisma.StringFilter<"Booking"> | string;
    checkIn?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    checkOut?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    totalPrice?: Prisma.IntFilter<"Booking"> | number;
    status?: Prisma.EnumBooking_StatusFilter<"Booking"> | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    guest?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    room?: Prisma.XOR<Prisma.RoomScalarRelationFilter, Prisma.RoomWhereInput>;
}, "id">;
export type BookingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    checkIn?: Prisma.SortOrder;
    checkOut?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BookingCountOrderByAggregateInput;
    _avg?: Prisma.BookingAvgOrderByAggregateInput;
    _max?: Prisma.BookingMaxOrderByAggregateInput;
    _min?: Prisma.BookingMinOrderByAggregateInput;
    _sum?: Prisma.BookingSumOrderByAggregateInput;
};
export type BookingScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookingScalarWhereWithAggregatesInput | Prisma.BookingScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookingScalarWhereWithAggregatesInput | Prisma.BookingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Booking"> | string;
    guestId?: Prisma.StringWithAggregatesFilter<"Booking"> | string;
    roomId?: Prisma.StringWithAggregatesFilter<"Booking"> | string;
    checkIn?: Prisma.DateTimeWithAggregatesFilter<"Booking"> | Date | string;
    checkOut?: Prisma.DateTimeWithAggregatesFilter<"Booking"> | Date | string;
    totalPrice?: Prisma.IntWithAggregatesFilter<"Booking"> | number;
    status?: Prisma.EnumBooking_StatusWithAggregatesFilter<"Booking"> | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Booking"> | Date | string;
};
export type BookingCreateInput = {
    id?: string;
    checkIn: Date | string;
    checkOut: Date | string;
    totalPrice: number;
    status?: $Enums.Booking_Status;
    createdAt?: Date | string;
    guest: Prisma.UserCreateNestedOneWithoutBookingsInput;
    room: Prisma.RoomCreateNestedOneWithoutBookingsInput;
};
export type BookingUncheckedCreateInput = {
    id?: string;
    guestId: string;
    roomId: string;
    checkIn: Date | string;
    checkOut: Date | string;
    totalPrice: number;
    status?: $Enums.Booking_Status;
    createdAt?: Date | string;
};
export type BookingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guest?: Prisma.UserUpdateOneRequiredWithoutBookingsNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutBookingsNestedInput;
};
export type BookingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingCreateManyInput = {
    id?: string;
    guestId: string;
    roomId: string;
    checkIn: Date | string;
    checkOut: Date | string;
    totalPrice: number;
    status?: $Enums.Booking_Status;
    createdAt?: Date | string;
};
export type BookingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingListRelationFilter = {
    every?: Prisma.BookingWhereInput;
    some?: Prisma.BookingWhereInput;
    none?: Prisma.BookingWhereInput;
};
export type BookingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookingOrderByRelevanceInput = {
    fields: Prisma.BookingOrderByRelevanceFieldEnum | Prisma.BookingOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BookingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    checkIn?: Prisma.SortOrder;
    checkOut?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BookingAvgOrderByAggregateInput = {
    totalPrice?: Prisma.SortOrder;
};
export type BookingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    checkIn?: Prisma.SortOrder;
    checkOut?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BookingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    checkIn?: Prisma.SortOrder;
    checkOut?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BookingSumOrderByAggregateInput = {
    totalPrice?: Prisma.SortOrder;
};
export type BookingCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutGuestInput, Prisma.BookingUncheckedCreateWithoutGuestInput> | Prisma.BookingCreateWithoutGuestInput[] | Prisma.BookingUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutGuestInput | Prisma.BookingCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.BookingCreateManyGuestInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUncheckedCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutGuestInput, Prisma.BookingUncheckedCreateWithoutGuestInput> | Prisma.BookingCreateWithoutGuestInput[] | Prisma.BookingUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutGuestInput | Prisma.BookingCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.BookingCreateManyGuestInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutGuestInput, Prisma.BookingUncheckedCreateWithoutGuestInput> | Prisma.BookingCreateWithoutGuestInput[] | Prisma.BookingUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutGuestInput | Prisma.BookingCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutGuestInput | Prisma.BookingUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.BookingCreateManyGuestInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutGuestInput | Prisma.BookingUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutGuestInput | Prisma.BookingUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type BookingUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutGuestInput, Prisma.BookingUncheckedCreateWithoutGuestInput> | Prisma.BookingCreateWithoutGuestInput[] | Prisma.BookingUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutGuestInput | Prisma.BookingCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutGuestInput | Prisma.BookingUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.BookingCreateManyGuestInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutGuestInput | Prisma.BookingUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutGuestInput | Prisma.BookingUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type BookingCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutRoomInput, Prisma.BookingUncheckedCreateWithoutRoomInput> | Prisma.BookingCreateWithoutRoomInput[] | Prisma.BookingUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutRoomInput | Prisma.BookingCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.BookingCreateManyRoomInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutRoomInput, Prisma.BookingUncheckedCreateWithoutRoomInput> | Prisma.BookingCreateWithoutRoomInput[] | Prisma.BookingUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutRoomInput | Prisma.BookingCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.BookingCreateManyRoomInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutRoomInput, Prisma.BookingUncheckedCreateWithoutRoomInput> | Prisma.BookingCreateWithoutRoomInput[] | Prisma.BookingUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutRoomInput | Prisma.BookingCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutRoomInput | Prisma.BookingUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.BookingCreateManyRoomInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutRoomInput | Prisma.BookingUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutRoomInput | Prisma.BookingUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type BookingUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutRoomInput, Prisma.BookingUncheckedCreateWithoutRoomInput> | Prisma.BookingCreateWithoutRoomInput[] | Prisma.BookingUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutRoomInput | Prisma.BookingCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutRoomInput | Prisma.BookingUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.BookingCreateManyRoomInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutRoomInput | Prisma.BookingUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutRoomInput | Prisma.BookingUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type EnumBooking_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Booking_Status;
};
export type BookingCreateWithoutGuestInput = {
    id?: string;
    checkIn: Date | string;
    checkOut: Date | string;
    totalPrice: number;
    status?: $Enums.Booking_Status;
    createdAt?: Date | string;
    room: Prisma.RoomCreateNestedOneWithoutBookingsInput;
};
export type BookingUncheckedCreateWithoutGuestInput = {
    id?: string;
    roomId: string;
    checkIn: Date | string;
    checkOut: Date | string;
    totalPrice: number;
    status?: $Enums.Booking_Status;
    createdAt?: Date | string;
};
export type BookingCreateOrConnectWithoutGuestInput = {
    where: Prisma.BookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookingCreateWithoutGuestInput, Prisma.BookingUncheckedCreateWithoutGuestInput>;
};
export type BookingCreateManyGuestInputEnvelope = {
    data: Prisma.BookingCreateManyGuestInput | Prisma.BookingCreateManyGuestInput[];
    skipDuplicates?: boolean;
};
export type BookingUpsertWithWhereUniqueWithoutGuestInput = {
    where: Prisma.BookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookingUpdateWithoutGuestInput, Prisma.BookingUncheckedUpdateWithoutGuestInput>;
    create: Prisma.XOR<Prisma.BookingCreateWithoutGuestInput, Prisma.BookingUncheckedCreateWithoutGuestInput>;
};
export type BookingUpdateWithWhereUniqueWithoutGuestInput = {
    where: Prisma.BookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookingUpdateWithoutGuestInput, Prisma.BookingUncheckedUpdateWithoutGuestInput>;
};
export type BookingUpdateManyWithWhereWithoutGuestInput = {
    where: Prisma.BookingScalarWhereInput;
    data: Prisma.XOR<Prisma.BookingUpdateManyMutationInput, Prisma.BookingUncheckedUpdateManyWithoutGuestInput>;
};
export type BookingScalarWhereInput = {
    AND?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
    OR?: Prisma.BookingScalarWhereInput[];
    NOT?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
    id?: Prisma.StringFilter<"Booking"> | string;
    guestId?: Prisma.StringFilter<"Booking"> | string;
    roomId?: Prisma.StringFilter<"Booking"> | string;
    checkIn?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    checkOut?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    totalPrice?: Prisma.IntFilter<"Booking"> | number;
    status?: Prisma.EnumBooking_StatusFilter<"Booking"> | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFilter<"Booking"> | Date | string;
};
export type BookingCreateWithoutRoomInput = {
    id?: string;
    checkIn: Date | string;
    checkOut: Date | string;
    totalPrice: number;
    status?: $Enums.Booking_Status;
    createdAt?: Date | string;
    guest: Prisma.UserCreateNestedOneWithoutBookingsInput;
};
export type BookingUncheckedCreateWithoutRoomInput = {
    id?: string;
    guestId: string;
    checkIn: Date | string;
    checkOut: Date | string;
    totalPrice: number;
    status?: $Enums.Booking_Status;
    createdAt?: Date | string;
};
export type BookingCreateOrConnectWithoutRoomInput = {
    where: Prisma.BookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookingCreateWithoutRoomInput, Prisma.BookingUncheckedCreateWithoutRoomInput>;
};
export type BookingCreateManyRoomInputEnvelope = {
    data: Prisma.BookingCreateManyRoomInput | Prisma.BookingCreateManyRoomInput[];
    skipDuplicates?: boolean;
};
export type BookingUpsertWithWhereUniqueWithoutRoomInput = {
    where: Prisma.BookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookingUpdateWithoutRoomInput, Prisma.BookingUncheckedUpdateWithoutRoomInput>;
    create: Prisma.XOR<Prisma.BookingCreateWithoutRoomInput, Prisma.BookingUncheckedCreateWithoutRoomInput>;
};
export type BookingUpdateWithWhereUniqueWithoutRoomInput = {
    where: Prisma.BookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookingUpdateWithoutRoomInput, Prisma.BookingUncheckedUpdateWithoutRoomInput>;
};
export type BookingUpdateManyWithWhereWithoutRoomInput = {
    where: Prisma.BookingScalarWhereInput;
    data: Prisma.XOR<Prisma.BookingUpdateManyMutationInput, Prisma.BookingUncheckedUpdateManyWithoutRoomInput>;
};
export type BookingCreateManyGuestInput = {
    id?: string;
    roomId: string;
    checkIn: Date | string;
    checkOut: Date | string;
    totalPrice: number;
    status?: $Enums.Booking_Status;
    createdAt?: Date | string;
};
export type BookingUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    room?: Prisma.RoomUpdateOneRequiredWithoutBookingsNestedInput;
};
export type BookingUncheckedUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingUncheckedUpdateManyWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingCreateManyRoomInput = {
    id?: string;
    guestId: string;
    checkIn: Date | string;
    checkOut: Date | string;
    totalPrice: number;
    status?: $Enums.Booking_Status;
    createdAt?: Date | string;
};
export type BookingUpdateWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guest?: Prisma.UserUpdateOneRequiredWithoutBookingsNestedInput;
};
export type BookingUncheckedUpdateWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingUncheckedUpdateManyWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkIn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBooking_StatusFieldUpdateOperationsInput | $Enums.Booking_Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guestId?: boolean;
    roomId?: boolean;
    checkIn?: boolean;
    checkOut?: boolean;
    totalPrice?: boolean;
    status?: boolean;
    createdAt?: boolean;
    guest?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["booking"]>;
export type BookingSelectScalar = {
    id?: boolean;
    guestId?: boolean;
    roomId?: boolean;
    checkIn?: boolean;
    checkOut?: boolean;
    totalPrice?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type BookingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guestId" | "roomId" | "checkIn" | "checkOut" | "totalPrice" | "status" | "createdAt", ExtArgs["result"]["booking"]>;
export type BookingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guest?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
};
export type $BookingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Booking";
    objects: {
        guest: Prisma.$UserPayload<ExtArgs>;
        room: Prisma.$RoomPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guestId: string;
        roomId: string;
        checkIn: Date;
        checkOut: Date;
        totalPrice: number;
        status: $Enums.Booking_Status;
        createdAt: Date;
    }, ExtArgs["result"]["booking"]>;
    composites: {};
};
export type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookingPayload, S>;
export type BookingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookingCountAggregateInputType | true;
};
export interface BookingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Booking'];
        meta: {
            name: 'Booking';
        };
    };
    findUnique<T extends BookingFindUniqueArgs>(args: Prisma.SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookingFindFirstArgs>(args?: Prisma.SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookingFindManyArgs>(args?: Prisma.SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookingCreateArgs>(args: Prisma.SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookingCreateManyArgs>(args?: Prisma.SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BookingDeleteArgs>(args: Prisma.SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookingUpdateArgs>(args: Prisma.SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookingDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookingUpdateManyArgs>(args: Prisma.SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BookingUpsertArgs>(args: Prisma.SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookingCountArgs>(args?: Prisma.Subset<T, BookingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookingCountAggregateOutputType> : number>;
    aggregate<T extends BookingAggregateArgs>(args: Prisma.Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>;
    groupBy<T extends BookingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookingGroupByArgs['orderBy'];
    } : {
        orderBy?: BookingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookingFieldRefs;
}
export interface Prisma__BookingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    guest<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    room<T extends Prisma.RoomDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoomDefaultArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookingFieldRefs {
    readonly id: Prisma.FieldRef<"Booking", 'String'>;
    readonly guestId: Prisma.FieldRef<"Booking", 'String'>;
    readonly roomId: Prisma.FieldRef<"Booking", 'String'>;
    readonly checkIn: Prisma.FieldRef<"Booking", 'DateTime'>;
    readonly checkOut: Prisma.FieldRef<"Booking", 'DateTime'>;
    readonly totalPrice: Prisma.FieldRef<"Booking", 'Int'>;
    readonly status: Prisma.FieldRef<"Booking", 'Booking_Status'>;
    readonly createdAt: Prisma.FieldRef<"Booking", 'DateTime'>;
}
export type BookingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where: Prisma.BookingWhereUniqueInput;
};
export type BookingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where: Prisma.BookingWhereUniqueInput;
};
export type BookingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BookingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BookingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BookingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookingCreateInput, Prisma.BookingUncheckedCreateInput>;
};
export type BookingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookingCreateManyInput | Prisma.BookingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookingUpdateInput, Prisma.BookingUncheckedUpdateInput>;
    where: Prisma.BookingWhereUniqueInput;
};
export type BookingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookingUpdateManyMutationInput, Prisma.BookingUncheckedUpdateManyInput>;
    where?: Prisma.BookingWhereInput;
    limit?: number;
};
export type BookingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where: Prisma.BookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookingCreateInput, Prisma.BookingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookingUpdateInput, Prisma.BookingUncheckedUpdateInput>;
};
export type BookingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where: Prisma.BookingWhereUniqueInput;
};
export type BookingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
    limit?: number;
};
export type BookingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
};
export {};
