import AssesmentsController from "./controller/AssesmentsController";
import BlockController from "./controller/BlockController";
import { CoursesController } from "./controller/CoursesController";
import StudentsController from "./controller/StudentsController";
import { SubjectsController } from "./controller/SubjectsController";

export const Routes = [
  {
    method: "get",
    route: "/courses",
    controller: CoursesController,
    action: "all",
  },
  {
    method: "get",
    route: "/courses/:id",
    controller: CoursesController,
    action: "one",
  },
  {
    method: "post",
    route: "/courses",
    controller: CoursesController,
    action: "save",
  },
  {
    method: "delete",
    route: "/courses/:id",
    controller: CoursesController,
    action: "remove",
  },

  {
    method: "post",
    route: "/subjects",
    controller: SubjectsController,
    action: "save",
  },
  {
    method: "get",
    route: "/subjects",
    controller: SubjectsController,
    action: "all",
  },
  {
    method: "get",
    route: "/course-subjects",
    controller: SubjectsController,
    action: "courseSubjectSearch",
  },
  {
    method: "post",
    route: "/blog-topics",
    controller: BlockController,
    action: "save",
  },
  {
    method: "get",
    route: "/blog-topics",
    controller: BlockController,
    action: "all",
  },
  ,
  {
    method: "post",
    route: "/articles",
    controller: BlockController,
    action: "saveArticles",
  },
  {
    method: "get",
    route: "/articles",
    controller: BlockController,
    action: "allArticles",
  },
  {
    method: "post",
    route: "/students",
    controller: StudentsController,
    action: "save",
  },
  {
    method: "get",
    route: "/students",
    controller: StudentsController,
    action: "all",
  },
  {
    method: "post",
    route: "/assesments",
    controller: AssesmentsController,
    action: "save",
  },
  {
    method: "get",
    route: "/assesments",
    controller: AssesmentsController,
    action: "all",
  },
  
  
]
