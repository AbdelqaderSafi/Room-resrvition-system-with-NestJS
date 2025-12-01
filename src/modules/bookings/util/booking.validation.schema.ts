import z, { ZodType } from "zod";
// import { CreateOrderDTO, CreateOrderReturnDTO } from "../types/order.dto";
import { CreateBookingDto } from "../dto/booking.dto";

export const createBookingDTOValidationSchema = z
  .object({
    roomId: z.string().uuid(),
    checkIn: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      })
      .refine(
        (date) => {
          const checkInDate = new Date(date);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return checkInDate >= today;
        },
        {
          message: "Check-in date must be today or in the future",
        }
      )
      .transform((date) => new Date(date)),
    checkOut: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      })
      .refine(
        (date) => {
          const checkOutDate = new Date(date);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return checkOutDate >= today;
        },
        {
          message: "Check-out date must be today or in the future",
        }
      )
      .transform((date) => new Date(date)),
  })
  .refine(
    (data) => {
      return new Date(data.checkOut) > new Date(data.checkIn);
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOut"],
    }
  ) satisfies ZodType<CreateBookingDto>;
