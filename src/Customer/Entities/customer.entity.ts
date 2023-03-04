import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { userEntity } from './login.entity';

@Entity("customer")
export class customerEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @Column()
    // email:string;

    @Column()
    no_of_returns: number;

    @OneToOne(() => userEntity)
    @JoinColumn()
    user: userEntity


}