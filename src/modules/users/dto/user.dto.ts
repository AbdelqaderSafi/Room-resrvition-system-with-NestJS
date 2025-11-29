import { User } from "generated/prisma/client";

export type updateUserDTO = Partial<Pick<User, "name" | "email">>;
