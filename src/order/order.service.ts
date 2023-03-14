import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderList, OrderUpdateList } from './order.dto';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(OrderEntity)
        private OrderRepo: Repository<OrderEntity>,
      ) {}

    getOrder(): any {
        return this.OrderRepo.find();
      }    

    addOrder(order:OrderList):any {
        const orderinfo = new OrderEntity()
        orderinfo.o_name = order.o_name;
        orderinfo.o_type = order.o_type;
        orderinfo.o_price = order.o_price;
        orderinfo.o_quantity = order.o_quantity;
        orderinfo.o_status = order.o_status;
        orderinfo.waiter = order.w_id;   
        return this.OrderRepo.save(orderinfo);
      }

    modifyOrder(o_name, o_type, o_price, o_quantity,o_status,w_id,o_id): any {
        return this.OrderRepo.update(o_id,{o_name:o_name,o_type:o_type,o_price:o_price,o_quantity:o_quantity,o_status:o_status,waiter:w_id});
      }
    
    updateOrder(order:OrderUpdateList, o_id:any):any {
        return this.OrderRepo.update(order,o_id);
           }
    
    cancelOrder(o_id):any {
            return this.OrderRepo.delete(o_id);
        }
        
    findOrder(query): any{
      return this.OrderRepo.findOneBy({o_id:query.o_id,o_name:query.o_name });
      }
    

    modifyOrderStatus(order:OrderList, o_id:any):any {
        return this.OrderRepo.update(order,o_id);
        }

    findOrderbyStatus(query): any{
          return this.OrderRepo.findOneBy({o_status:query.o_status});
          }
    findOrderbyType(query): any{
            return this.OrderRepo.findOneBy({o_type:query.o_type});
            }
    
  
}