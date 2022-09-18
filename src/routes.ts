import BlockController from "./controller/BlockController";
import { CoursesController } from "./controller/CoursesController";
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
];
