import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {
  
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;

  @JoinColumn({ name: "user_id"})
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date

  // Este construtor é um método para toda vez que algum "newqualquer coisa" for chamado ele é executado. 
// Neste caso abaixo, se o ID não vier preenchido, vamos criar uma ID para ele. 
constructor(){
  if(!this.id) this.id = uuid()
  }

}

export { Message }