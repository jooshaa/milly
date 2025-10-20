import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ref } from "process";
import { District } from "../../district/schema/district.entity";

@Schema()
export class Region {
    @Prop()
    name: string;

    @Prop({
        type:[{
            type:mongoose.Schema.ObjectId,
            ref: [District]
        }]
    })
    districts:District[]
    
}

export const RegionSchema = SchemaFactory.createForClass(Region)