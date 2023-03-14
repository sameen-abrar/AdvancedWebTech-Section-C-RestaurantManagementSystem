import { IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, IsNull } from 'typeorm';
import { userEntity } from '../../User/UserEntites/user.entity';
import { DineInEntity } from './dinein.entity';
// import { menuEntity } from './menu.entity';
import { OrderedItemsEntity } from './OrderedItems.entity';
import { TrasnsactionsEntity } from './transactions.entity';

@Entity("tables")
export class TablesEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    NumberOfSeats: Number;

    @Column()
    Status: boolean;

    @OneToOne(() => DineInEntity, (dinein) => dinein.table)
    dinein: DineInEntity

}