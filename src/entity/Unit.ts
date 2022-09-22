import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Subject from "./Subject";

@Entity()
export class Unit {
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

  @ManyToOne(() => Subject, (s) => s.units)
  subject: Subject;

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
