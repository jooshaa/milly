import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
export declare class DistrictController {
    private readonly districtService;
    constructor(districtService: DistrictService);
    create(createDistrictDto: CreateDistrictDto): Promise<void>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/district.entity").District, {}, {}> & import("./schema/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/district.entity").District, {}, {}> & import("./schema/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/district.entity").District, "find", {}>;
    findOne(id: string): string;
    update(id: string, updateDistrictDto: UpdateDistrictDto): string;
    remove(id: string): string;
}
