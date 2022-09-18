import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class BlogTopic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column()
  bannerUrl: string;

  @Column()
  author: string;

  @Column()
  slug: string;
}
