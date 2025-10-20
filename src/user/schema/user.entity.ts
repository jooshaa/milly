import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}
export type UserDocument = HydratedDocument<User>
@Schema()
export class User {
    @Prop()
    name:string;

    @Prop()
    user_name:string;

    @Prop()
    phone_number:string;

    @Prop()
    gender: Gender 

    @Prop()
    bio: string

    @Prop()
    age: number

    @Prop()
    email: string

    @Prop()
    password: string


}
export const UserSchema = SchemaFactory.createForClass(User)
