import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from '../admin/admin.module';
import { UserModule } from '../user/user.module';




@Module({
  imports: [JwtModule.register({
    global: true
  }), UserModule],
  controllers: [AuthController],
  providers: [AuthService,],
  exports: [JwtModule,]
})
export class AuthModule { }
