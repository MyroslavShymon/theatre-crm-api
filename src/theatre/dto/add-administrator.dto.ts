import {IsMongoId, IsNotEmpty, IsString} from "class-validator";

export class AddAdministratorDto {
    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public theatreId: string;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    public userId: string;
}
