import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { customerEntity } from "./Entities/customer.entity";
import { userEntity } from "./Entities/login.entity";

@Module({
    imports:[TypeOrmModule.forFeature([customerEntity, userEntity])],
    controllers:[CustomerController],
    providers:[CustomerService]
})
export class CustomerModule{}