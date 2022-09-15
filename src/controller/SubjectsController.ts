import { AppDataSource } from "../data-source";
import Subject from "../entity/Subject";
import { Request, Response, NextFunction } from "express";
import trycatch from "../utils/trycatch";

export class SubjectsController {
  private subjectsRepository = AppDataSource.getRepository(Subject);

  async save(request: Request, response: Response, next: NextFunction) {
    const [data, error] = await trycatch(
      this.subjectsRepository.save(request.body)
    );
    if (error) {
      response.status(402);
      return {
        msg: "An error occred",
        desc: error,
      };
    }
    return data;
  }
}
