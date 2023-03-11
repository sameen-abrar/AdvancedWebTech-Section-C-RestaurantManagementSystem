import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { stringify } from "querystring";
import { customerLoginDTO } from "./DTOs/customerLogin.dto";
import { UserDTO } from "./DTOs/CustomerDTO.dto";
import { Pass } from "./DTOs/pass.query";
import { customerEntity } from "./Entities/customer.entity";
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService
{
    constructor(
        @InjectRepository(customerEntity)
        private customerRepo: Repository<customerEntity>,
      ) {}

    getIndex():any
    {
        // return "Customer index returned";
        return this.customerRepo.find();
    }
    // getMenu():any
    // {
    //     // return "Customer menu";
    //     return this.customerRepo.find();
    // }
    getUserByID(id):any
    {
        // return "the user id is " + id;
        return this.customerRepo.findOneBy({id});
    }
    getUser():any
    {
        // return "List of users."
        return this.customerRepo.find();
    }
    UpdateUser(id, user: UserDTO):any
    {
        const currCus = this.getUserByID(id);
        // return `The id ${user.id} is updated.`;
        //const newCus = new customerEntity();
        currCus.name = user.name;
        // currCus.email = user.email
        currCus.returns = user.returns

        return this.customerRepo.update(id,currCus);
        // return this.customerRepo.save(currCus);
    }
    deleteUser(id:number):any
    {
        // return `The id ${id} was deleted.`
        return this.customerRepo.delete(id);
    }
    createUser(user: UserDTO):any
    {
        const newCus = new customerEntity();

        newCus.name = user.name;
        // newCus.email = user.email
        newCus.no_of_returns = user.returns

        return this.customerRepo.save(newCus);
    }

    getCustomerWithUser(): any
    {
        return this.customerRepo.find({
            relations: {
                user:true
            }
        })
    }









    login(user:customerLoginDTO):any
    {
        
        return `User ${user.email} succesfully logged in.`;
    }
    changepass(pass:any):any
    {
        return `Password changed to ${stringify(pass)}.`
    }
}