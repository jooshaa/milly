"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistrictService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const region_entity_1 = require("../region/schema/region.entity");
const district_entity_1 = require("./schema/district.entity");
let DistrictService = class DistrictService {
    regionSchema;
    districtSchema;
    constructor(regionSchema, districtSchema) {
        this.regionSchema = regionSchema;
        this.districtSchema = districtSchema;
    }
    async create(createDistrictDto) {
        const regionID = createDistrictDto.regionId;
        const region = await this.regionSchema.findById(regionID);
        if (!region) {
            throw new common_1.NotFoundException("bunday joy topilmadi");
        }
        const district = await this.districtSchema.create(createDistrictDto);
        region.districts.push(district);
        await region.save();
    }
    findAll() {
        return this.districtSchema.find().populate("Region");
    }
    findOne(id) {
        return `This action returns a #${id} district`;
    }
    update(id, updateDistrictDto) {
        return `This action updates a #${id} district`;
    }
    remove(id) {
        return `This action removes a #${id} district`;
    }
};
exports.DistrictService = DistrictService;
exports.DistrictService = DistrictService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(region_entity_1.Region.name)),
    __param(1, (0, mongoose_2.InjectModel)(district_entity_1.District.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], DistrictService);
//# sourceMappingURL=district.service.js.map