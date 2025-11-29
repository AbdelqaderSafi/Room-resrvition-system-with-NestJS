import { User_Role } from "generated/prisma/enums";
export type Token_Payload = {
    sub: string;
    role: User_Role;
};
