import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./Lesson";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // @ManyToOne(()=>Lesson,l=>l.tasks)
  // lesson:Lesson[]
}
