import { WaiterEntity } from 'src/Employee/waiter/waiter.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from 'typeorm';

@Entity("table")
export class TableEntity{
  @PrimaryGeneratedColumn()
  t_id: number;

  @Column()
  t_position: string;

  @Column()
  seatcapacity: number;

  @Column()
  t_status: string;

      @OneToOne(() => WaiterEntity, (waiter) => waiter.table)
      @JoinColumn()
      waiter: WaiterEntity

}