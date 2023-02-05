import { IsInt, IsNotEmpty, isNotEmpty, isNumber, IsString, Length } from "class-validator";

export class customerLoginDTO
{
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    password: string;
}