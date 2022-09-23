import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./Lesson";

@Entity()
export default class SubTopic {
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

  @Column({
    default: false,
  })
  isTask: boolean;

  @ManyToOne(() => Lesson, (l) => l.subTopics)
  lesson: string;
}
