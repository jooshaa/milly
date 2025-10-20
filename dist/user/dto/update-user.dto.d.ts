import { CreateUserDto } from './create-user.dto';
import { Gender } from '../schema/user.entity';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    name: string;
    user_name: string;
    phone_number: string;
    gender: Gender;
    bio: string;
    age: number;
    email: string;
    password: string;
}
export {};
