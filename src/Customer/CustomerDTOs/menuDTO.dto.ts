import { IsNotEmpty } from "class-validator";

export class MenuDTO 
{
    id: number;

    @IsNotEmpty()
    Food_Name: string;
     
    @IsNotEmpty()
    Type:string;
     
    @IsNotEmpty()
    Ingredients:string;
     
    @IsNotEmpty()
    Description: string;
    
    @IsNotEmpty()
    SpiceLevel: string;

    @IsNotEmpty()
    Price: Number;
    
}