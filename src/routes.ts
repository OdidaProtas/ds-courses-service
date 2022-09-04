import { CoursesController } from "./controller/CoursesController"

export const Routes = [{
    method: "get",
    route: "/courses",
    controller: CoursesController,
    action: "all"
}, {
    method: "get",
    route: "/courses/:id",
    controller: CoursesController,
    action: "one"
}, {
    method: "post",
    route: "/courses",
    controller: CoursesController,
    action: "save"
}, {
    method: "delete",
    route: "/courses/:id",
    controller: CoursesController,
    action: "remove"
}]