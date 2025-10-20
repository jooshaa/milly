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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = __importDefault(require("bcrypt"));
const admin_service_1 = require("../admin/admin.service");
let AuthService = class AuthService {
    adminService;
    jwtService;
    constructor(adminService, jwtService) {
        this.adminService = adminService;
        this.jwtService = jwtService;
    }
    async generateTokens(user) {
        const payload = {
            id: user._id,
            email: user.email,
            is_active: user.is_active,
            is_owner: user.is_owner,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.sign(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME
            }),
            this.jwtService.sign(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME
            })
        ]);
        return { accessToken, refreshToken };
    }
    async registration(createAdminDto) {
        const candidate = await this.adminService.findAdminByEmail(createAdminDto.email);
        if (candidate) {
            throw new common_1.ConflictException("bunday foydallunvchi mavjud");
        }
        const newUser = this.adminService.create(createAdminDto);
        return newUser;
    }
    async login(loginDto, res) {
        const user = await this.adminService.findAdminByEmail(loginDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException("email yoki parol notugri");
        }
        const verifyPassword = await bcrypt_1.default.compare(loginDto.password, user.password);
        if (!verifyPassword) {
            throw new common_1.UnauthorizedException("email yoki parol notugri");
        }
        const { accessToken, refreshToken } = await this.generateTokens(user);
        const hashedRefreshToken = await bcrypt_1.default.hash(refreshToken, 7);
        user.refresh_token = hashedRefreshToken;
        await user.save();
        res.cookie("refreshToken", refreshToken, {
            maxAge: Number(process.env.COOKIE_TIME),
            httpOnly: true
        });
        return {
            message: "user logged in",
            id: user.id,
            accessToken,
        };
    }
    async logout(refreshToken, res) {
        const userData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!userData) {
            throw new common_1.ForbiddenException("user not verified ");
        }
        const user = await this.usersService.findOne(userData.id);
        if (!user) {
            throw new common_1.BadRequestException("wrong token");
        }
        user.ref_token = "";
        await user.save();
        res.clearCookie("refreshToken");
        return {
            message: "user logged out "
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map