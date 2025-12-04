import {
  Booking,
  Prisma,
  Room_Status,
  User_Role,
} from "generated/prisma/client";

export type CreateBookingDto = {
  roomId: string;
  checkIn: Date;
  checkOut: Date;
};

export type CreateBookingResponseDTO = Promise<{
  room: {
    name: string;
    id: string;
    createdAt: Date;
    ownerId: string;
    capacity: number;
    roomStatus: Room_Status;
    price: number;
  };
  guest: Omit<
    {
      name: string;
      id: string;
      createdAt: Date;
      email: string;
      password: string;
      role: User_Role;
      isDeleted: boolean;
    },
    "password"
  >;
  // ...other booking fields
}>;

export type updateBookingStatus = Pick<Booking, "status">;
