import { after3Days } from "./date";

it("should do return after3 days ", () => {
  jest.useFakeTimers().setSystemTime(new Date(2024, 3, 9));
  expect(after3Days()).toStrictEqual(new Date(2024, 3, 12));
});

afterEach(() => {
  jest.useRealTimers(); //real time으로 복구 해야함
});
