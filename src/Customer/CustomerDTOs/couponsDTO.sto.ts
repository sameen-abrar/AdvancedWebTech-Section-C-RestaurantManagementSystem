import { IsInt, IsString } from "class-validator";

export class CouponsDTO{

    id: number;

    @IsString()
    Code: string;

    @IsInt()
    Percentage:Number;

    
    Validity_Start:Date;

    Validity_Expired: Date;

}