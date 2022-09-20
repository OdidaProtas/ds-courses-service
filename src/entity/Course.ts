import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import CourseCategories from "./CourseCategories";
import Subject from "./Subject";
import { Topic } from "./Topic";

@Entity()
export class Course {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  bannerUrl: string;

  @Column()
  addedBy: string;

  @Column({
    default: false,
  })
  isActive: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @OneToMany(() => Topic, (t) => t.course)
  topics: Topic[];

  @OneToMany(() => Subject, (s) => s.course)
  subjects: Subject[];

  @ManyToOne(() => CourseCategories, (c) => c.courses)
  category: CourseCategories;
}
