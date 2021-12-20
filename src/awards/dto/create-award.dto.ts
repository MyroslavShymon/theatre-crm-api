import {IsEnum, IsNotEmpty, IsOptional, IsString} from "class-validator";
import {AwardRateEnum} from "../../shared/enums/awardRate.enum";

export class CreateAwardDto {
    @IsNotEmpty()
    @IsString()
    public title: string;

    @IsString()
    public description: string;

    @IsNotEmpty()
    @IsEnum(AwardRateEnum, {each: true})
    public rate: AwardRateEnum;
}
