import { sum, obj } from "./toHaveBeenCalled";

test("sum function이 호출 되었다", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalled();
});

test("sum function이  1번 호출 되었다", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("sum function이  1,2와 함께 호출 되었다", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test("obj.minus 함수가 1번 호출 되었다", () => {
  const minusSpy = jest.spyOn(obj, "minus");
  obj.minus(2, 1);
  expect(minusSpy).toHaveBeenCalledTimes(1);
});
