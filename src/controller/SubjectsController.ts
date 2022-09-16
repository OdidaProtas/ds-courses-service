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

  async courseSubjectSearch(request: Request, response: Response, next: NextFunction) {
    const id = request.query.course_id;
    if (!Boolean(id)) {
      response.status(404);
      return {
        msg: "An error occured",
        desc: "Course ID querystring missing",
      };
    }
    const [data, error] = await trycatch(
      this.subjectsRepository.findBy({
        course: id,
      })
    );

    if (error) {
      response.status(404);
      return {
        desc: error,
        msg: "An error occred",
      };
    }

    return data;
  }

  async all(request: Request, response: Response, next: NextFunction) {
    const [data, error] = await trycatch(this.subjectsRepository.find());
    if (error) {
      response.status(402);
      return {
        msg: "An error occured",
        desc: error,
      };
    }
    return data;
  }
}
