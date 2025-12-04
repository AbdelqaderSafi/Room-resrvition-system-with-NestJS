"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
class ZodValidationPipe {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, metadata) {
        try {
            const parsedValue = this.schema.parse(value);
            return parsedValue;
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                const errorsByField = new Map();
                for (const err of error.issues) {
                    const field = err.path.join(".");
                    if (!errorsByField.has(field)) {
                        errorsByField.set(field, {
                            field,
                            message: err.message,
                            code: err.code,
                        });
                    }
                }
                const formattedErrors = Array.from(errorsByField.values());
                throw new common_1.BadRequestException({
                    message: "Validation failed",
                    errors: formattedErrors,
                });
            }
            throw error;
        }
    }
}
exports.ZodValidationPipe = ZodValidationPipe;
//# sourceMappingURL=zod.validation.pipe.js.map