import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "src/Customer/customer.controller";
import { CustomerModule } from "src/Customer/customer.module";
import { CustomerService } from "src/Customer/customer.service";
import { customerEntity } from "src/Customer/CustomerEntities/customer.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { userEntity } from "./UserEntites/user.entity";

@Module({
    imports:[TypeOrmModule.forFeature([userEntity, customerEntity]),CustomerModule],
    controllers:[UserController],
    providers:[UserService,CustomerService]
})
export class UserModule  {}