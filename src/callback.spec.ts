import { timer } from "./callback";

test("timer test", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done(); //테스트 지연 함수
  });
});
