import { IsNotEmpty } from "class-validator";
import { CustomerDTO } from "src/Customer/CustomerDTOs/CustomerDTO.dto";
import { UserDTO } from "./user.dto";

export default class CompositeObject {
    
    @IsNotEmpty()
    user:UserDTO
    
    @IsNotEmpty()
    customer:CustomerDTO

}