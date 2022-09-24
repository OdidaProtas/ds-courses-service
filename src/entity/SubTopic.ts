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
  imageUrl: string;

  @Column({
    nullable: true,
  })
  bannerUrl: string;

  @Column({
    default: false,
  })
  isTask: boolean;

  @ManyToOne(() => Lesson, (l) => l.subTopics)
  lesson: string;
}
