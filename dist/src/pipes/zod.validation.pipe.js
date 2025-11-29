"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationPipe = void 0;
class ZodValidationPipe {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, metadata) {
        const parsedValue = this.schema.parse(value);
        console.log(metadata, "metadata");
        console.log(parsedValue, "parsed value");
        return parsedValue;
    }
}
exports.ZodValidationPipe = ZodValidationPipe;
//# sourceMappingURL=zod.validation.pipe.js.map