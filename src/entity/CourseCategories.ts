import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./Course";

@Entity()
export default class CourseCategories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    nullable: true,
  })
  bannerUrl: string;

  @Column({
    nullable: true,
  })
  imageUrl: string;

  @Column({
    nullable: true,
  })
  url: string;

  @OneToMany(() => Course, (c) => c.category)
  courses: Course[];
}
