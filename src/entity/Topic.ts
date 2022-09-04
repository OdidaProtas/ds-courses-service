import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Course } from "./Course";
import SubTopic from "./SubTopic";

@Entity()
export class Topic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({
    nullable: true,
  })
  bannerImage: string;

  @ManyToOne(() => Course, (c) => c.topics)
  course: Course;

  @OneToMany(() => SubTopic, (s) => s.topic)
  subTopics: SubTopic[];
}
