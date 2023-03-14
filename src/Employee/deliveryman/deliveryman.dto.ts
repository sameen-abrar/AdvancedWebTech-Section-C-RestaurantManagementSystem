import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";

export class DMInfo { 

    dm_id:number;

    @IsString()
    @IsNotEmpty({message: "Deliveryman Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"})
    dm_name:string;

    @IsInt()
    @IsNotEmpty({message: "Deliveryman Age required"})
    //@Length(2,2, {message: "Age bound to be 2 digit"})
    dm_age:number;

    @IsString()
    @IsNotEmpty({message: "Deliveryman gender required"})
    @Matches(/^(?:male|female)$/ig, {message: "Gender must be Male or Female"})
    dm_gender:string;

    @IsString()
    @IsNotEmpty({message: "Deliveryman address required"})
    dm_address:string;

    @IsInt()
    @IsNotEmpty({message: "Deliveryman salary required"})
    //@Length(4,5,{message: "Salary bound to be 4 to 5 digit"})
    dm_salary:number;

    @IsEmail()
    @IsNotEmpty({message: "Deliveryman email required"})
    dm_email:string;

    @IsString()
    @IsNotEmpty({message: "Deliveryman contact required"})
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, {message: "Bangladeshi Number is Applicable like +8801*********"})
    dm_contact:string;

    @IsString()
    @IsNotEmpty({message: "Deliveryman vehicleno required"})
    //@Matches(/^[A-Z]{3}[-](?: [A-Z])?[-][0-9]{1,2}[-][0-9]{4}$/, {message: "BD vehicle No is Applicable like DHA-D-11-9999"})
    dm_vehicleno:string;

    @IsInt()
    @IsNotEmpty({message: "Manager ID required"})
    m_id:any;

}

export class DMUpdateInfo { 

    dm_id:number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Deliveryman Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"})
    dm_name:string;

    
    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Deliveryman Age required"})
    //@Length(2,2, {message: "Age bound to be 2 digit"})
    dm_age:number;

    
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Deliveryman gender required"})
    @Matches(/^(?:male|female)$/ig, {message: "Gender must be Male or Female"})
    dm_gender:string;

    
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Deliveryman address required"})
    dm_address:string;

    
    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Deliveryman salary required"})
    //@Length(4,5,{message: "Salary bound to be 4 to 5 digit"})
    dm_salary:number;

    
    @IsOptional()
    @IsEmail()
    @IsNotEmpty({message: "Deliveryman email required"})
    dm_email:string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Deliveryman contact required"})
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, {message: "Bangladeshi Number is Applicable like +8801*********"})
    dm_contact:string;

    
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Deliveryman vehicleno required"})
    //@Matches(/^[A-Z]{3}[-](?: [A-Z])?[-][0-9]{1,2}[-][0-9]{4}$/, {message: "BD vehicle No is Applicable like DHA-D-11-9999"})
    dm_vehicleno:string;

    
    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Manager ID required"})
    m_id:any;

}