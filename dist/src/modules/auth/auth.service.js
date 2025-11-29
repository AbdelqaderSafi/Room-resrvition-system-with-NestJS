"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = __importStar(require("argon2"));
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    userService;
    jwtService;
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(registerDTO) {
        const hashedPassword = await this.hashPassword(registerDTO.password);
        const createdUser = await this.userService.create({
            ...registerDTO,
            password: hashedPassword,
        });
        const token = this.generateJwtToken(createdUser.id, createdUser.role);
        return {
            userData: this.userService.mapUserWithoutPassword(createdUser),
            token,
        };
    }
    async login(loginDto) {
        const foundUser = await this.userService.findByEmail(loginDto.email);
        if (!foundUser) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        if (foundUser.isDeleted) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        const isPasswordValid = await this.verifyPassword(loginDto.password, foundUser.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        const token = this.generateJwtToken(foundUser.id, foundUser.role);
        return {
            userData: this.userService.mapUserWithoutPassword(foundUser),
            token,
        };
    }
    validate(userPayload) {
        const token = this.generateJwtToken(userPayload.id, userPayload.role);
        return {
            userData: userPayload,
            token,
        };
    }
    hashPassword(password) {
        return argon.hash(password);
    }
    verifyPassword(password, hashedPassword) {
        return argon.verify(hashedPassword, password);
    }
    generateJwtToken(userId, role) {
        return this.jwtService.sign({ sub: userId, role }, { expiresIn: "30d" });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map