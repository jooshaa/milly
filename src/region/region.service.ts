import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Region } from './schema/region.entity';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region.name) private readonly regionSchema: Model<Region>){}
  create(createRegionDto: CreateRegionDto) {
    return this.regionSchema.create(createRegionDto)
  }

  findAll() {
    return this.regionSchema.find().populate("districts")
  }

  findOne(id: string) {
    return this.regionSchema.findById(id).populate("districts")
  }

  update(id: string, updateRegionDto: UpdateRegionDto) {
     if (!mongoose.Types.ObjectId.isValid(id)) {
          throw new BadRequestException("id notogri")
        }
        return this.regionSchema.findByIdAndUpdate(id, updateRegionDto)
  }

  remove(id: string) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BadRequestException("id notogri")
      }
      return this.regionSchema.findByIdAndDelete(id)
    }
  }

