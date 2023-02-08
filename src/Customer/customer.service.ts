import { Injectable } from "@nestjs/common";
import { stringify } from "querystring";
import { customerLoginDTO } from "./DTOs/customerLogin.dto";
import { UserDTO } from "./DTOs/customerProfile.dto";
import { Pass } from "./DTOs/pass.query";

@Injectable()
export class CustomerService
{
    getIndex():string
    {
        return "Customer index returned";
    }
    getMenu():string
    {
        return "Customer menu";
    }
    getUserByID(id):any
    {
        return "the user id is " + id;
    }
    getUser():any
    {
        return "List of users."
    }
    UpdateUser(user:UserDTO):any
    {
        return `The id ${user.id} is updated.`;
    }
    deleteUser(id:number):any
    {
        return `The id ${id} was deleted.`
    }
    createUser(user: UserDTO):any
    {
        return user;
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