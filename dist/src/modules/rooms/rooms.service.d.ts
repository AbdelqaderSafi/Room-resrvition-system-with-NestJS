import { DatabaseService } from "../database/database.service";
import { CreateRoomDto, RoomResponseDTO, UpdateRoomDto } from "./dto/rooms.dto";
import { RoomQuery } from "./types/room.types";
export declare class RoomsService {
    private readonly prismaService;
    constructor(prismaService: DatabaseService);
    create(createRoomDto: CreateRoomDto, user: Express.Request["user"]): Promise<RoomResponseDTO>;
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
            roomStatus: import("generated/prisma/browser").Room_Status;
            price: number;
        }[];
    }>;
    findOne(id: string): Promise<{
        bookings: {
            id: string;
            createdAt: Date;
            checkOut: Date;
            checkIn: Date;
            status: import("generated/prisma/browser").Booking_Status;
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
        roomStatus: import("generated/prisma/browser").Room_Status;
        price: number;
    }>;
    update(id: string, updateRoomDto: UpdateRoomDto, user: Express.Request["user"]): Promise<RoomResponseDTO>;
    remove(id: string, user: Express.Request["user"]): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        ownerId: string;
        capacity: number;
        roomStatus: import("generated/prisma/browser").Room_Status;
        price: number;
    }>;
}
