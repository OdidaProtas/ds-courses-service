import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";
import trycatch from "../utils/trycatch";
import { Assesments } from "../entity/students/Assesments";

export default class AssesmentsController {
  private assesmentsRepository = AppDataSource.getRepository(Assesments);

  async save(request: Request, response: Response, next: NextFunction) {
    const slug = request?.body?.title?.split(" ")?.join("_");
    const [data, error] = await trycatch(
      this.assesmentsRepository.save({ ...request.body, slug })
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
    const [data, error] = await trycatch(this.assesmentsRepository.find());
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
