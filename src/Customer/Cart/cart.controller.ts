import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Delete, UseGuards, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { query } from 'express';
import { get } from 'http';
import { brotliDecompressSync } from 'zlib';
import { SessionGuard } from 'src/User/session.guard';
// import { CartService } from "./menu.service";
// import { OrderedItemsDTO } from "../CustomerDTOs/menuDTO.dto";
import { CartService } from './cart.service';
import { OrderedItemsDTO } from '../CustomerDTOs/OrderedItemsDTO.dto';

// @UseGuards(SessionGuard)
@Controller('/api/cart')
// @Roles('customer')
// @UseGuards(RolesGuard)
export class CartController {
  constructor(private CartService: CartService) {}

  @Get('/menu')
  getMenuWithCart() {
    return this.CartService.getMenuWithCart();
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): any {
    return this.CartService.getById(id);
  }

  @Get('customer/:id')
  // @UseGuards(SessionGuard)
  getCustomerWithUser(@Param('id', ParseIntPipe) id: number): any {
    console.log('in controller');
    return this.CartService.getCustomerWithCartId(id);
  }
  @Post('/insert')
  @UsePipes(new ValidationPipe())
  Add(@Body() user: OrderedItemsDTO): any {
    return this.CartService.add(user);
  }
  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  Update(@Body() user: OrderedItemsDTO, @Param('id', ParseIntPipe) id: number) {
    console.log('here');
    return this.CartService.update(id, user);
  }

  @Delete('/delete/:id')
  Delete(@Param('id', ParseIntPipe) id: number) {
    return this.CartService.delete(id);
  }

  @Get()
  Get() {
    return this.CartService.getAll();
  }
}
