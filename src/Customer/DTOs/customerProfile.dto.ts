import { IsInt, IsNotEmpty, isNotEmpty, isNumber, IsString, Length } from "class-validator";

export class UserDTO
{
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Length(3,50)
    name: string;

    @IsInt()
    @IsNotEmpty()
    phone: number;
}