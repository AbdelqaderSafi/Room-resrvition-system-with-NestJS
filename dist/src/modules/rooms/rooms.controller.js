"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsController = void 0;
const common_1 = require("@nestjs/common");
const rooms_service_1 = require("./rooms.service");
const zod_validation_pipe_1 = require("../../pipes/zod.validation.pipe");
const room_validation_1 = require("./util/room.validation");
const user_decorator_1 = require("../../decorators/user.decorator");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
let RoomsController = class RoomsController {
    roomsService;
    constructor(roomsService) {
        this.roomsService = roomsService;
    }
    create(createRoomDto, user) {
        return this.roomsService.create(createRoomDto, user);
    }
    findAll(query) {
        return this.roomsService.findAll(query);
    }
    findOne(id) {
        return this.roomsService.findOne(id);
    }
    update(id, updatePayload, user) {
        return this.roomsService.update(id, updatePayload, user);
    }
    remove(id, user) {
        return this.roomsService.remove(id, user);
    }
};
exports.RoomsController = RoomsController;
__decorate([
    (0, roles_decorator_1.Roles)(["OWNER"]),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new room (OWNER only)" }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                name: { type: "string", example: "Deluxe Suite" },
                capacity: { type: "number", example: 4 },
                price: { type: "number", example: 150.5 },
                roomStatus: {
                    type: "string",
                    enum: ["AVAILABLE", "BOOKED", "MAINTENANCE"],
                    example: "AVAILABLE",
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Room created successfully" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Bad request" }),
    (0, swagger_1.ApiResponse)({ status: 403, description: "Forbidden - OWNER role required" }),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(room_validation_1.roomValidationSchema))),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all rooms" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Return all rooms" }),
    (0, swagger_1.ApiQuery)({ name: "page", required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: "limit", required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: "minCapacity", required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: "maxCapacity", required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: "minPrice", required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: "maxPrice", required: false, type: Number }),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(room_validation_1.roomPaginationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Get room by id" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Room ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Return room" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Room not found" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)(["OWNER"]),
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Update room (OWNER only)" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "Room ID",
        example: "cm456xyz789abc123",
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                name: { type: "string", example: "Presidential Suite" },
                capacity: { type: "number", example: 6 },
                price: { type: "number", example: 250.0 },
                roomStatus: {
                    type: "string",
                    enum: ["AVAILABLE", "BOOKED", "MAINTENANCE"],
                    example: "MAINTENANCE",
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Room updated successfully" }),
    (0, swagger_1.ApiResponse)({ status: 403, description: "Forbidden - OWNER role required" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Room not found" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(room_validation_1.updateRoomValidationSchema))),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(["OWNER", "ADMIN"]),
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete room (OWNER/ADMIN only)" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Room ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Room deleted successfully" }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: "Forbidden - OWNER/ADMIN role required",
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Room not found" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "remove", null);
exports.RoomsController = RoomsController = __decorate([
    (0, swagger_1.ApiTags)("Rooms"),
    (0, swagger_1.ApiBearerAuth)("JWT-auth"),
    (0, common_1.Controller)("rooms"),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService])
], RoomsController);
//# sourceMappingURL=rooms.controller.js.map