import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import SubTopic from "./SubTopic";
import { Task } from "./Task";

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    nullable: true,
  })
  videoURL: string;

  @OneToMany(() => Task, (t) => t.lesson)
  tasks: Task[];

  @ManyToMany(() => SubTopic, (s) => s.lessons)
  subTopic: SubTopic;
}
