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
import { TransactionService } from './transaction.service';
import { TrasnsactionsDTO } from '../CustomerDTOs/transactionsDTO.dto';

// @UseGuards(SessionGuard)
@Controller('/api/transaction')
// @Roles('customer')
// @UseGuards(RolesGuard)
export class TransactionController {
  constructor(private TransacationService: TransactionService) {}

  // @Get('/menu')
  // getMenuWithCart() {
  //   return this.TransacationService.getMenuWithCart();
  // }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): any {
    return this.TransacationService.getById(id);
  }

  @Get('cart/:id')
  // @UseGuards(SessionGuard)
  getCartWithTransactionId(@Param('id', ParseIntPipe) id: number): any {
    console.log('in controller');
    return this.TransacationService.getCartWithTransactionId(id);
  }
  @Post('/insert')
  @UsePipes(new ValidationPipe())
  Add(@Body() user: TrasnsactionsDTO): any {
    return this.TransacationService.add(user);
  }
  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  Update(@Body() user: TrasnsactionsDTO, @Param('id', ParseIntPipe) id: number) {
    console.log('here');
    return this.TransacationService.update(id, user);
  }

  @Delete('/delete/:id')
  Delete(@Param('id', ParseIntPipe) id: number) {
    return this.TransacationService.delete(id);
  }

  @Get()
  Get() {
    return this.TransacationService.getAll();
  }
}
