import { CoursesController } from "./controller/CoursesController"

export const Routes = [{
    method: "get",
    route: "/courses",
    controller: CoursesController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: CoursesController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: CoursesController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: CoursesController,
    action: "remove"
}]