import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import {AwardRateEnum} from "../../shared/enums/awardRate.enum";

export type AwardDocument = Award & Document;

@Schema()
export class Award {
    @Prop({required: true, type: String, unique: true})
    title: string;

    @Prop({type: String})
    description: string;

    @Prop({type: String, enum: AwardRateEnum, required: true})
    rate: AwardRateEnum;
}

export const AwardSchema = SchemaFactory.createForClass(Award);
