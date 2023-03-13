import { IsInt, IsNotEmpty, IsString, Length } from "class-validator";

export class UserDTO {
    
    // @IsInt()
    id: number;

    @IsString()
    UserName:string ;
   
    @Length(8, 16)
    Password: string;

    @IsString()
    Type: string

    Registration_Date: Date;
    
}