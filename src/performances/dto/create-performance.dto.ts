import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreatePerformanceDto {
    @IsNotEmpty()
    public title: string;

    @IsNotEmpty()
    @IsNumber()
    public cost: number;

    @IsNotEmpty()
    @IsString()
    public executionDate: string;
}
