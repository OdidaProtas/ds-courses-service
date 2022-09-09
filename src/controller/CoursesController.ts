import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Course } from "../entity/Course";
import { AppDataSource } from "../data-source";
import trycatch from "../utils/trycatch";

export class CoursesController {
  private userRepository = AppDataSource.getRepository(Course);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const [data, error] = await trycatch(
      this.userRepository.save(request.body)
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

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOneBy({
      id: request.params.id,
    });
    await this.userRepository.remove(userToRemove);
  }
}
