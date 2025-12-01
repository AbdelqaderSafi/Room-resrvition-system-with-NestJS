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
// import { UpdateBookingDto } from "./dto/update-booking.dto";

@Controller("bookings")
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Roles(["GUEST"])
  @Post()
  create(
    @Body(new ZodValidationPipe(createBookingDTOValidationSchema))
    createBookingDto: CreateBookingDto,
    @User() user: UserResponseDTO["userData"]
  ): CreateBookingResponseDTO {
    return this.bookingsService.create(createBookingDto, user);
  }

  @Get()
  findAll(
    @User() user: UserResponseDTO["userData"],
    @Query(new ZodValidationPipe(paginationSchema)) query: PaginationQueryType
  ) {
    return this.bookingsService.findAll(user.id, query);
  }
  @Roles(["GUEST"])
  @Get(":id")
  findOne(
    @Param("id") id: string,
    @User() user: UserResponseDTO["userData"]
  ): CreateBookingResponseDTO {
    return this.bookingsService.findOne(id, user);
  }

  @Roles(["ADMIN"])
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBookingDto: updateBookingStatus
  ) {
    return this.bookingsService.update(id, updateBookingDto);
  }

  @Roles(["GUEST"])
  @Delete(":id")
  delete(@Param("id") id: string, @User() user: UserResponseDTO["userData"]) {
    return this.bookingsService.remove(id, user);
  }
}
