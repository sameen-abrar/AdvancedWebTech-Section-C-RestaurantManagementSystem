import { IsEmail, isEmail, IsIn, IsInt, IsNotEmpty, isNotEmpty, isNumber, IsPhoneNumber, IsString, Length } from "class-validator";
import { IsNull } from "typeorm";

export class CustomerDTO
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

    // @IsPhoneNumber('BD')
    @IsNotEmpty({message:"Must provide a valid number to register"})
    phone: number;

    @IsInt({message: "Should be a valid number"})
    no_of_returns: number;

    @IsInt()
    userId: number;



}