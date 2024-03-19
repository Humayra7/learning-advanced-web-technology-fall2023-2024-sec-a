/* eslint-disable prettier/prettier */
import { Entity, Column } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;


  @Column({ unique: true, nullable: false })
  password: string;
 
}
