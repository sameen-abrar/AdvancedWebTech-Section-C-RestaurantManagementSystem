import { WaiterEntity } from 'src/Employee/waiter/waiter.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from 'typeorm';

@Entity("order")
export class OrderEntity{
  @PrimaryGeneratedColumn()
  o_id: number;

  @Column()
  o_name: string;

  @Column()
  o_type: string;

  @Column()
  o_price: number;

  @Column()
  o_quantity: number;

  @Column()
  o_status: boolean;


  @OneToOne(() => WaiterEntity, (waiter) => waiter.order)
  @JoinColumn()
  waiter: WaiterEntity

}