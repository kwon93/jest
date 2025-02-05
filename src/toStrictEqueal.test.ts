import { obj } from "./toStrictEqual";

test("should be literal Object", () => {
  expect(obj()).toStrictEqual({ a: "hello" });
});
