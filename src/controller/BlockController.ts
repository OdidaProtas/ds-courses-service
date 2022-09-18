import { AppDataSource } from "../data-source";
import BlogTopic from "../entity/blog/BlogTopic";
import { Request, Response, NextFunction } from "express";
import trycatch from "../utils/trycatch";
import BlogArticle from "../entity/blog/BlogArticle";
export default class BlockController {
  private blogTopicRepository = AppDataSource.getRepository(BlogTopic);

  private articleRepository = AppDataSource.getRepository(BlogArticle);

  async save(request: Request, response: Response, next: NextFunction) {
    const slug = request.body.title.split(" ").join("_");
    const [data, error] = await trycatch(
      this.blogTopicRepository.save({ ...request.body, slug })
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
    const [data, error] = await trycatch(this.blogTopicRepository.find());
    if (error) {
      response.status(404);
      return {
        msg: "An error occured",
        desc: error,
      };
    }
    return data;
  }

  async saveArticles(request: Request, response: Response, next: NextFunction) {
    const slug = request.body.title.split(" ").join("_");
    const [data, error] = await trycatch(
      this.articleRepository.save({ ...request.body, slug })
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


  async allArticles(request: Request, response: Response, next: NextFunction) {
    const slug = request.body.title.split(" ").join("_");
    const [data, error] = await trycatch(
      this.blogTopicRepository.save({ ...request.body, slug })
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
