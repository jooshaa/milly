import { Gender } from "../schema/user.entity";
export declare class CreateUserDto {
    name: string;
    user_name: string;
    phone_number: string;
    gender: Gender;
    bio: string;
    age: number;
    email: string;
    password: string;
}
