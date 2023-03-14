import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";

export class OrderList { 

    o_id:number;

    @IsString()
    @IsNotEmpty({message: "Order Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"}) 
    o_name:string;

    @IsString()
    @IsNotEmpty({message: "Order type required"})
    @Matches(/^(?:dine|takeaway|delivery)$/ig, {message: "Chose among dine, takeaway and delivery"})
    o_type:string;

    @IsInt()
    @IsNotEmpty({message: "Order Price required"})
    //@Length(2,4)
    o_price:number;

    @IsInt()
    @IsNotEmpty({message: "Order Quantity required"})
    //@Length(1,2)
    o_quantity: number;

    @IsBoolean()
    @IsNotEmpty()
    o_status:boolean;

    @IsInt()
    @IsNotEmpty({message: "Waiter ID required"})
    w_id:any;

}

export class OrderUpdateList { 

    o_id:number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Order Name required"})
    @Matches(/^[A-Z]+[a-zA-Z]*$/, {message: "First letter should be capital"}) 
    o_name:string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Order type required"})
    @Matches(/^(?:dine|takeaway|delivery)$/ig, {message: "Chose among dine, takeaway and delivery"})
    o_type:string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Order Price required"})
    //@Length(2,4)
    o_price:number;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Order Quantity required"})
    //@Length(1,2)
    o_quantity: number;

    @IsOptional()
    @IsBoolean()
    @IsNotEmpty()
    o_status:boolean;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Waiter ID required"})
    w_id:any;

}