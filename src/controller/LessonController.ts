import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";
import trycatch from "../utils/trycatch";
import Subject from "../entity/Subject";
import { Lesson } from "../entity/Lesson";

export default class LessonsController {
  private lessonsRepository = AppDataSource.getRepository(Lesson);
  private subjectsRepository = AppDataSource.getRepository(Subject);

  async save(request: Request, response: Response, next: NextFunction) {
    const slug = request?.body?.title?.split(" ")?.join("_");
    const [data, error] = await trycatch(
      this.lessonsRepository.save({ ...request.body, slug })
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
    const [data, error] = await trycatch(this.lessonsRepository.find());
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
