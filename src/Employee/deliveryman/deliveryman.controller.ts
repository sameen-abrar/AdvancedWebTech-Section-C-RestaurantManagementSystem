import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { OrderList } from 'src/order/order.dto';
import { OrderService } from 'src/order/order.service';
import { DMService } from './deliveryman.service';

@Controller('/deliveryman')
export class DMController {
  constructor(private readonly dmService: DMService, private orderService:OrderService) {}

  @Get('/vieworder')
  getWaiter(): any {
    return this.orderService.getOrder();
  }

  @Patch('/modifyorderstatus/:o_id')
  modifyOrderStatus(@Param('o_id',ParseIntPipe) o_id: any , @Body() order: OrderList): any {
    return this.orderService.modifyOrderStatus(o_id, order);
  }

  @Get('/findorderbytype')
  findOrder(@Query() query: any): any {
    return this.orderService.findOrderbyType(query);
  }

}