import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";

export class MenuList { 

    m_id:number;

    @IsString()
    @IsNotEmpty({message: "Menu Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"})
    m_name:string;

    @IsString()
    @IsNotEmpty({message: "Menu type required"})
    @Matches(/^(?:dessert|savory|drink)$/ig, {message: "Chose among dessert, savory and drink"})
    m_type:string;

    @IsInt()
    @IsNotEmpty({message: "Menu Price required"})
    //@Length(2,4)
    m_price:number;

    @IsBoolean()
    @IsNotEmpty()
    m_availability:boolean;

    @IsInt()
    @IsNotEmpty({message: "Waiter ID required"})
    w_id:any;
}

export class MenuUpdateList { 

    m_id:number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Menu Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"})
    m_name:string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Menu type required"})
    @Matches(/^(?:dessert|savory|drink)$/ig, {message: "Chose among dessert, savory and drink"})
    m_type:string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Menu Price required"})
    //@Length(2,4)
    m_price:number;

    @IsOptional()
    @IsBoolean()
    @IsNotEmpty()
    m_availability:boolean;
    
    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Waiter ID required"})
    w_id:any;
}