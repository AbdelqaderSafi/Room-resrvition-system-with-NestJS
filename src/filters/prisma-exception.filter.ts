import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";
import { Prisma } from "generated/prisma/client";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal server error";

    switch (exception.code) {
      case "P2002":
        // Unique constraint violation
        status = HttpStatus.CONFLICT;
        const target = (exception.meta?.target as string[]) || [];
        message = `Duplicate entry: ${target.join(", ")} already exists`;
        break;
      case "P2025":
        // Record not found
        status = HttpStatus.NOT_FOUND;
        message = "Record not found";
        break;
      case "P2003":
        // Foreign key constraint violation
        status = HttpStatus.BAD_REQUEST;
        message = "Foreign key constraint failed";
        break;
      case "P2014":
        // Required relation violation
        status = HttpStatus.BAD_REQUEST;
        message = "Required relation is missing";
        break;
      case "P2000":
        // Value too long
        status = HttpStatus.BAD_REQUEST;
        message = "Input value is too long";
        break;
      case "P2001":
        // Record does not exist
        status = HttpStatus.NOT_FOUND;
        message = "Record does not exist";
        break;
      default:
        message = exception.message;
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message,
      code: exception.code,
    };

    response.status(status).json(errorResponse);
  }
}
