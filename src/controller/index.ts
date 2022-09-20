export class ControllerClass {
  public controllerRoutes: any[] = [];

  constructor() {
    console.log("calling class constructor");
  }

  set defaultRoutes(routes) {
    this.controllerRoutes = routes;
  }

  get defaultRoutes() {
    return this.controllerRoutes;
  }
}

export function Controller(constructor: Function) {
  return class extends ControllerClass {
    constructor() {
      super();
      this.controllerRoutes = ["red"];
    }
  };
}
