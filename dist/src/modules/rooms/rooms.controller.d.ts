import { RoomsService } from "./rooms.service";
import { CreateRoomDto, RoomResponseDTO, UpdateRoomDto } from "./dto/rooms.dto";
import { UserResponseDTO } from "../auth/dto/auth.dto";
import { RoomQuery } from "./types/room.types";
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    create(createRoomDto: CreateRoomDto, user: UserResponseDTO["userData"]): Promise<RoomResponseDTO>;
    findAll(query: RoomQuery): Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: {
            id: string;
            ownerId: string;
            name: string;
            capacity: number;
            roomStatus: import("../../../generated/prisma/enums").Room_Status;
            price: number;
            createdAt: Date;
        }[];
    }>;
    findOne(id: string): import("../../../generated/prisma/models").Prisma__RoomClient<({
        bookings: {
            id: string;
            createdAt: Date;
            guestId: string;
            roomId: string;
            checkIn: Date;
            checkOut: Date;
            status: import("../../../generated/prisma/enums").Booking_Status;
        }[];
    } & {
        id: string;
        ownerId: string;
        name: string;
        capacity: number;
        roomStatus: import("../../../generated/prisma/enums").Room_Status;
        price: number;
        createdAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, updatePayload: UpdateRoomDto, user: UserResponseDTO["userData"]): Promise<RoomResponseDTO>;
    remove(id: string, user: UserResponseDTO["userData"]): Promise<{
        id: string;
        ownerId: string;
        name: string;
        capacity: number;
        roomStatus: import("../../../generated/prisma/enums").Room_Status;
        price: number;
        createdAt: Date;
    }>;
}
