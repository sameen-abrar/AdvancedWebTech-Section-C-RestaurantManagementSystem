import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Length, Matches} from "class-validator";

export class ManagerInfo { 

    m_id:number;
    
    @IsString()
    @IsNotEmpty({message: "Manager Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"})
    m_name:string;

    @IsInt()
    @IsNotEmpty({message: "Manager age required"})
    //@Length(2,2,{message: "Age bound to be 2 digit"})
    m_age:number;

    @IsString()
    @IsNotEmpty({message: "Manager gender required"})
    @Matches(/^(?:male|female)$/ig, {message: "Gender must be Male or Female"})
    m_gender:string;

    @IsString()
    @IsNotEmpty({message: "Manager address required"})
    m_address:string;
    
    @IsInt()
    @IsNotEmpty({message: "Manager salary required"})
    //@Length(4,5,{message: "Salary bound to be 4 to 5 digit"})
    m_salary:number;

    @IsEmail()
    @IsNotEmpty({message: "Manager email required"})
    m_email:string;
    
    @IsString()
    @IsNotEmpty({message: "Manager contact required"})
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, {message: "Bangladeshi Number is Applicable like +8801*********"})
    m_contact:string;

    @IsString()
    @IsNotEmpty({message: "Manager password required"})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/, {message: "Password required min 6 and max 10 char,combination of uppercase,lowercase and special character"})
    m_password:string;

    @IsOptional()
    m_profile: string;
}