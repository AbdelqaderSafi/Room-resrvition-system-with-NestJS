import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let errorResponse: any = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    };

    if (typeof exceptionResponse === "object" && exceptionResponse !== null) {
      const responseObj = exceptionResponse as any;

      // Handle validation errors with better formatting
      if (responseObj.errors && Array.isArray(responseObj.errors)) {
        errorResponse = {
          ...errorResponse,
          message: responseObj.message || "Validation failed",
          errors: responseObj.errors,
        };
      } else {
        errorResponse = {
          ...errorResponse,
          message: responseObj.message || exception.message,
          ...(responseObj.error && { error: responseObj.error }),
          ...(responseObj.details && { details: responseObj.details }),
        };
      }
    } else {
      errorResponse.message =
        typeof exceptionResponse === "string"
          ? exceptionResponse
          : exception.message;
    }

    response.status(status).json(errorResponse);
  }
}
