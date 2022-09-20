import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AppDataSource } from "../../data-source";
import { Request, Response, NextFunction } from "express";
import trycatch from "../../utils/trycatch";
@Entity()
export class About {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  body: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;
}

export class AboutController {
  private aboutRepository = AppDataSource.getRepository(About);

  async save(request: Request, response: Response, next: NextFunction) {
    const slug = request?.body?.title?.split(" ")?.join("_");
    const [data, error] = await trycatch(
      this.aboutRepository.save({ ...request.body, slug })
    );
    if (error) {
      response.status(404);
      return {
        msg: "An error occured",
        desc: error,
      };
    }
    return data;
  }

  async all(request: Request, response: Response, next: NextFunction) {
    const [data, error] = await trycatch(
      this.aboutRepository.find({
        order: {
          id: "DESC",
        },
        take: 1,
      })
    );
    if (error) {
      response.status(404);
      return {
        msg: "An error occured",
        desc: error,
      };
    }
    return data;
  }
}
