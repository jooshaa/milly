import { BadRequestException, ConflictException, ForbiddenException, Injectable, Res, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt'
import type { Response } from 'express';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { loginUserDto } from '../user/dto/login-dto';
import { UserDocument } from '../user/schema/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,) { }

  private async generateTokens(user: UserDocument) {
    const payload = {
      id: user._id,
      email: user.email,
      name: user.name,
      phone_number: user.phone_number,
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
    const candidate = await this.userService.findAdminByEmail(
      createAdminDto.email
    );
    if(candidate){
      throw new ConflictException("bunday foydallunvchi mavjud");
    }

    const newUser = this.userService.create(createAdminDto)
    return newUser
  }

  async login(loginDto: loginUserDto, res:Response){
    const user = await this.userService.findAdminByEmail(loginDto.email)
    if(!user){
      throw new UnauthorizedException("email yoki parol notugri")
    }

    const verifyPassword = await bcrypt.compare(loginDto.password, user.password)
    if(!verifyPassword){
      throw new UnauthorizedException("email yoki parol notugri")
    }

    const {accessToken, refreshToken}= await this.generateTokens(user)
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
    user.refresh_token= hashedRefreshToken
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
    res.clearCookie("refreshTokne", {
      maxAge: Number(process.env.COOKIE_TIME),
      httpOnly: true
    })

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
    user.refresh_token = "";
    await user.save()

    res.clearCookie("refreshToken");

    return{
      message: "user logged out "
    }
  }
}