import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({type: Date, default: Date.now})
    created: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
