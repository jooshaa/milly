import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.entity';
import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name)private readonly userSchema: Model<User>){}
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    return this.userSchema.create({
      ...createUserDto,
        password: hashedPassword
      })
    }
  async findAdminByEmail(email: string) {
    const user = await this.userSchema.findOne({ where: { email } })
    return user

  }

  findAll() {
    return this.userSchema.find();
  }

   findOne(id: string) {
      if(!mongoose.Types.ObjectId.isValid(id)){
        throw new BadRequestException("id notogri")
      }
      return this.userSchema.findById(id)
    }

  update(id: string, createUserDto: CreateUserDto) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BadRequestException("id notogri")
      }
    return this.userSchema.findByIdAndUpdate(id, createUserDto)
    }

  remove(id: string) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BadRequestException("id notogri")
      }
      return this.userSchema.findByIdAndDelete(id)
    }
}
