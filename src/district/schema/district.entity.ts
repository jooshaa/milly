
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ref } from "process";
import { Region } from "../../region/schema/region.entity";

@Schema()
export class District {
    @Prop()
    name: string;

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref: "Region"
    })
    regionId: Region

    
}

export const DistrictSchema = SchemaFactory.createForClass(District)