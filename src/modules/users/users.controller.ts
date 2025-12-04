import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  Query,
  Body,
  ParseIntPipe,
} from "@nestjs/common";
import { UserService } from "./users.service";
import type { PaginationQueryType } from "src/types/util.types";
import type { updateUserDTO } from "./dto/user.dto";
import { ZodValidationPipe } from "src/pipes/zod.validation.pipe";
import { updateUserSchema } from "./util/user.validation.schema";
import { paginationSchema } from "src/utils/api.util";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
  ApiBody,
} from "@nestjs/swagger";

@ApiTags("Users")
@ApiBearerAuth("JWT-auth")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, description: "Return all users" })
  @ApiQuery({ name: "page", required: false, type: Number })
  @ApiQuery({ name: "limit", required: false, type: Number })
  findAll(
    @Query(new ZodValidationPipe(paginationSchema))
    query: PaginationQueryType
  ) {
    return this.userService.findAll(query);
  }

  @Get(":id")
  @ApiOperation({ summary: "Get user by id" })
  @ApiParam({ name: "id", description: "User ID" })
  @ApiResponse({ status: 200, description: "Return user" })
  @ApiResponse({ status: 404, description: "User not found" })
  findOne(@Param("id") id: string) {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update user" })
  @ApiParam({
    name: "id",
    description: "User ID",
    example: "cm123abc456def789",
  })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        name: { type: "string", example: "Jane Smith" },
        email: { type: "string", example: "jane.smith@example.com" },
      },
    },
  })
  @ApiResponse({ status: 200, description: "User updated successfully" })
  @ApiResponse({ status: 404, description: "User not found" })
  update(
    @Param("id") id: string,
    @Body(new ZodValidationPipe(updateUserSchema))
    userUpdatePayload: updateUserDTO
  ) {
    return this.userService.update(id, userUpdatePayload);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete user" })
  @ApiParam({ name: "id", description: "User ID" })
  @ApiResponse({ status: 200, description: "User deleted successfully" })
  @ApiResponse({ status: 404, description: "User not found" })
  async delete(@Param("id") id: string) {
    const removedUser = await this.userService.delete(id);
    return Boolean(removedUser);
  }
}
