import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import BlogTopic from "./BlogTopic";

@Entity()
export default class BlogArticle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  imageUrl: string;

  @Column()
  bannerUrl: string;

  @Column()
  position: string;

  @ManyToOne(() => BlogTopic, (topic) => topic.articles)
  category: string;

  @Column()
  slug: string;
}
