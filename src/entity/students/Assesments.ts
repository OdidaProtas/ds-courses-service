import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Assesments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @Column()
  students: string;
}
