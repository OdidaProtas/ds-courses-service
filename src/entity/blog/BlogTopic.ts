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
}
