import mongoose from "mongoose";
import { Region } from "../../region/schema/region.entity";
export declare class District {
    name: string;
    regionId: Region;
}
export declare const DistrictSchema: mongoose.Schema<District, mongoose.Model<District, any, any, any, mongoose.Document<unknown, any, District, any, {}> & District & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, District, mongoose.Document<unknown, {}, mongoose.FlatRecord<District>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<District> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
