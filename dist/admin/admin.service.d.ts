import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './schema/admin.schema';
import mongoose, { Model } from 'mongoose';
export declare class AdminService {
    private readonly adminSchema;
    constructor(adminSchema: Model<Admin>);
    create(createAdminDto: CreateAdminDto): Promise<mongoose.Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): mongoose.Query<(mongoose.Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[], mongoose.Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, Admin, "find", {}>;
    findOne(id: string): mongoose.Query<(mongoose.Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, Admin, "findOne", {}>;
    update(id: string, updateAdminDto: UpdateAdminDto): mongoose.Query<(mongoose.Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, Admin, "findOneAndUpdate", {}>;
    remove(id: string): mongoose.Query<(mongoose.Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, Admin, {}, {}> & Admin & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, Admin, "findOneAndDelete", {}>;
}
