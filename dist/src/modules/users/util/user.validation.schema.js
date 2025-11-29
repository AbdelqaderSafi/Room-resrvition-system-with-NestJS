"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.validationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.validationSchema = zod_1.default.object({
    name: zod_1.default.string().min(2).max(100),
    email: zod_1.default.email().toLowerCase(),
    password: zod_1.default.string().min(6).max(100),
    role: zod_1.default.enum(["ADMIN", "OWNER", "GUEST"]),
});
exports.updateUserSchema = exports.validationSchema
    .pick({
    name: true,
    email: true,
})
    .partial();
//# sourceMappingURL=user.validation.schema.js.map