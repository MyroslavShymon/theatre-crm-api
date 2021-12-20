import {IsMongoId, IsNotEmpty, IsString} from "class-validator";

export class AddAwardDto {
    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public awardId: string;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public actorId: string;
}
