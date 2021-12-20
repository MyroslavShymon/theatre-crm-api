import {IsNotEmpty, IsEmail} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    public name: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    public password: string;
}
