import { IsInt, IsString } from "class-validator";

class CouponsDTO{

    id: number;

    @IsString()
    Code: string;

    @IsInt()
    Percentage:Number;

    
    Validity_Start:Date;

    Validity_Expired: Date;

}