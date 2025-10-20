import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
export declare class RegionController {
    private readonly regionService;
    constructor(regionService: RegionService);
    create(createRegionDto: CreateRegionDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/region.entity").Region, {}, {}> & import("./schema/region.entity").Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/region.entity").Region, {}, {}> & import("./schema/region.entity").Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/region.entity").Region, {}, {}> & import("./schema/region.entity").Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/region.entity").Region, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/region.entity").Region, {}, {}> & import("./schema/region.entity").Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schema/region.entity").Region, {}, {}> & import("./schema/region.entity").Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/region.entity").Region, "findOne", {}>;
    update(id: string, updateRegionDto: UpdateRegionDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/region.entity").Region, {}, {}> & import("./schema/region.entity").Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schema/region.entity").Region, {}, {}> & import("./schema/region.entity").Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/region.entity").Region, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/region.entity").Region, {}, {}> & import("./schema/region.entity").Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schema/region.entity").Region, {}, {}> & import("./schema/region.entity").Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/region.entity").Region, "findOneAndDelete", {}>;
}
