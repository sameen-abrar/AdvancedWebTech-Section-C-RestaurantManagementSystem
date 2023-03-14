import { Type } from "class-transformer";
import { IsEmail, IsIn, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, Length, Matches, ValidateNested } from "class-validator";

export class WaiterInfo { 

    w_id:number;
    
    @IsString()
    @IsNotEmpty({message: "Waiter Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"})
    w_name:string;

    @IsInt()
    @IsNotEmpty({message: "Waiter Age required"})
    //@Length(2,2, {message: "Age bound to be 2 digit"})
    w_age:number;

    @IsString()
    @IsNotEmpty({message: "Waiter gender required"})
    @Matches(/^(?:male|female)$/ig, {message: "Gender must be Male or Female"})
    w_gender:string;

    @IsString()
    @IsNotEmpty({message: "Waiter address required"})
    w_address:string;
    
    @IsInt()
    @IsNotEmpty({message: "Waiter salary required"})
    //@Length(4,5,{message: "Salary bound to be 4 to 5 digit"})
    w_salary:number;

    @IsEmail()
    @IsNotEmpty({message: "Waiter email required"})
    w_email:string;
    
    @IsString()
    @IsNotEmpty({message: "Waiter contact required"})
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, {message: "Bangladeshi Number is Applicable like +8801*********"})
    w_contact:string;

    @IsInt()
    @IsNotEmpty({message: "Manager ID required"})
    m_id:any;

}

export class WaiterUpdateInfo { 

    w_id:number;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Waiter Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"})
    w_name:string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Waiter Age required"})
    //@Length(2,2, {message: "Age bound to be 2 digit"})
    w_age:number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Waiter gender required"})
    @Matches(/^(?:male|female)$/ig, {message: "Gender must be Male or Female"})
    w_gender:string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Waiter address required"})
    w_address:string;
    
    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Waiter salary required"})
    //@Length(4,5,{message: "Salary bound to be 4 to 5 digit"})
    w_salary:number;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty({message: "Waiter email required"})
    w_email:string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Waiter contact required"})
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, {message: "Bangladeshi Number is Applicable like +8801*********"})
    w_contact:string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Manager ID required"})
    m_id:any;

}