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
// import { CouponsDTO } from "../CustomerDTOs/menuDTO.dto";
import { CouponsService } from './coupons.service';
// import { CouponsDTO } from '../CustomerDTOs/CouponsDTO.dto';
import { CouponsDTO } from '../CustomerDTOs/couponsDTO.sto';

// @UseGuards(SessionGuard)
@Controller('/api/coupons')
// @Roles('customer')
// @UseGuards(RolesGuard)
export class CouponsController {
  constructor(private CouponsService: CouponsService) {}

  @Get('/transactions')
  getMenuWithCart() {
    return this.CouponsService.getTransactionsWithCoupons();
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): any {
    return this.CouponsService.getById(id);
  }

  @Get('transactions/:id')
  // @UseGuards(SessionGuard)
  getCustomerWithCartId(@Param('id', ParseIntPipe) id: number): any {
    console.log('in controller');
    return this.CouponsService.getTransactionsWithCouponID(id);
  }
  @Post('/insert')
  @UsePipes(new ValidationPipe())
  Add(@Body() user: CouponsDTO): any {
    return this.CouponsService.add(user);
  }
  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  Update(@Body() user: CouponsDTO, @Param('id', ParseIntPipe) id: number) {
    console.log('here');
    return this.CouponsService.update(id, user);
  }

  @Delete('/delete/:id')
  Delete(@Param('id', ParseIntPipe) id: number) {
    return this.CouponsService.delete(id);
  }

  @Get()
  Get() {
    return this.CouponsService.getAll();
  }
}
