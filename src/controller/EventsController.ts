import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";
import trycatch from "../utils/trycatch";
import Events from "../entity/events/Events";

export default class EventsController {
  private eventsRepository = AppDataSource.getRepository(Events);

  async save(request: Request, response: Response, next: NextFunction) {
    const slug = request?.body?.title?.split(" ")?.join("_");
    const [data, error] = await trycatch(
      this.eventsRepository.save({ ...request.body, slug })
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
    const [data, error] = await trycatch(this.eventsRepository.find());
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
