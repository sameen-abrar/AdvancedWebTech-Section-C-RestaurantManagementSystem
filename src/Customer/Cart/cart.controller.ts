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
import { MenuController } from '../Menu/menu.controller';
import { MenuService } from '../Menu/menu.service';

// @UseGuards(SessionGuard)
@Controller('/api/cart')
// @Roles('customer')
// @UseGuards(RolesGuard)
export class CartController {
  constructor(
    private CartService: CartService,
    // private MenuService: MenuService,
  ) {}

  @Get('/menu')
  getMenuWithCart() {
    return this.CartService.getMenuWithCart();
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): any {
    return this.CartService.getById(id);
  }

  @Get('customer/notransactions/:id')
  // @UseGuards(SessionGuard)
  getCustomerWithCartId_NoTransaction(@Param('id', ParseIntPipe) id: number): any {
    console.log('in controller');
    return this.CartService.getCustomerWithCartId_NoTransaction(id);
  }

  @Get('customer/:id')
  // @UseGuards(SessionGuard)
  getCustomerWithCartId(@Param('id', ParseIntPipe) id: number): any {
    console.log('in controller');
    return this.CartService.getCustomerWithCartId(id);
  }

  @Get('menu/:id')
  // @UseGuards(SessionGuard)
  getMenuWithCartId(@Param('id', ParseIntPipe) id: number): any {
    console.log('in controller');
    return this.CartService.getMenuWithCartId(id);
  }

  @Post('/insert')
  // @UsePipes(new ValidationPipe())
  async Add(@Body() user: OrderedItemsDTO): Promise<any> {
    // await this.Update(user)
    // const menu = await this.MenuService.getById(user.menuId.valueOf());

    // console.log('Menu data: ', menu);
    // user.Gross_Price = user.Amount.valueOf() *

    return this.CartService.add(user);
  }
  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  async Update(
    @Body() user: OrderedItemsDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    console.log('here');
    const menuCart = await this.getMenuWithCartId(id);
    console.log('Menu with cart: ', menuCart[0].menu);

    user.Gross_Price = user.Amount.valueOf() * menuCart[0].menu.Price;

    console.log('Cart: ', user);

    return this.CartService.update(id, user);
  }

  @Delete('/delete/:id')
  Delete(@Param('id', ParseIntPipe) id: number) {
    return this.CartService.delete(id);
  }

  @Put('/updateprice')
  async UpdatePrice() {
    const cart = await this.Get();

    console.log(cart);
    cart.forEach(async (element) => {
      const r = await this.Update(element, element.id);
    });
    return cart;
  }

  @Get()
  Get() {
    return this.CartService.getAll();
  }
}
