import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Gender } from '../schema/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name: string;
    user_name: string;
    phone_number: string;
    gender: Gender
    bio: string
    age: number
    email: string
    password: string
}
