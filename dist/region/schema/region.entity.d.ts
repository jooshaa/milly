import mongoose from "mongoose";
import { District } from "../../district/schema/district.entity";
export declare class Region {
    name: string;
    districts: District[];
}
export declare const RegionSchema: mongoose.Schema<Region, mongoose.Model<Region, any, any, any, mongoose.Document<unknown, any, Region, any, {}> & Region & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Region, mongoose.Document<unknown, {}, mongoose.FlatRecord<Region>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<Region> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
