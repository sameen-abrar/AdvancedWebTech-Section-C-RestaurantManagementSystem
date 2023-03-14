import { WaiterEntity } from 'src/Employee/waiter/waiter.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';

@Entity("menu")
export class MenuEntity{
  @PrimaryGeneratedColumn()
  m_id: number;

  @Column()
  m_name: string;

  @Column()
  m_type: string;

  @Column()
  m_price: number;

  @Column()
  m_availability: boolean;

  @ManyToOne(() => WaiterEntity, (waiter) => waiter.menus)
  waiter : WaiterEntity

}