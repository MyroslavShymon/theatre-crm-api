import {IsMongoId, IsNotEmpty, IsString} from "class-validator";

export class AddPerformanceDto {
    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public theatreId: string;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public performanceId: string;
}
