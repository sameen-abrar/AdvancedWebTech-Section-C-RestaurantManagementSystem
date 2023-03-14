import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { OrderList } from 'src/order/order.dto';
import { OrderService } from 'src/order/order.service';
import { CookService } from './cook.service';

@Controller('/cook')
export class CookController {
  constructor(private readonly cookService: CookService, private orderService: OrderService ) {}

  @Get('/vieworder')
  getWaiter(): any {
    return this.orderService.getOrder();
  }

  @Get('/findorderbystatus')
  findOrder(@Query() query: any): any {
    return this.orderService.findOrderbyStatus(query);
  }

  @Patch('/modifyorderstatus/:o_id')
  modifyOrderStatus(@Param('o_id',ParseIntPipe) o_id: any , @Body() order: OrderList): any {
    return this.orderService.modifyOrderStatus(o_id, order);
  }

}