import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

enum MODE {
  "VIRTUAL_ONLY" = "virtual_only",
  "MIXED" = "mixed",
  "IN_PERSON" = "in_person",
}

@Entity()
export default class Events {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column()
  bannerUrl: string;

  @Column()
  author: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @Column({ nullable: true })
  maxAudience: number;

  @Column({
    type: "enum",
    enum: MODE,
    default: MODE.VIRTUAL_ONLY,
  })
  mode: MODE;
}
