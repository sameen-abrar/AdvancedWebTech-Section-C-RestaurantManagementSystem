import { IsInt, IsNotEmpty, isNotEmpty, isNumber, IsString, Length } from "class-validator";

export class UserDTO
{
    @IsInt({message: "ID must be integer"})
    @IsNotEmpty({message: "cannot enter without valid ID"})
    id: number;

    @IsString({message: "Please provide string type for name"})
    @IsNotEmpty({message: "Name is required"})
    @Length(3,50, {message: "Name shoudl be more than 3 letters"} )
    name: string;

    @IsInt({message: "Should be a valid number"})
    @IsNotEmpty({message: "Phone number is required for verification"})
    phone: number;
}