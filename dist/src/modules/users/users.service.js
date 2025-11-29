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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const object_util_1 = require("../../utils/object.util");
let UserService = class UserService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(registerDTO) {
        return this.prismaService.user.create({
            data: registerDTO,
        });
    }
    findAll(query) {
        return this.prismaService.$transaction(async (prisma) => {
            const pagination = this.prismaService.handleQueryPagination(query);
            const users = await prisma.user.findMany({
                ...(0, object_util_1.removeFields)(pagination, ["page"]),
                omit: {
                    password: true,
                },
            });
            const count = await prisma.user.count();
            return {
                data: users,
                ...this.prismaService.formatPaginationResponse({
                    page: pagination.page,
                    count,
                    limit: pagination.take,
                }),
            };
        });
    }
    findByEmail(email) {
        return this.prismaService.user.findUnique({
            where: { email },
        });
    }
    findOne(id) {
        return this.prismaService.user.findUnique({
            where: { id },
            omit: { password: true },
        });
    }
    update(id, userUpdatePayload) {
        {
            return this.prismaService.user.update({
                where: { id },
                data: userUpdatePayload,
                omit: {
                    password: true,
                },
            });
        }
    }
    delete(id) {
        return this.prismaService.user.update({
            where: { id },
            data: { isDeleted: true },
        });
    }
    mapUserWithoutPassword(user) {
        const userWithoutPassword = (0, object_util_1.removeFields)(user, ["password"]);
        return {
            ...userWithoutPassword,
            id: userWithoutPassword.id,
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserService);
//# sourceMappingURL=users.service.js.map