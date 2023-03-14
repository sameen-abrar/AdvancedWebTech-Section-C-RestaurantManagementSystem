import { Injectable, UseInterceptors } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { stringify } from "querystring";
import { customerLoginDTO } from "./CustomerDTOs/customerLogin.dto";
import { CustomerDTO } from "./CustomerDTOs/CustomerDTO.dto";
import { Pass } from "./CustomerDTOs/pass.query";
import { customerEntity } from "./CustomerEntities/customer.entity";
import { Repository, UpdateResult } from 'typeorm';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Injectable()
export class CustomerService
{
    constructor(
        @InjectRepository(customerEntity)
        private customerRepo: Repository<customerEntity>,
      ) {}

      async getById(id: number): Promise<any> {
        // throw new Error("Method not implemented.");
        return this.customerRepo.findOneBy({id});
    }
    getAll(): any {
        // throw new Error("Method not implemented.");

        // console.log(typeof(this.customerRepo.find()));
        // console.log(this.customerRepo.find());
        return this.customerRepo.find()
        
    }
    async add(user: CustomerDTO): Promise<customerEntity> {
        // throw new Error("Method not implemented.");

        const newUser = new customerEntity();

        newUser.email = user.email
        newUser.name = user.name
        newUser.no_of_returns= user.no_of_returns
        newUser.phone = user.phone
        newUser.userId = user.userId

        // newUser.UserName = user.UserName
        // newUser.Registration_Date = new Date();
        // newUser.Type = user.Type;
        
        
        // // newUser.Password = user.Password

        // const salt = await bcrypt.genSalt();
        // const hashedpass = await bcrypt.hash(user.Password, salt);
        // newUser.Password= hashedpass;
        // return this.customerRepo.save(ne);

        const add = this.customerRepo.save(newUser)

        return add;

        // return this.customerRepo.insert(obj);
    }
    async delete(id: number): Promise<any> 
    {
        return this.customerRepo.delete(id);
    }
    async update(id:number, user: CustomerDTO): Promise<any> {
        // throw new Error("Method not implemented.");
        const newUser = await this.getById(id);

        newUser.email = user.email
        newUser.name = user.name
        newUser.no_of_returns= user.no_of_returns
        newUser.phone = user.phone
        newUser.FileName = user.FileName;

        return this.customerRepo.update(id, newUser);

    }
    getUserCustomer(): any
    {
        console.log("here")
        return this.customerRepo.find({
            relations: 
            {
                user:true
            }
        })
    }

    async FileUpload(user:CustomerDTO): Promise<any>
    {
        console.log("file customer: ", user)
        return await this.update(user.id, user)
    }
}