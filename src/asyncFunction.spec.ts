import * as fns from "./asyncFunction";

test("okpromise test", () => {
  jest.spyOn(fns, "promiseOk").mockResolvedValue("fuck");
  return expect(fns.promiseOk()).resolves.toBe("fuck");
});

test("okpromise test2", () => {
  const okSpy = jest.fn(fns.promiseOk);
  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

test("okpromise test3", async () => {
  const okSpy = jest.fn(fns.promiseOk);
  expect(await okSpy()).toBe("ok");
});

test("promiseNo test", () => {
  const noSpy = jest.fn(fns.promiseNo);
  return expect(noSpy()).rejects.toBe("no"); //rejecet 도 마찬가지로 return 필수
});

test("promiseNo test2", () => {
  const noSpy = jest.fn(fns.promiseNo);
  return noSpy().catch((result) => {
    expect(result).toBe("no");
  });
});

test("okAsync test", () => {
  const okSpy = jest.fn(fns.promiseOk);
  return expect(okSpy()).resolves.toBe("ok"); //resolve 가 들어가면 반드시 return 을 해줘야 Promise가 resolve 될 때 까지 기다린다.
});

test("okAsync test2", () => {
  const okSpy = jest.fn(fns.promiseOk);
  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

test("okAsync test3", async () => {
  const okSpy = jest.fn(fns.promiseOk);
  expect(await okSpy()).toBe("ok");
});
