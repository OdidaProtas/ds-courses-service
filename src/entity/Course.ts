import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
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
}
