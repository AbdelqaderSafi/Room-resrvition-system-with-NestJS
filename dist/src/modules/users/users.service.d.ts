import { RegisterDTO, UserResponseDTO } from "../auth/dto/auth.dto";
import { DatabaseService } from "../database/database.service";
import { Prisma, User } from "generated/prisma/client";
import { PaginationQueryType, PaginationResponseType } from "src/types/util.types";
import { updateUserDTO } from "./dto/user.dto";
export declare class UserService {
    private prismaService;
    constructor(prismaService: DatabaseService);
    create(registerDTO: RegisterDTO): Prisma.Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        password: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    findAll(query: PaginationQueryType): Promise<PaginationResponseType<Omit<User, "password">>>;
    findByEmail(email: string): Prisma.Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        password: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    findOne(id: string): Prisma.Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(id: string, userUpdatePayload: updateUserDTO): Prisma.Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    delete(id: string): Prisma.Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        password: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    mapUserWithoutPassword(user: User): UserResponseDTO["userData"];
}
