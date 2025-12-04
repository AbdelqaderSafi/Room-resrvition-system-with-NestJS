import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { BookingsService } from "./bookings.service";
import {
  CreateBookingDto,
  CreateBookingResponseDTO,
  updateBookingStatus,
} from "./dto/booking.dto";
import { ZodValidationPipe } from "src/pipes/zod.validation.pipe";
import { createBookingDTOValidationSchema } from "./util/booking.validation.schema";
import { Roles } from "src/decorators/roles.decorator";
import { User } from "src/decorators/user.decorator";
import { UserResponseDTO } from "../auth/dto/auth.dto";
import { paginationSchema } from "src/utils/api.util";
import { PaginationQueryType } from "src/types/util.types";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
  ApiBody,
} from "@nestjs/swagger";
// import { UpdateBookingDto } from "./dto/update-booking.dto";

@ApiTags("Bookings")
@ApiBearerAuth("JWT-auth")
@Controller("bookings")
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Roles(["GUEST"])
  @Post()
  @ApiOperation({ summary: "Create a new booking (GUEST only)" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        roomId: { type: "string", example: "cm456xyz789abc123" },
        checkIn: {
          type: "string",
          format: "date-time",
          example: "2025-12-10T14:00:00Z",
        },
        checkOut: {
          type: "string",
          format: "date-time",
          example: "2025-12-15T11:00:00Z",
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: "Booking created successfully" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @ApiResponse({ status: 403, description: "Forbidden - GUEST role required" })
  create(
    @Body(new ZodValidationPipe(createBookingDTOValidationSchema))
    createBookingDto: CreateBookingDto,
    @User() user: UserResponseDTO["userData"]
  ): CreateBookingResponseDTO {
    return this.bookingsService.create(createBookingDto, user);
  }

  @Get()
  @ApiOperation({ summary: "Get all bookings for current user" })
  @ApiResponse({ status: 200, description: "Return all bookings" })
  @ApiQuery({ name: "page", required: false, type: Number })
  @ApiQuery({ name: "limit", required: false, type: Number })
  findAll(
    @User() user: UserResponseDTO["userData"],
    @Query(new ZodValidationPipe(paginationSchema)) query: PaginationQueryType
  ) {
    return this.bookingsService.findAll(user.id, query);
  }
  @Roles(["GUEST"])
  @Get(":id")
  @ApiOperation({ summary: "Get booking by id (GUEST only)" })
  @ApiParam({ name: "id", description: "Booking ID" })
  @ApiResponse({ status: 200, description: "Return booking" })
  @ApiResponse({ status: 403, description: "Forbidden - GUEST role required" })
  @ApiResponse({ status: 404, description: "Booking not found" })
  findOne(
    @Param("id") id: string,
    @User() user: UserResponseDTO["userData"]
  ): CreateBookingResponseDTO {
    return this.bookingsService.findOne(id, user);
  }

  @Roles(["ADMIN"])
  @Patch(":id")
  @ApiOperation({ summary: "Update booking status (ADMIN only)" })
  @ApiParam({
    name: "id",
    description: "Booking ID",
    example: "cm789bkn456xyz123",
  })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        status: {
          type: "string",
          enum: ["PENDING", "CONFIRMED", "CANCELLED"],
          example: "CONFIRMED",
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: "Booking updated successfully" })
  @ApiResponse({ status: 403, description: "Forbidden - ADMIN role required" })
  @ApiResponse({ status: 404, description: "Booking not found" })
  update(
    @Param("id") id: string,
    @Body() updateBookingDto: updateBookingStatus
  ) {
    return this.bookingsService.update(id, updateBookingDto);
  }

  @Roles(["GUEST"])
  @Delete(":id")
  @ApiOperation({ summary: "Delete booking (GUEST only)" })
  @ApiParam({ name: "id", description: "Booking ID" })
  @ApiResponse({ status: 200, description: "Booking deleted successfully" })
  @ApiResponse({ status: 403, description: "Forbidden - GUEST role required" })
  @ApiResponse({ status: 404, description: "Booking not found" })
  delete(@Param("id") id: string, @User() user: UserResponseDTO["userData"]) {
    return this.bookingsService.remove(id, user);
  }
}
