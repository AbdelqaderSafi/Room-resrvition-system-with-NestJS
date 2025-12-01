import { Injectable, Query } from "@nestjs/common";
import {
  CreateBookingDto,
  CreateBookingResponseDTO,
  updateBookingStatus,
} from "./dto/booking.dto";
import { DatabaseService } from "../database/database.service";
import { omit } from "zod/v4/core/util.cjs";
import { User } from "src/decorators/user.decorator";
import { ZodValidationPipe } from "src/pipes/zod.validation.pipe";
import { paginationSchema } from "src/utils/api.util";
import { PaginationQueryType } from "src/types/util.types";
import { removeFields } from "src/utils/object.util";
// import { UpdateBookingDto } from "./dto/update-booking.dto";

@Injectable()
export class BookingsService {
  constructor(private readonly prismaService: DatabaseService) {}

  async create(
    createBookingDto: CreateBookingDto,
    user: Express.Request["user"]
  ) {
    return await this.prismaService.$transaction(async (prisma) => {
      const conflictingBooking = await prisma.booking.findFirst({
        where: {
          roomId: createBookingDto.roomId,
          OR: [
            {
              checkIn: { lte: createBookingDto.checkIn },
              checkOut: { gt: createBookingDto.checkIn },
            },
            {
              checkIn: { lt: createBookingDto.checkOut },
              checkOut: { gte: createBookingDto.checkOut },
            },
            {
              checkIn: { gte: createBookingDto.checkIn },
              checkOut: { lte: createBookingDto.checkOut },
            },
          ],
        },
      });

      if (conflictingBooking) {
        throw new Error("Room is not available for the selected dates");
      }

      const room = await prisma.room.findUniqueOrThrow({
        where: { id: createBookingDto.roomId, roomStatus: "ACTIVE" },
      });

      const days = this.calculateNumberOfDays(
        createBookingDto.checkIn,
        createBookingDto.checkOut
      );
      const totalPrice = room.price * days;

      const booking = await prisma.booking.create({
        data: {
          roomId: createBookingDto.roomId,
          guestId: user!.id,
          checkIn: createBookingDto.checkIn,
          checkOut: createBookingDto.checkOut,
          totalPrice: totalPrice,
        },
        include: {
          room: true,
          guest: {
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
              createdAt: true,
              isDeleted: true,
            },
          },
        },
      });

      return booking;
    });
  }

  findAll(userId: string, query: PaginationQueryType) {
    return this.prismaService.$transaction(async (prisma) => {
      const pagination = this.prismaService.handleQueryPagination(query);
      const bookings = await prisma.booking.findMany({
        where: { guestId: userId },
        ...removeFields(pagination, ["page"]),
        include: {
          room: true,
        },
      });
      const count = await prisma.booking.count();
      return {
        data: bookings,
        ...this.prismaService.formatPaginationResponse({
          page: pagination.page,
          count,
          limit: pagination.take,
        }),
      };
    });
  }

  findOne(id: string, user: Express.Request["user"]): CreateBookingResponseDTO {
    return this.prismaService.booking.findUniqueOrThrow({
      where: { id, guestId: user!.id },

      include: {
        room: true,
        guest: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            isDeleted: true,
          },
        },
      },
    });
  }

  update(id: string, updateBookingDto: updateBookingStatus) {
    return this.prismaService.booking.update({
      where: { id },
      data: {
        status: updateBookingDto.status,
      },
    });
  }

  remove(id: string, user: Express.Request["user"]) {
    return this.prismaService.booking.update({
      where: { id, guestId: user!.id },
      data: { status: "CANCELLED" },
    });
  }

  private calculateNumberOfDays(checkIn: Date, checkOut: Date): number {
    const diffInMs = checkOut.getTime() - checkIn.getTime();
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  }
}
