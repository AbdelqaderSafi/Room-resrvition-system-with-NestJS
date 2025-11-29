import { RegisterDTO } from "src/modules/auth/dto/auth.dto";
import z, { ZodType } from "zod";
import { updateUserDTO } from "../dto/user.dto";

export const validationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email().toLowerCase(),
  password: z.string().min(6).max(100),
  role: z.enum(["ADMIN", "OWNER", "GUEST"]),
}) satisfies ZodType<RegisterDTO>;

export const updateUserSchema = validationSchema
  .pick({
    name: true,
    email: true,
  })
  .partial() satisfies ZodType<updateUserDTO>;
