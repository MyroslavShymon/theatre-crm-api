import {IsMongoId, IsNotEmpty, IsString} from "class-validator";

export class AddActorPerformanceDto {
    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public rolePerformanceId: string;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public actorId: string;
}
