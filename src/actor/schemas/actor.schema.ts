import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type ActorDocument = Actor & Document;

@Schema()
export class Actor {
    @Prop({required: true, type: Number, default: 0})
    experience: number;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    userId: mongoose.Types.ObjectId;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Award'}]})
    awardIds: mongoose.Types.ObjectId[];
}

export const ActorSchema = SchemaFactory.createForClass(Actor);
