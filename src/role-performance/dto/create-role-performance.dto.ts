import {IsMongoId, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateRolePerformanceDto {
    @IsNotEmpty()
    @IsString()
    public title: string;

    @IsString()
    public description: string;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public performanceId: string;
}
