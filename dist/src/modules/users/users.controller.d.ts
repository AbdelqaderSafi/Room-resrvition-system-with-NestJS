import { UserService } from "./users.service";
import type { PaginationQueryType } from "src/types/util.types";
import type { updateUserDTO } from "./dto/user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(query: PaginationQueryType): Promise<import("src/types/util.types").PaginationResponseType<Omit<{
        name: string;
        id: string;
        email: string;
        password: string;
        role: import("../../../generated/prisma/enums").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    }, "password">>>;
    findOne(id: string): import("../../../generated/prisma/models").Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        role: import("../../../generated/prisma/enums").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, userUpdatePayload: updateUserDTO): import("../../../generated/prisma/models").Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        role: import("../../../generated/prisma/enums").User_Role;
        createdAt: Date;
        isDeleted: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    delete(id: string): Promise<boolean>;
}
