import { obj } from "./toMatchObject";

test("Class 비교는 toMatchObject 를 써야해", () => {
  expect(obj("hello")).toMatchObject({ a: "hello" });
});

test("배열끼리도 toStringEqual 을 써야한다.", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
});
