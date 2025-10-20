
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './schema/admin.schema';
import mongoose, { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private readonly adminSchema: Model<Admin>){}
  async create(createAdminDto: CreateAdminDto) {
    const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
    return this.adminSchema.create({...createAdminDto,
      password: hashedPassword
    })
  }

  findAll() {
    return this.adminSchema.find();
  }

  findOne(id: string) {
    if(!mongoose.Types.ObjectId.isValid(id)){
      throw new BadRequestException("id notogri")
    }
    return this.adminSchema.findById(id)
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException("id notogri")
    }
    return this.adminSchema.findByIdAndUpdate(id, updateAdminDto)
  }
  

  remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException("id notogri")
    }
    return this.adminSchema.findByIdAndDelete(id)
  }
}
