import { RegisterDTO, UserResponseDTO } from "../auth/dto/auth.dto";
import { DatabaseService } from "../database/database.service";
import { User } from "generated/prisma/client";
import { PaginationQueryType, PaginationResponseType } from "src/types/util.types";
import { updateUserDTO } from "./dto/user.dto";
export declare class UserService {
    private prismaService;
    constructor(prismaService: DatabaseService);
    create(registerDTO: RegisterDTO): import("../../../generated/prisma/models").Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        password: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(query: PaginationQueryType): Promise<PaginationResponseType<Omit<User, "password">>>;
    findByEmail(email: string): import("../../../generated/prisma/models").Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        password: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        email: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    }>;
    update(id: string, userUpdatePayload: updateUserDTO): Promise<{
        name: string;
        id: string;
        email: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    }>;
    delete(id: string): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        role: import("generated/prisma/client").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    }>;
    mapUserWithoutPassword(user: User): UserResponseDTO["userData"];
}
