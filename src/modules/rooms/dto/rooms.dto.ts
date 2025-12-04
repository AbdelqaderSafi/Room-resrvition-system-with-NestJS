import { Prisma, Room, User } from "generated/prisma/client";

export type CreateRoomDto = Pick<
  Room,
  "name" | "capacity" | "price" | "roomStatus"
>;
export type UpdateRoomDto = Partial<CreateRoomDto>;

export type RoomResponseDTO = Omit<Room, "createdAt">;

export type RoomResponseDTOtoOwner = Prisma.RoomGetPayload<{
  include: { bookings: true };
}>;
