import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './schema/region.entity';
import mongoose, { Model } from 'mongoose';
export declare class RegionService {
    private readonly regionSchema;
    constructor(regionSchema: Model<Region>);
    create(createRegionDto: CreateRegionDto): Promise<mongoose.Document<unknown, {}, Region, {}, {}> & Region & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): mongoose.Query<(mongoose.Document<unknown, {}, Region, {}, {}> & Region & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[], mongoose.Document<unknown, {}, Region, {}, {}> & Region & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, Region, "find", {}>;
    findOne(id: string): mongoose.Query<(mongoose.Document<unknown, {}, Region, {}, {}> & Region & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, Region, {}, {}> & Region & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, Region, "findOne", {}>;
    update(id: string, updateRegionDto: UpdateRegionDto): mongoose.Query<(mongoose.Document<unknown, {}, Region, {}, {}> & Region & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, Region, {}, {}> & Region & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, Region, "findOneAndUpdate", {}>;
    remove(id: string): mongoose.Query<(mongoose.Document<unknown, {}, Region, {}, {}> & Region & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null, mongoose.Document<unknown, {}, Region, {}, {}> & Region & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, Region, "findOneAndDelete", {}>;
}
