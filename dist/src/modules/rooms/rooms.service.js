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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const object_util_1 = require("../../utils/object.util");
let RoomsService = class RoomsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createRoomDto, user) {
        const dataPayload = {
            ...createRoomDto,
            ownerId: user.id,
        };
        return this.prismaService.room.create({ data: dataPayload });
    }
    findAll(query) {
        return this.prismaService.$transaction(async (prisma) => {
            const whereClause = {};
            if (query.name) {
                whereClause.name = { contains: query.name };
            }
            if (query.minPrice || query.maxPrice) {
                whereClause.price = {
                    gte: query.minPrice,
                    lte: query.maxPrice,
                };
            }
            if (query.capacity) {
                whereClause.capacity = {
                    gte: query.capacity,
                };
            }
            const pagination = this.prismaService.handleQueryPagination(query);
            const rooms = await prisma.room.findMany({
                ...(0, object_util_1.removeFields)(pagination, ["page"]),
                where: whereClause,
            });
            const count = await prisma.room.count({
                where: whereClause,
            });
            return {
                data: rooms,
                ...this.prismaService.formatPaginationResponse({
                    page: pagination.page,
                    count,
                    limit: pagination.take,
                }),
            };
        });
    }
    findOne(id) {
        return this.prismaService.room.findUnique({
            where: { id },
            include: { bookings: true },
        });
    }
    async update(id, updateRoomDto, user) {
        const dataPayload = {
            ...updateRoomDto,
        };
        return this.prismaService.room.update({
            where: { id, ownerId: user.id },
            data: dataPayload,
        });
    }
    async remove(id, user) {
        const room = await this.prismaService.room.findUniqueOrThrow({
            where: { id },
        });
        if (room.ownerId !== user.id && user.role !== "ADMIN") {
            throw new Error("You are not authorized to delete this room");
        }
        return this.prismaService.room.update({
            where: { id },
            data: { roomStatus: "DELETED" },
        });
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], RoomsService);
//# sourceMappingURL=rooms.service.js.map