import z, { ZodType } from "zod";
import { CreateBookingDto } from "../dto/booking.dto";

const dateStringSchema = (fieldName: string) =>
  z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: `Invalid ${fieldName} date format`,
    })
    .transform((date) => new Date(date));

export const createBookingDTOValidationSchema = z
  .object({
    roomId: z.string().uuid({ message: "Invalid room ID format" }),
    checkIn: dateStringSchema("check-in"),
    checkOut: dateStringSchema("check-out"),
  })
  .refine(
    (data) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return data.checkIn >= today;
    },
    {
      message: "Check-in date must be today or in the future",
      path: ["checkIn"],
    }
  )
  .refine(
    (data) => {
      return data.checkOut > data.checkIn;
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOut"],
    }
  ) satisfies ZodType<CreateBookingDto>;
