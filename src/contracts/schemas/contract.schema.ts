import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type ContractDocument = Contract & Document;

@Schema()
export class Contract {
    @Prop({required: true, type: Number})
    baseSalary: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:'Actor'} )
    actorId: mongoose.Types.ObjectId;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);
