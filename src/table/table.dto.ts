import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";

export class TableInfo { 

    t_id:number;

    @IsString()
    @IsNotEmpty({message: "Table position required"})
    @Matches(/^(?:A1|A1|B1|B2)$/ig, {message: "1st row: A1, A2 and 2nd row:B1,B2 "})
    t_position:string;

    @IsInt()
    @IsNotEmpty({message: "Table capacity required"})
    //@Length(1,2)
    seatcapacity:number;

    @IsBoolean()
    @IsNotEmpty()
    t_status:string;

    @IsInt()
    @IsNotEmpty({message: "Waiter ID required"})
    w_id:any;
}

export class TableUpdateInfo { 

    t_id:number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: "Table position required"})
    @Matches(/^(?:A1|A1|B1|B2)$/ig, {message: "1st row: A1, A2 and 2nd row:B1,B2 "})
    t_position:string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Table capacity required"})
    //@Length(1,2)
    seatcapacity:number;

    @IsOptional()
    @IsBoolean()
    @IsNotEmpty()
    t_status:string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({message: "Waiter ID required"})
    w_id:any;
}