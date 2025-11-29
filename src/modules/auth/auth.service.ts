import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDTO, RegisterDTO, UserResponseDTO } from "./dto/auth.dto";
import * as argon from "argon2";
import { UserService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User_Role } from "generated/prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async register(registerDTO: RegisterDTO): Promise<UserResponseDTO> {
    const hashedPassword = await this.hashPassword(registerDTO.password);
    const createdUser = await this.userService.create({
      ...registerDTO,
      password: hashedPassword,
    });
    const token = this.generateJwtToken(createdUser.id, createdUser.role);
    return {
      userData: this.userService.mapUserWithoutPassword(createdUser),
      token,
    };
  }

  async login(loginDto: LoginDTO): Promise<UserResponseDTO> {
    const foundUser = await this.userService.findByEmail(loginDto.email);
    if (!foundUser) {
      throw new UnauthorizedException("Invalid credentials");
    }

    if (foundUser.isDeleted) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isPasswordValid = await this.verifyPassword(
      loginDto.password,
      foundUser.password
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const token = this.generateJwtToken(foundUser.id, foundUser.role);
    return {
      userData: this.userService.mapUserWithoutPassword(foundUser),
      token,
    };
  }

  validate(userPayload: UserResponseDTO["userData"]) {
    const token = this.generateJwtToken(userPayload.id, userPayload.role);
    return {
      userData: userPayload,
      token,
    };
  }

  private hashPassword(password: string) {
    return argon.hash(password);
  }

  private verifyPassword(password: string, hashedPassword: string) {
    return argon.verify(hashedPassword, password);
  }

  private generateJwtToken(userId: string, role: User_Role) {
    return this.jwtService.sign({ sub: userId, role }, { expiresIn: "30d" });
  }
}
