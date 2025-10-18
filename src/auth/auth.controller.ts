import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { loginUserDto } from '../users/dto/login-dto';
import type { Response } from 'express';
import { CookieGetter } from '../common/decorators/cookie-getter.decorators';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post("singup")
  singup(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }

  @Post("singin")
  @HttpCode(HttpStatus.OK)
  login(
    @Body() loginUserDto: loginUserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.login(loginUserDto, res)
  }

  @HttpCode(200)
  @Post('logout')
  logout(
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.logout(refreshToken, res)
  }

  // @HttpCode(200)
  // @Post(':id/refresh')
  // refresh(
  //   @Param("id", ParseIntPipe) id: number,
  //   @CookieGetter("refreshToken") refreshToken: string
  //   @Res({ passthrough: true }) res: Response
  // ){
  //   return this.authService.refreshToken(id, refreshToken, res)
  // }


}
