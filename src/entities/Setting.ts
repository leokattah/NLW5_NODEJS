import {
  Entity, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  PrimaryColumn } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

// Este construtor é um método para toda vez que algum "newqualquer coisa" for chamado ele é executado. 
// Neste caso abaixo, se o ID não vier preenchido, vamos criar uma ID para ele. 
constructor(){
 if(!this.id) this.id = uuid()
 }
}
export {Setting}