import { type } from "os";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface User{
 id?:number,
 name?:string,
 username?:string,
 email?:string,
 password?:string,
 role?:Roles
}

export enum Roles{
    ADMIN = 'admin',
    EDITOR = 'editor',
    READER = 'reader'
}

@Entity()
export class UserEntity implements User{
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    name?:string;
    @Column({unique:true})
    username?:string;
    @Column()
    email?:string;
  //  @Column({ select: false }) will not fetch ever!!!
    @Column({nullable:true})
    password?:string;
    @Column({type:'enum',enum: Roles, default:Roles.READER})
    role?:Roles;
    @BeforeInsert()
    emailToLowerCase(){
        this.email = this.email.toLocaleLowerCase();
    }
}