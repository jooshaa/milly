import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { Model } from 'mongoose';
import { Region } from '../region/schema/region.entity';
import { District } from './schema/district.entity';
export declare class DistrictService {
    private readonly regionSchema;
    private readonly districtSchema;
    constructor(regionSchema: Model<Region>, districtSchema: Model<District>);
    create(createDistrictDto: CreateDistrictDto): Promise<void>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, District, {}, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, District, {}, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, District, "find", {}>;
    findOne(id: string): string;
    update(id: string, updateDistrictDto: UpdateDistrictDto): string;
    remove(id: string): string;
}
