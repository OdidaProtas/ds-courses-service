import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import BlogArticle from "./BlogArticle";

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

  @Column({
    nullable: true,
  })
  bannerUrl: string;

  @Column({
    nullable: true,
  })
  author: string;

  @Column({
    nullable: true,
  })
  slug: string;

  @OneToMany(() => BlogArticle, (a) => a.category)
  articles: BlogArticle[];
}
