import { LoginDTO, RegisterDTO, UserResponseDTO } from "./dto/auth.dto";
import { UserService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User_Role } from "generated/prisma/client";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(registerDTO: RegisterDTO): Promise<UserResponseDTO>;
    login(loginDto: LoginDTO): Promise<UserResponseDTO>;
    validate(userPayload: UserResponseDTO["userData"]): {
        userData: Omit<{
            name: string;
            id: string;
            email: string;
            password: string;
            role: User_Role;
            createdAt: Date;
            isDeleted: boolean;
        }, "password">;
        token: string;
    };
    private hashPassword;
    private verifyPassword;
    private generateJwtToken;
}
