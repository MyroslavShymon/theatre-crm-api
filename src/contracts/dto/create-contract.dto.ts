import {IsMongoId, IsNotEmpty, IsNumber, IsString} from "class-validator";
import * as mongoose from "mongoose";

export class CreateContractDto {
    @IsNotEmpty()
    @IsNumber()
    public baseSalary: number;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public actorId: string;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public theatreId: string;
}
