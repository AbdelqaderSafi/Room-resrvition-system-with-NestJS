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
            name: string;
            id: string;
            createdAt: Date;
            ownerId: string;
            capacity: number;
            roomStatus: import("../../../generated/prisma/enums").Room_Status;
            price: number;
        }[];
    }>;
    findOne(id: string): Promise<{
        bookings: {
            id: string;
            createdAt: Date;
            checkOut: Date;
            checkIn: Date;
            status: import("../../../generated/prisma/enums").Booking_Status;
            guestId: string;
            roomId: string;
            totalPrice: number;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        ownerId: string;
        capacity: number;
        roomStatus: import("../../../generated/prisma/enums").Room_Status;
        price: number;
    }>;
    update(id: string, updatePayload: UpdateRoomDto, user: UserResponseDTO["userData"]): Promise<RoomResponseDTO>;
    remove(id: string, user: UserResponseDTO["userData"]): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        ownerId: string;
        capacity: number;
        roomStatus: import("../../../generated/prisma/enums").Room_Status;
        price: number;
    }>;
}
