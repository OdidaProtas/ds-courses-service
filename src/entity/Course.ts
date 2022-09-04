import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Topic } from "./Topic";

@Entity()
export class Course {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column()
  description:string

  @Column()
  image: string;

  @Column()
  bannerImage: string;

  @Column()
  addedBy: string;

  @Column({
    default: false,
  })
  isActive: boolean;

  @OneToMany(() => Topic, (t) => t.course)
  topics: Topic[];
}
