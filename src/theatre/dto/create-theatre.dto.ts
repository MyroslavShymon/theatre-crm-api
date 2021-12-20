import {IsMongoId, IsNotEmpty, IsString} from "class-validator";

export class CreateTheatreDto {
    @IsNotEmpty()
    @IsString()
    public title: string;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public userId: string;
}
