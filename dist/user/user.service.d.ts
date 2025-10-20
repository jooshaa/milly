import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.entity';
import mongoose, { Model } from 'mongoose';
export declare class UserService {
    private readonly userSchema;
    constructor(userSchema: Model<User>);
    create(createUserDto: CreateUserDto): Promise<mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAdminByEmail(email: string): Promise<(mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    findAll(): mongoose.Query<(mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[], mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, User, "find", {}>;
    findOne(id: string): mongoose.Query<(mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, User, "findOne", {}>;
    update(id: string, createUserDto: CreateUserDto): mongoose.Query<(mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, User, "findOneAndUpdate", {}>;
    remove(id: string): mongoose.Query<(mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, User, {}, {}> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, User, "findOneAndDelete", {}>;
}
