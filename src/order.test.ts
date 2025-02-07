import { first, second, third } from "./order";
import * as worker_threads from "node:worker_threads";

it("should first -> second -> third", () => {
  const spy1 = jest.fn(first);
  const spy2 = jest.fn(second);
  const spy3 = jest.fn(third);
  spy1();
  spy2();
  spy3();

  console.log(spy1.mock.invocationCallOrder[0]);
  console.log(spy2.mock.invocationCallOrder[0]);
  console.log(spy3.mock.invocationCallOrder[0]);
  expect(spy1.mock.invocationCallOrder[0]).toBeLessThan(
    spy2.mock.invocationCallOrder[0],
  );

  expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(
    spy2.mock.invocationCallOrder[0],
  );
});

it("인수 일부 테스트 ", () => {
  const fn = jest.fn();

  fn({
    a: {
      b: {
        c: "hello",
      },
      d: "bye",
    },
    e: ["f"],
  });

  //mock 객체를 잘 활용하자
  expect(fn.mock.calls[0][0].a.b.c).toBe("hello");
});
