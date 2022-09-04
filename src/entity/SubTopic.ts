import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./Lesson";
import { Topic } from "./Topic";

@Entity()
export default class SubTopic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description:string

  @ManyToOne(() => Topic, (t) => t.subTopics)
  topic: Topic[];

  @OneToMany(()=>Lesson,l=>l.subTopic)
  lessons:Lesson[]
}
