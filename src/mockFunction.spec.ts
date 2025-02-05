import { obj } from "./toHaveBeenCalled";

beforeAll(() => {
  console.log("DB connect");
});
afterEach(() => {
  console.log("mock 정리시에");
  jest.restoreAllMocks();
});
afterAll(() => {
  console.log("resource 정리 ");
});

describe("test들을 묶는 단위 ", () => {
  beforeEach(() => {
    console.log("변수 초기화");
  });

  test("obj.minus 함수가 1번 호출 되었다 (spy insert)", () => {
    const spyFn = jest.spyOn(obj, "minus");
    const result = obj.minus(2, 1);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(1);
    // spyFn.mockClear(); //spy time clear 해버리기
    // spyFn.mockReset(); // mockImplementation 도
    // spyFn.mockRestore(); //mock 관련 깡그리 비우기
  });

  test("obj.minus spy 심고 실제 실행은 안되고 호출만  (spy insert)", () => {
    jest.spyOn(obj, "minus").mockImplementation();
    const result = obj.minus(2, 1);
    expect(obj.minus).toHaveBeenCalledTimes(1);
  });

  test("mock Implementation", () => {
    jest.spyOn(obj, "minus").mockImplementation((a, b) => a + b); //mocking 처리가 임의로 가능해진다
    const result = obj.minus(2, 1);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(3);
  });
});


test("mock ImplementationOnce", () => {
  jest
    .spyOn(obj, "minus")
    .mockImplementationOnce((a, b) => a + b)
    .mockImplementationOnce(() => 5); // 딱 한번의 mocking 처리가 가능해진다
  const result1 = obj.minus(2, 1);
  const result2 = obj.minus(2, 1);
  const result3 = obj.minus(2, 1);
  const result4 = obj.minus(2, 1);
  const result5 = obj.minus(2, 1);
  expect(obj.minus).toHaveBeenCalledTimes(5);
  expect(result1).toBe(3);
  expect(result2).toBe(5);
  expect(result3).toBe(1);
  expect(result4).toBe(1);
  expect(result5).toBe(1);
});

test("mock ImplementationReturnValue", () => {
  jest.spyOn(obj, "minus").mockReturnValue(5); //return 값만 mocking 처리
  const result1 = obj.minus(2, 1);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result1).toBe(5);
});
