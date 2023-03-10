import { IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, IsNull } from 'typeorm';
import { userEntity } from '../../User/UserEntites/user.entity';
// import { menuEntity } from './menu.entity';
import { OrderedItemsEntity } from './OrderedItems.entity';

@Entity("menu")
export class menuEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Food_Name: string;

    @Column()
    Type:string;

    @Column()
    Ingredients:string;

    @Column()
    Description: string;

    @Column()
    SpiceLevel: string;

    @Column()
    Price: Number

    @OneToMany(() => OrderedItemsEntity, (orderedItems) => orderedItems.customer)
    orderedItems: OrderedItemsEntity[]

}