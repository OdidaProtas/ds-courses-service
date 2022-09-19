import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Students {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

}
