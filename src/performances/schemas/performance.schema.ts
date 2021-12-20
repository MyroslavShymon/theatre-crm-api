import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type PerformanceDocument = Performance & Document;

@Schema()
export class Performance {
    @Prop({required: true})
    title: string;

    @Prop({required: true, type: Number})
    cost: number;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'RolePerformance'}]})
    rolePerformanceId: mongoose.Types.ObjectId[];

    @Prop({type: Boolean, default: false})
    isPerformed: Boolean;

    @Prop({type: String, required: true})
    executionDate: String;

    @Prop({type: Date, default: Date.now})
    created: Date;
}

export const PerformanceSchema = SchemaFactory.createForClass(Performance);
