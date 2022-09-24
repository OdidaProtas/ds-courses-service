import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";
import trycatch from "../utils/trycatch";
import Subject from "../entity/Subject";
import SubTopic from "../entity/SubTopic";

export default class SubTopicController {
  private subtopicRepository = AppDataSource.getRepository(SubTopic);
  private subjectsRepository = AppDataSource.getRepository(Subject);

  async save(request: Request, response: Response, next: NextFunction) {
    const slug = request?.body?.title?.split(" ")?.join("_");
    const [data, error] = await trycatch(
      this.subtopicRepository.save({ ...request.body, slug })
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

  async one(request: Request, response: Response, next: NextFunction) {
    const [data, error] = await trycatch(
      this.subtopicRepository.find({ where: { id: request.params.id } })
    );
    if (error) {
      response.status(404);
      return {
        msg: "An error occured",
        desc: error,
      };
    }
    return data[0];
  }

  async all(request: Request, response: Response, next: NextFunction) {
    const [data, error] = await trycatch(this.subtopicRepository.find());
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
