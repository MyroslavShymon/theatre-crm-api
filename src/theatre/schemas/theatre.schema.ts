import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type TheatreDocument = Theatre & Document;

@Schema()
export class Theatre {
    @Prop({required: true})
    title: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Performance'}]})
    performanceIds: mongoose.Types.ObjectId[];

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contract'}]})
    contractIds: mongoose.Types.ObjectId[];

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]})
    administratorIds: mongoose.Types.ObjectId[];
}

export const TheatreSchema = SchemaFactory.createForClass(Theatre);
