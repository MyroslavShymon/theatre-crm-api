import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type RolePerformanceDocument = RolePerformance & Document;

@Schema()
export class RolePerformance {
    @Prop({required: true, type: String})
    title: string;

    @Prop({type: String})
    description: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Actor'}]})
    actorIds: mongoose.Types.ObjectId[];
}

export const RolePerformanceSchema = SchemaFactory.createForClass(RolePerformance);
