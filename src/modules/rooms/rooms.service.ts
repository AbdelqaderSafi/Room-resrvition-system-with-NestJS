import { Injectable, NotFoundException } from "@nestjs/common";

import { DatabaseService } from "../database/database.service";
import { CreateRoomDto, RoomResponseDTO, UpdateRoomDto } from "./dto/rooms.dto";
import { Prisma } from "generated/prisma/browser";
import { RoomQuery } from "./types/room.types";
import { removeFields } from "src/utils/object.util";
import { UnauthorizedAccessException } from "src/exceptions/custom.exceptions";

@Injectable()
export class RoomsService {
  constructor(private readonly prismaService: DatabaseService) {}

  create(
    createRoomDto: CreateRoomDto,
    user: Express.Request["user"]
  ): Promise<RoomResponseDTO> {
    const dataPayload: Prisma.RoomUncheckedCreateInput = {
      ...createRoomDto,
      ownerId: user!.id,
    };
    return this.prismaService.room.create({ data: dataPayload });
  }

  findAll(query: RoomQuery) {
    return this.prismaService.$transaction(async (prisma) => {
      const whereClause: Prisma.RoomWhereInput = {};

      if (query.name) {
        whereClause.name = { contains: query.name };
      }

      if (query.minPrice || query.maxPrice) {
        whereClause.price = {
          gte: query.minPrice,
          lte: query.maxPrice,
        };
      }
      if (query.capacity) {
        whereClause.capacity = {
          gte: query.capacity,
        };
      }
      if (query.checkIn && query.checkOut) {
        // Filter rooms that don't have overlapping bookings
        whereClause.bookings = {
          none: {
            AND: [
              { status: { not: "CANCELLED" } },
              {
                OR: [
                  {
                    // Booking starts during the requested period
                    checkIn: {
                      gte: new Date(query.checkIn),
                      lt: new Date(query.checkOut),
                    },
                  },
                  {
                    // Booking ends during the requested period
                    checkOut: {
                      gt: new Date(query.checkIn),
                      lte: new Date(query.checkOut),
                    },
                  },
                  {
                    // Booking spans the entire requested period
                    AND: [
                      { checkIn: { lte: new Date(query.checkIn) } },
                      { checkOut: { gte: new Date(query.checkOut) } },
                    ],
                  },
                ],
              },
            ],
          },
        };
      }

      const pagination = this.prismaService.handleQueryPagination(query);

      const rooms = await prisma.room.findMany({
        ...removeFields(pagination, ["page"]),
        where: whereClause,
      });

      const count = await prisma.room.count({
        where: whereClause,
      });

      return {
        data: rooms,
        ...this.prismaService.formatPaginationResponse({
          page: pagination.page,
          count,
          limit: pagination.take,
        }),
      };
    });
  }

  async findOne(id: string) {
    const room = await this.prismaService.room.findUnique({
      where: { id },
      include: { bookings: true },
    });

    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }

    return room;
  }

  async update(
    id: string,
    updateRoomDto: UpdateRoomDto,
    user: Express.Request["user"]
  ): Promise<RoomResponseDTO> {
    const dataPayload: Prisma.RoomUncheckedUpdateInput = {
      ...updateRoomDto,
    };

    return this.prismaService.room.update({
      where: { id, ownerId: user!.id },
      data: dataPayload,
    });
  }

  async remove(id: string, user: Express.Request["user"]) {
    const room = await this.prismaService.room.findUnique({
      where: { id },
    });

    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }

    if (room.ownerId !== user!.id && user!.role !== "ADMIN") {
      throw new UnauthorizedAccessException("room");
    }

    return this.prismaService.room.update({
      where: { id },
      data: { roomStatus: "DELETED" },
    });
  }
}
