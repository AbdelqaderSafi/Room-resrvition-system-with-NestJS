import { Controller, Get, Post, Body, Req, UsePipes } from "@nestjs/common";
import type { Request } from "express";
import { AuthService } from "./auth.service";
import type { LoginDTO, RegisterDTO, UserResponseDTO } from "./dto/auth.dto";
import { registerValidationSchema } from "./util/auth.validation.schema";
import { ZodValidationPipe } from "src/pipes/zod.validation.pipe";
import { IsPublic } from "src/decorators/public.decorator";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
} from "@nestjs/swagger";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @IsPublic()
  @ApiOperation({ summary: "Register a new user" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        name: { type: "string", example: "John Doe" },
        email: { type: "string", example: "john@example.com" },
        password: { type: "string", example: "StrongPass123!" },
        role: {
          type: "string",
          enum: ["GUEST", "OWNER", "ADMIN"],
          example: "GUEST",
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: "User successfully registered" })
  @ApiResponse({ status: 400, description: "Bad request" })
  async create(
    @Body(new ZodValidationPipe(registerValidationSchema))
    registerDTO: RegisterDTO
  ): Promise<UserResponseDTO> {
    const createdUser = await this.authService.register(registerDTO);
    return createdUser;
  }

  @Post("login")
  @IsPublic()
  @ApiOperation({ summary: "Login user" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        email: { type: "string", example: "john@example.com" },
        password: { type: "string", example: "StrongPass123!" },
      },
    },
  })
  @ApiResponse({ status: 200, description: "User successfully logged in" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  login(@Body() loginDTO: LoginDTO): Promise<UserResponseDTO> {
    return this.authService.login(loginDTO);
  }

  @Get()
  @ApiBearerAuth("JWT-auth")
  @ApiOperation({ summary: "Validate current user token" })
  @ApiResponse({ status: 200, description: "Token is valid" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  validate(@Req() request: Request): UserResponseDTO {
    return this.authService.validate(request.user!);
  }
}
