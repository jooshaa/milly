import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Region } from '../region/schema/region.entity';
import { District } from './schema/district.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class DistrictService {
    constructor(@InjectModel(Region.name) private readonly regionSchema: Model<Region>,
      @InjectModel(District.name) private readonly districtSchema: Model<District>){}

  async create(createDistrictDto: CreateDistrictDto) {
    const regionID = createDistrictDto.regionId
    const region = await this.regionSchema.findById(regionID);
    if(!region){throw new NotFoundException("bunday joy topilmadi")}
    const district = await this.districtSchema.create(createDistrictDto)
    region.districts.push(district);
    await region.save();

  }

  findAll() {
    return this.districtSchema.find().populate("Region")
  }

  findOne(id: string) {
    return `This action returns a #${id} district`;
  }

  update(id: string, updateDistrictDto: UpdateDistrictDto) {
    return `This action updates a #${id} district`;
  }

  remove(id: string) {
    return `This action removes a #${id} district`;
  }
}
