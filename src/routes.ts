import AssesmentsController from "./controller/AssesmentsController";
import BlockController from "./controller/BlockController";
import CourseCategoryController from "./controller/CourseCategory";
import { CoursesController } from "./controller/CoursesController";
import EventsController from "./controller/EventsController";
import StudentsController from "./controller/StudentsController";
import { SubjectsController } from "./controller/SubjectsController";
import UnitsController from "./controller/UnitController";
import { AboutController } from "./entity/about";

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
    route: "/subjects/:id/units",
    controller: SubjectsController,
    action: "units",
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
  {
    method: "post",
    route: "/events",
    controller: EventsController,
    action: "save",
  },
  {
    method: "get",
    route: "/events",
    controller: EventsController,
    action: "all",
  },
  ,
  {
    method: "post",
    route: "/about",
    controller: AboutController,
    action: "save",
  },
  {
    method: "get",
    route: "/about",
    controller: AboutController,
    action: "all",
  },
  {
    method: "post",
    route: "/courses_categories",
    controller: CourseCategoryController,
    action: "save",
  },
  {
    method: "get",
    route: "/courses_categories",
    controller: CourseCategoryController,
    action: "all",
  },
  {
    method: "post",
    route: "/units",
    controller: UnitsController,
    action: "save",
  },
  {
    method: "get",
    route: "/units",
    controller: UnitsController,
    action: "all",
  },
  {
    method: "get",
    route: "/subjects/:id",
    controller: SubjectsController,
    action: "item",
  },
  {
    method: "get",
    route: "/check_stale/:length",
    controller: CourseCategoryController,
    action: "checkState",
  },
];
