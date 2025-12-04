import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";
import { ZodType, ZodError } from "zod";

export class ZodValidationPipe<T> implements PipeTransform {
  constructor(private schema: ZodType<T>) {}

  transform(value: T, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        // Group errors by field to avoid duplicates
        const errorsByField = new Map<string, any>();
        
        for (const err of error.issues) {
          const field = err.path.join(".");
          // Only keep the first error for each field
          if (!errorsByField.has(field)) {
            errorsByField.set(field, {
              field,
              message: err.message,
              code: err.code,
            });
          }
        }

        const formattedErrors = Array.from(errorsByField.values());

        throw new BadRequestException({
          message: "Validation failed",
          errors: formattedErrors,
        });
      }
      throw error;
    }
  }
}
