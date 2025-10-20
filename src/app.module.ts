import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';


@Module({
  imports: [ConfigModule.forRoot({envFilePath: ".env", isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    AdminModule,
    AuthModule,
    UserModule,
    RegionModule,
    DistrictModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
