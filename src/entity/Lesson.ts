import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Subject from "./Subject";
import SubTopic from "./SubTopic";
import { Topic } from "./Topic";

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  bannerUrl: string;

  @ManyToOne(() => Topic, (s) => s.lessons)
  topic: Topic;

  @OneToMany(() => SubTopic, (s) => s.lesson)
  subTopics: SubTopic[];

  @Column({
    nullable: true,
  })
  duration: string;

  @Column({
    nullable: true,
  })
  author: string;

  @Column({
    nullable: true,
  })
  lastEditor: string;

  @Column({
    nullable: true,
  })
  slug: string;
}
