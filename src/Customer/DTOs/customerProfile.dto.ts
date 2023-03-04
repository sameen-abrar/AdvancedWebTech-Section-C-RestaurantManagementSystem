import { IsEmail, isEmail, IsInt, IsNotEmpty, isNotEmpty, isNumber, IsString, Length } from "class-validator";

export class UserDTO
{
    // @IsInt({message: "ID must be integer"})
    // @IsNotEmpty({message: "cannot enter without valid ID"})
    id: number;

    @IsString({message: "Please provide string type for name"})
    @IsNotEmpty({message: "Name is required"})
    @Length(3,50, {message: "Name shoudl be more than 3 letters"} )
    name: string;

    @IsEmail()
    @IsNotEmpty({message: "Email is required for verification"})
    email: string;

    @IsInt({message: "Should be a valid number"})
    no_of_returns: number;
}