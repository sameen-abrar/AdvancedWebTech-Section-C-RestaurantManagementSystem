import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { customerEntity } from './customer.entity';

@Entity("users")
export class userEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string

    @Column()
    password: string

    @OneToOne(() => customerEntity, (customer)=>customer.user)
    user: userEntity


}