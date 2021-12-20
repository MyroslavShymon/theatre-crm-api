import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import * as mongoose from "mongoose";

export class CreateActorDto {
    @IsNotEmpty()
    @IsNumber()
    public experience: number;

    @IsNotEmpty()
    @IsString()
    public userId: string;
}
