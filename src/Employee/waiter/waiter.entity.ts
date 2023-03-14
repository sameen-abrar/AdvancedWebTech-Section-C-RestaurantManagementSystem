import { MenuEntity } from 'src/menu/menu.entity';
import { OrderEntity } from 'src/order/order.entity';
import { TableEntity } from 'src/table/table.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany} from 'typeorm';
import { ManagerEntity } from '../manager/manager.entity';

@Entity("waiter")
export class WaiterEntity{
  @PrimaryGeneratedColumn()
  w_id: number;

  @Column()
  w_name: string;

  @Column()
  w_age: number;

  @Column()
  w_gender: string;

  @Column()
  w_address: string;

  @Column()
  w_salary: number;

  @Column()
  w_email: string;

  @Column()
  w_contact: string;

  @ManyToOne(() => ManagerEntity, (manager) => manager.waiters)
  manager : ManagerEntity

  @OneToMany(() => MenuEntity, (menu) => menu.waiter)
  menus : WaiterEntity[]

  @OneToOne(() => OrderEntity, (order)=>order.waiter)
  order: OrderEntity

  @OneToOne(() => TableEntity, (table)=>table.waiter)
  table: TableEntity
}