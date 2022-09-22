import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Course } from "./Course";
import { Unit } from "./Unit";

@Entity()
export default class Subject {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Course, (c) => c.subjects)
  course: Course;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  bannerUrl: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column()
  title: string;

  @OneToMany(() => Unit, (u) => u.subject)
  units: Unit[];
}
