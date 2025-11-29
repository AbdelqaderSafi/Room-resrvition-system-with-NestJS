"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidationSchema = exports.registerValidationSchema = void 0;
const user_validation_schema_1 = require("../../users/util/user.validation.schema");
exports.registerValidationSchema = user_validation_schema_1.validationSchema;
exports.loginValidationSchema = user_validation_schema_1.validationSchema.pick({
    email: true,
    password: true,
});
//# sourceMappingURL=auth.validation.schema.js.map