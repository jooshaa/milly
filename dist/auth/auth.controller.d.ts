import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { loginUserDto } from '../users/dto/login-dto';
import type { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    singup(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../admin/schema/admin.schema").Admin, {}, {}> & import("../admin/schema/admin.schema").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    login(loginUserDto: loginUserDto, res: Response): Promise<{
        message: string;
        id: any;
        accessToken: string;
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
}
