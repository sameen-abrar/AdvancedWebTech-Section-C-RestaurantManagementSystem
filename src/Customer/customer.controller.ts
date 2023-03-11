import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { Delete, UsePipes } from "@nestjs/common/decorators";
import { ValidationPipe } from "@nestjs/common/pipes";
import { query } from "express";
import { get } from "http";
import { brotliDecompressSync } from "zlib";
import { CustomerService } from "./customer.service";
import { customerLoginDTO } from "./DTOs/customerLogin.dto";
import { UserDTO } from "./DTOs/CustomerDTO.dto";
import { Pass } from "./DTOs/pass.query";

@Controller("/api/customer")
export class CustomerController
{
    constructor(private CustomerService: CustomerService){}
    
    @Get("/change")
    ChangePassword(@Query() query:any):any
    {
        console.log("asjdhf");
        return this.CustomerService.changepass(query);
    } 
    @Get("/index")
    getIndex():any
    {
        return this.CustomerService.getIndex();
    }
    // @Get("/menu")
    // getMenu():any
    // {
    //     return this.CustomerService.getMenu();
    // }
    @Get()
    getUsers(){
        return this.CustomerService.getUser();
    }

    @Get("/user")
    getCustomerWithUser(){
        return this.CustomerService.getCustomerWithUser();
    }
    @Get("/:id")
    getUserByID(@Param("id", ParseIntPipe) id:number):any
    {
        return this.CustomerService.getUserByID(id);
    }
    @Post("/insert")
    @UsePipes(new ValidationPipe)
    CreateUser(@Body() user:UserDTO):any
    { 
        return this.CustomerService.createUser(user);
    }
    @Put("/update/:id")
    @UsePipes(new ValidationPipe)
    UpdateUser(@Body() user:UserDTO, @Param("id", ParseIntPipe) id:number)
    {
        return this.CustomerService.UpdateUser(id, user);
    }

    @Delete("/delete/:id")
    DeleteUser(@Param("id", ParseIntPipe) id:number)
    {
        return this.CustomerService.deleteUser(id);
    }
    @Post("/login")
    @UsePipes(new ValidationPipe)
    Login(@Body() user:customerLoginDTO)
    {
        return this.CustomerService.login(user);
    }

    // @Post("/loginq")
    // @UsePipes(new ValidationPipe)
    // LoginQ(@Query() user:customerLoginDTO)
    // {
    //     return this.CustomerService.login(user);
    // }




}