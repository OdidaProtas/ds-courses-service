import { AppDataSource } from "../data-source";
import CourseCategories from "../entity/CourseCategories";
import { Request, Response, NextFunction } from "express";
import trycatch from "../utils/trycatch";

export default class CourseCategoryController {
  private courseCategoryRepository =
    AppDataSource.getRepository(CourseCategories);

  async save(request: Request, response: Response, next: NextFunction) {
    const [category, error] = await trycatch(
      this.courseCategoryRepository.save({ ...request.body })
    );
    if (error) {
      response.status(403);
      return {
        msg: "An error occured",
        desc: error,
      };
    }
    return category;
  }

  async all(request: Request, response: Response, next: NextFunction) {
    const [category, error] = await trycatch(
      this.courseCategoryRepository.find()
    );
    if (error) {
      response.status(403);
      return {
        msg: "An error occured",
        desc: error,
      };
    }
    return category;
  }
}
