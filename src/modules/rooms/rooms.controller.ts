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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
  ApiBody,
} from "@nestjs/swagger";

@ApiTags("Rooms")
@ApiBearerAuth("JWT-auth")
@Controller("rooms")
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Roles(["OWNER"])
  @Post()
  @ApiOperation({ summary: "Create a new room (OWNER only)" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        name: { type: "string", example: "Deluxe Suite" },
        capacity: { type: "number", example: 4 },
        price: { type: "number", example: 150.5 },
        roomStatus: {
          type: "string",
          enum: ["AVAILABLE", "BOOKED", "MAINTENANCE"],
          example: "AVAILABLE",
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: "Room created successfully" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @ApiResponse({ status: 403, description: "Forbidden - OWNER role required" })
  create(
    @Body(new ZodValidationPipe(roomValidationSchema))
    createRoomDto: CreateRoomDto,
    @User() user: UserResponseDTO["userData"]
  ): Promise<RoomResponseDTO> {
    return this.roomsService.create(createRoomDto, user);
  }

  // @Roles(["ADMIN", "GUEST",])
  @Get()
  @ApiOperation({ summary: "Get all rooms" })
  @ApiResponse({ status: 200, description: "Return all rooms" })
  @ApiQuery({ name: "page", required: false, type: Number })
  @ApiQuery({ name: "limit", required: false, type: Number })
  @ApiQuery({ name: "minCapacity", required: false, type: Number })
  @ApiQuery({ name: "maxCapacity", required: false, type: Number })
  @ApiQuery({ name: "minPrice", required: false, type: Number })
  @ApiQuery({ name: "maxPrice", required: false, type: Number })
  findAll(
    @Query(new ZodValidationPipe(roomPaginationSchema)) query: RoomQuery
  ) {
    return this.roomsService.findAll(query);
  }

  @Get(":id")
  @ApiOperation({ summary: "Get room by id" })
  @ApiParam({ name: "id", description: "Room ID" })
  @ApiResponse({ status: 200, description: "Return room" })
  @ApiResponse({ status: 404, description: "Room not found" })
  findOne(@Param("id") id: string) {
    return this.roomsService.findOne(id);
  }

  @Roles(["OWNER"])
  @Patch(":id")
  @ApiOperation({ summary: "Update room (OWNER only)" })
  @ApiParam({
    name: "id",
    description: "Room ID",
    example: "cm456xyz789abc123",
  })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        name: { type: "string", example: "Presidential Suite" },
        capacity: { type: "number", example: 6 },
        price: { type: "number", example: 250.0 },
        roomStatus: {
          type: "string",
          enum: ["AVAILABLE", "BOOKED", "MAINTENANCE"],
          example: "MAINTENANCE",
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: "Room updated successfully" })
  @ApiResponse({ status: 403, description: "Forbidden - OWNER role required" })
  @ApiResponse({ status: 404, description: "Room not found" })
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
  @ApiOperation({ summary: "Delete room (OWNER/ADMIN only)" })
  @ApiParam({ name: "id", description: "Room ID" })
  @ApiResponse({ status: 200, description: "Room deleted successfully" })
  @ApiResponse({
    status: 403,
    description: "Forbidden - OWNER/ADMIN role required",
  })
  @ApiResponse({ status: 404, description: "Room not found" })
  remove(@Param("id") id: string, @User() user: UserResponseDTO["userData"]) {
    return this.roomsService.remove(id, user);
  }
}
