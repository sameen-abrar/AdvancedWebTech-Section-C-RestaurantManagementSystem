import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { Delete, UseGuards, UsePipes } from "@nestjs/common/decorators";
import { ValidationPipe } from "@nestjs/common/pipes";
import { query } from "express";
import { get } from "http";
import { brotliDecompressSync } from "zlib";
import { Roles } from "src/roles.decorator";
import { RolesGuard } from "src/roles.guard";
import { SessionGuard } from "src/User/session.guard";
import { MenuService } from "./menu.service";
import { MenuDTO } from "../CustomerDTOs/menuDTO.dto";

@UseGuards(SessionGuard)
@Controller("/api/menu")
// @Roles('customer')
// @UseGuards(RolesGuard)
export class MenuController
{
    constructor(private  MenuService: MenuService){}

    @Get("/items")
    getMenuWithItems()
    {
        return this.MenuService.getMenuWithItems();
    }
    @Get("/:id")
    getById(@Param("id", ParseIntPipe) id:number):any
    {
        return this.MenuService.getById(id);
    }
    @Post("/insert")
    @UsePipes(new ValidationPipe)
    Add(@Body() user:MenuDTO):any
    { 
        return this.MenuService.add(user);
    }
    @Put("/update/:id")
    @UsePipes(new ValidationPipe)
    Update(@Body() user:MenuDTO, @Param("id", ParseIntPipe) id:number)
    {
        console.log("here");
        return this.MenuService.update(id, user);
    }

    @Delete("/delete/:id")
    Delete(@Param("id", ParseIntPipe) id:number)
    {
        return this.MenuService.delete(id);
    }

    @Get()
    Get(){
        return this.MenuService.getAll();
    }
}