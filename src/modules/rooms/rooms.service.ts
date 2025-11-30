import { Injectable } from "@nestjs/common";

import { DatabaseService } from "../database/database.service";
import { CreateRoomDto, RoomResponseDTO, UpdateRoomDto } from "./dto/rooms.dto";
import { UserResponseDTO } from "../auth/dto/auth.dto";
import { Prisma } from "generated/prisma/browser";
import { RoomQuery } from "./types/room.types";
import { removeFields } from "src/utils/object.util";

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

  findOne(id: string) {
    return this.prismaService.room.findUnique({
      where: { id },
      include: { bookings: true },
    });
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
    const room = await this.prismaService.room.findUniqueOrThrow({
      where: { id },
    });
    if (room.ownerId !== user!.id && user!.role !== "ADMIN") {
      throw new Error("You are not authorized to delete this room");
    }
    return this.prismaService.room.update({
      where: { id },
      data: { roomStatus: "DELETED" },
    });
  }
}
