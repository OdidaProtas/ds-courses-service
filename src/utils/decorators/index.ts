abstract class A {}

export function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

export function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

export function getRoutes(arg: string) {
  function f(target) {
    function ff(msg: string) {
      return new target(arg + ":" + msg);
    }
    return typeof [];
  }
  return f;
}
