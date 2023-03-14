import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MenuList } from 'src/menu/menu.dto';
import { MenuService } from 'src/menu/menu.service';
import { OrderList } from 'src/order/order.dto';
import { OrderService } from 'src/order/order.service';
import { TableInfo } from 'src/table/table.dto';
import { TableService } from 'src/table/table.service';
import { WaiterService } from './waiter.service';

@Controller('/waiter')
export class WaiterController {
  constructor(private readonly waiterService: WaiterService, private orderService: OrderService, private menuService: MenuService, private tableService: TableService) {}

  @Get('/vieworder')
  getOrder(): any {
    return this.orderService.getOrder();
  }

  @Post('/addorder')
  @UsePipes(ValidationPipe)
  addOrder(@Body() order: OrderList) : any {
    return this.orderService.addOrder(order);
  }

  @Put('/modifyorder')
  @UsePipes(ValidationPipe)
  modifyOrder(@Body('o_name') o_name ,
            @Body('o_type') o_type,
            @Body('o_price') o_price,
            @Body('o_quantity') o_quantity,
            @Body('o_status') o_status, 
            @Body('w_id') w_id,
            @Body('o_id') o_id): any {
    return this.orderService.modifyOrder(o_name, o_type, o_price, o_quantity,o_status,w_id,o_id);
  }

  @Patch('/updateorder/:o_id')
  @UsePipes(ValidationPipe)
  updateOrder(@Param('o_id',ParseIntPipe) o_id: any , @Body() order: OrderList): any {
    return this.orderService.updateOrder(o_id, order);
  }

  @Delete('/cancelorder/:o_id')
  cancelOrder(@Param() o_id: number): any {
    return this.orderService.cancelOrder(o_id);
  }

  @Get('/findorder')
  findOrder(@Query() query: any): any {
    return this.orderService.findOrder(query);
  }

  @Get('/viewmenu')
  getMenu(): any {
    return this.menuService.getMenu();
  }

  @Post('/addmenu')
  @UsePipes(ValidationPipe)
  addMenu(@Body() menu: MenuList) : any {
    return this.menuService.addMenu(menu);
  }

  @Put('/modifymenu')
  @UsePipes(ValidationPipe)
  modifyMenu(@Body('m_name') m_name ,
            @Body('m_type') m_type,
            @Body('m_price') m_price,
            @Body('m_availability') m_availability,
            @Body('w_id') w_id,
            @Body('m_id') m_id): any {
    return this.menuService.modifyMenu(m_name, m_type, m_price, m_availability,w_id,m_id);
  }

  @Patch('/updatemenu/:m_id')
  @UsePipes(ValidationPipe)
  updateMenu(@Param('m_id',ParseIntPipe) m_id: any , @Body() menu: MenuList): any {
    return this.menuService.updateMenu(m_id, menu);
  }

  @Delete('/removemenu/:m_id')
  removeMenu(@Param() m_id: number): any {
    return this.menuService.removeMenu(m_id);
  }

  @Get('/findmenu')
  findMenu(@Query() query: any): any {
    return this.menuService.findMenu(query);
  }

  @Get('/viewtable')
  getTable(): any {
    return this.tableService.getTable();
  }

  @Post('/addtable')
  @UsePipes(ValidationPipe)
  addTable(@Body() table: TableInfo) : any {
    return this.tableService.addTable(table);
  }

  @Put('/modifytable')
  @UsePipes(ValidationPipe)
  modifyTable(@Body('t_position') t_position ,
            @Body('seatcapacity') seatcapacity,
            @Body('t_status') t_status,
            @Body('w_id') w_id,
            @Body('t_id') t_id): any {
    return this.tableService.modifyTable(t_position,seatcapacity,t_status,w_id,t_id);
  }

  @Patch('/updatetable/:t_id')
  @UsePipes(ValidationPipe)
  updateTable(@Param('t_id',ParseIntPipe) t_id: any , @Body() table: TableInfo): any {
    return this.tableService.updateTable(t_id, table);
  }

  @Delete('/canceltable/:t_id')
  cancelTable(@Param() t_id: number): any {
    return this.tableService.cancelTable(t_id);
  }

  @Get('/findtable')
  findTable(@Query() query: any): any {
    return this.tableService.findTable(query);
  }
}