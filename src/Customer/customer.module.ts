import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { customerEntity } from "./CustomerEntities/customer.entity";
import { menuEntity } from "./CustomerEntities/menu.entity";
import { userEntity } from "../User/UserEntites/user.entity";

@Module({
    imports:[TypeOrmModule.forFeature([customerEntity, userEntity, menuEntity])],
    controllers:[CustomerController],
    providers:[CustomerService]
})
export class CustomerModule{}