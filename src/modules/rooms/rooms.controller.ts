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
import { RoomsService } from "./rooms.service";
import { CreateRoomDto, RoomResponseDTO, UpdateRoomDto } from "./dto/rooms.dto";
import { ZodValidationPipe } from "src/pipes/zod.validation.pipe";
import {
  roomPaginationSchema,
  roomValidationSchema,
  updateRoomValidationSchema,
} from "./util/room.validation";
import { User } from "src/decorators/user.decorator";
import { UserResponseDTO } from "../auth/dto/auth.dto";
import { Roles } from "src/decorators/roles.decorator";
import { RoomQuery } from "./types/room.types";

@Controller("rooms")
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Roles(["OWNER"])
  @Post()
  create(
    @Body(new ZodValidationPipe(roomValidationSchema))
    createRoomDto: CreateRoomDto,
    @User() user: UserResponseDTO["userData"]
  ): Promise<RoomResponseDTO> {
    return this.roomsService.create(createRoomDto, user);
  }

  @Roles(["ADMIN", "GUEST"])
  @Get()
  findAll(
    @Query(new ZodValidationPipe(roomPaginationSchema)) query: RoomQuery
  ) {
    return this.roomsService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.roomsService.findOne(id);
  }

  @Roles(["OWNER"])
  @Patch(":id")
  update(
    @Param("id") id: string,

    @Body(new ZodValidationPipe(updateRoomValidationSchema))
    updatePayload: UpdateRoomDto,
    @User()
    user: UserResponseDTO["userData"]
  ): Promise<RoomResponseDTO> {
    return this.roomsService.update(id, updatePayload, user);
  }
  @Roles(["OWNER", "ADMIN"])
  @Delete(":id")
  remove(@Param("id") id: string, @User() user: UserResponseDTO["userData"]) {
    return this.roomsService.remove(id, user);
  }
}
