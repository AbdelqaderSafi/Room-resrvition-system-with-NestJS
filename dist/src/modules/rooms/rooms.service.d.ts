import { DatabaseService } from "../database/database.service";
import { CreateRoomDto, RoomResponseDTO, UpdateRoomDto } from "./dto/rooms.dto";
import { Prisma } from "generated/prisma/browser";
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
    findOne(id: string): Prisma.Prisma__RoomClient<({
        bookings: {
            id: string;
            createdAt: Date;
            guestId: string;
            roomId: string;
            checkIn: Date;
            checkOut: Date;
            totalPrice: number;
            status: import("generated/prisma/browser").Booking_Status;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        ownerId: string;
        capacity: number;
        roomStatus: import("generated/prisma/browser").Room_Status;
        price: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
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
