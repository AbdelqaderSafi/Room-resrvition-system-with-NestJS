import { z, ZodType } from "zod";
import { CreateRoomDto, UpdateRoomDto } from "../dto/rooms.dto";
import { RoomQuery } from "../types/room.types";
import { paginationSchema } from "src/utils/api.util";

export const roomValidationSchema = z.object({
  name: z.string().min(2).max(100),
  capacity: z.coerce.number().min(1).max(50),
  roomStatus: z.enum(["ACTIVE", "MAINTENANCE", "DELETED"]),
  price: z.coerce.number().min(0),
}) satisfies ZodType<CreateRoomDto>;

export const updateRoomValidationSchema =
  roomValidationSchema.partial() satisfies ZodType<Partial<UpdateRoomDto>>;

export const roomPaginationSchema = paginationSchema.extend({
  name: z.string().min(1).max(255).optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  capacity: z.coerce.number().min(1).max(50).optional(),
}) satisfies ZodType<RoomQuery>;
