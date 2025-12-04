import { HttpException, HttpStatus } from "@nestjs/common";

export class RoomNotAvailableException extends HttpException {
  constructor(checkIn: Date, checkOut: Date) {
    super(
      {
        statusCode: HttpStatus.CONFLICT,
        message: "Room is not available for the selected dates",
        error: "Room Not Available",
        details: {
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
        },
      },
      HttpStatus.CONFLICT
    );
  }
}

export class UnauthorizedAccessException extends HttpException {
  constructor(resource: string) {
    super(
      {
        statusCode: HttpStatus.FORBIDDEN,
        message: `You are not authorized to access this ${resource}`,
        error: "Forbidden",
      },
      HttpStatus.FORBIDDEN
    );
  }
}

export class ResourceNotFoundException extends HttpException {
  constructor(resource: string, id?: string) {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        message: id
          ? `${resource} with id ${id} not found`
          : `${resource} not found`,
        error: "Not Found",
      },
      HttpStatus.NOT_FOUND
    );
  }
}

export class DuplicateResourceException extends HttpException {
  constructor(resource: string, field: string) {
    super(
      {
        statusCode: HttpStatus.CONFLICT,
        message: `${resource} with this ${field} already exists`,
        error: "Duplicate Resource",
      },
      HttpStatus.CONFLICT
    );
  }
}

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.UNAUTHORIZED,
        message: "Invalid credentials",
        error: "Unauthorized",
      },
      HttpStatus.UNAUTHORIZED
    );
  }
}
