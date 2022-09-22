import { AppDataSource } from "../data-source";
import Subject from "../entity/Subject";
import { Request, Response, NextFunction } from "express";
import trycatch from "../utils/trycatch";
import { Unit } from "../entity/Unit";

export class SubjectsController {
  private subjectsRepository = AppDataSource.getRepository(Subject);
  private unitsRepository = AppDataSource.getRepository(Unit);

  async item(request: Request, response: Response, next: NextFunction) {
    const id = request.params.id;

    const [data, err] = await trycatch(
      this.subjectsRepository.find({ where: { id } })
    );

    if (err || !Boolean(data.length)) {
      response.status(404);
      return {
        msg: "An error occured",
        desc: err,
      };
    }

    return data;
  }

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

  async courseSubjectSearch(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
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

  async units(request: Request, response: Response, next: NextFunction) {
    const course = request.params.id;
    const [data, error] = await trycatch(
      this.subjectsRepository.find({ where: course })
    );
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
