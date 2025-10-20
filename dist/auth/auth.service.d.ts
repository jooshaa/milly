import { JwtService } from '@nestjs/jwt';
import type { Response } from 'express';
import { AdminService } from '../admin/admin.service';
import { Admin } from '../admin/schema/admin.schema';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { loginUserDto } from '../admin/dto/login-dto';
export declare class AuthService {
    private readonly adminService;
    private readonly jwtService;
    constructor(adminService: AdminService, jwtService: JwtService);
    private generateTokens;
    registration(createAdminDto: CreateAdminDto): Promise<import("mongoose").Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    login(loginDto: loginUserDto, res: Response): Promise<{
        message: string;
        id: any;
        accessToken: string;
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
}
