import { IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, IsNull } from 'typeorm';
import { userEntity } from '../../User/UserEntites/user.entity';
// import { menuEntity } from './menu.entity';
import { OrderedItemsEntity } from './OrderedItems.entity';
import { TablesEntity } from './tables.entity';
import { TrasnsactionsEntity } from './transactions.entity';

@Entity("dinein")
export class DineInEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    StartTime: Date;

    @Column()
    EndTime: Date;

    @OneToOne(() => TablesEntity, (table) => table.dinein)
    @JoinColumn()
    table: TablesEntity

    @Column()
    tableId: Number

    @OneToOne(() => TrasnsactionsEntity, (transaction) => transaction.dinein)
    @JoinColumn()
    transaction: TrasnsactionsEntity

    @Column()
    transactionId: Number

}