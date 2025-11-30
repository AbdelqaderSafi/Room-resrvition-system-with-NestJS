import { Reflector } from "@nestjs/core";
import { User_Role } from "generated/prisma/enums";

export const Roles = Reflector.createDecorator<User_Role[]>();
