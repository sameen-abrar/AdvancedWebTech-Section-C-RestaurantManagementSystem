import { Type } from "class-transformer";
import { IsEmail, IsIn, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, Length, Matches, ValidateNested } from "class-validator";

export class CookInfo { 

    c_id:number;
    
    @IsString()
    @IsNotEmpty({message: "Cook Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"})
    c_name:string;

    @IsInt()
    @IsNotEmpty({message: "Cook Age required"})
    //@Length(2,2, {message: "Age bound to be 2 digit"})
    c_age:number;

    @IsString()
    @IsNotEmpty({message: "Cook gender required"})
    @Matches(/^(?:male|female)$/ig, {message: "Gender must be Male or Female"})
    c_gender:string;

    @IsString()
    @IsNotEmpty({message: "Cook address required"})
    c_address:string;
    
    @IsInt()
    @IsNotEmpty({message: "Cook salary required"})
    //@Length(4,5,{message: "Salary bound to be 4 to 5 digit"})
    c_salary:number;

    @IsEmail()
    @IsNotEmpty({message: "Cook email required"})
    c_email:string;
    
    @IsString()
    @IsNotEmpty({message: "Cook contact required"})
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, {message: "Bangladeshi Number is Applicable like +8801*********"})
    c_contact:string;

    @IsInt()
    @IsNotEmpty({message: "Manager ID required"})
    m_id:any;

}

export class CookUpdateInfo { 

    c_id:number;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Cook Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"})
    c_name:string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Cook Age required"})
    //@Length(2,2, {message: "Age bound to be 2 digit"})
    c_age:number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Cook gender required"})
    @Matches(/^(?:male|female)$/ig, {message: "Gender must be Male or Female"})
    c_gender:string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Cook address required"})
    c_address:string;
    
    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Cook salary required"})
    //@Length(4,5,{message: "Salary bound to be 4 to 5 digit"})
    c_salary:number;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty({message: "Cook email required"})
    c_email:string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Cook contact required"})
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, {message: "Bangladeshi Number is Applicable like +8801*********"})
    c_contact:string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Manager ID required"})
    m_id:any;

}