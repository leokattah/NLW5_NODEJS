import {Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid";

@Entity('users')
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

// Este construtor é um método para toda vez que algum "newqualquer coisa" for chamado ele é executado. 
// Neste caso abaixo, se o ID não vier preenchido, vamos criar uma ID para ele. 
constructor(){
  if(!this.id) this.id = uuid()
  }
}
export { User }