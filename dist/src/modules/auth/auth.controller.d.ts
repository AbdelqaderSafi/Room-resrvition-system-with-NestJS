import type { Request } from "express";
import { AuthService } from "./auth.service";
import type { LoginDTO, RegisterDTO, UserResponseDTO } from "./dto/auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(registerDTO: RegisterDTO): Promise<UserResponseDTO>;
    login(loginDTO: LoginDTO): Promise<UserResponseDTO>;
    validate(request: Request): UserResponseDTO;
}
