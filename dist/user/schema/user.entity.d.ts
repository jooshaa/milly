import { HydratedDocument } from "mongoose";
export declare enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}
export type UserDocument = HydratedDocument<User>;
export declare class User {
    name: string;
    user_name: string;
    phone_number: string;
    gender: Gender;
    bio: string;
    age: number;
    email: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User, any, {}> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
