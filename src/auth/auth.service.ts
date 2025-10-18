import { BadRequestException, ConflictException, ForbiddenException, Injectable, Res, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt'
import type { Response } from 'express';
import { AdminService } from '../admin/admin.service';
import { Admin } from '../admin/schema/admin.schema';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { loginUserDto } from '../admin/dto/login-dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService) { }

  private async generateTokens(user: AdminDocument) {
    const payload = {
      id: user._id,
      email: user.email,
      is_active: user.is_active,
      is_owner: user.is_owner,
    }
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.sign(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME as any
      }),
      this.jwtService.sign(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME as any
      })
    ])
    return {accessToken, refreshToken}
  }

  async registration(createAdminDto: CreateAdminDto){
    const candidate = await this.adminService.findAdminByEmail(
      createAdminDto.email
    );
    if(candidate){
      throw new ConflictException("bunday foydallunvchi mavjud");
    }

    const newUser = this.adminService.create(createAdminDto)
    return newUser
  }

  async login(loginDto: loginUserDto, res:Response){
    const user = await this.adminService.findAdminByEmail(loginDto.email)
    if(!user){
      throw new UnauthorizedException("email yoki parol notugri")
    }

    const verifyPassword = await bcrypt.compare(loginDto.password, user.password)
    if(!verifyPassword){
      throw new UnauthorizedException("email yoki parol notugri")
    }

    const {accessToken, refreshToken}= await this.generateTokens(user)
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
    user.ref_token= hashedRefreshToken
    await user.save();
    
    res.cookie(
      "refreshToken",
       refreshToken,
      {
      maxAge:Number( process.env.COOKIE_TIME),
      httpOnly: true
    })

    return{
      message: "user logged in",
      id: user.id,
      accessToken,
    }
  }
  async logout(refreshToken: string, res: Response){
    // res.clearCookie("refreshTokne", {
    //   maxAge: Number(process.env.COOKIE_TIME),
    //   httpOnly: true
    // })

    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    })
    if(!userData){
      throw new ForbiddenException("user not verified ")
    }
    const user = await this.usersService.findOne(userData.id)
    if(!user){
      throw new BadRequestException ("wrong token")
    }
    user.ref_token = "";
    await user.save()

    res.clearCookie("refreshToken");

    return{
      message: "user logged out "
    }
  }
}