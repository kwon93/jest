import { error } from "./throwFunction";

test("error 잘 터지나 ", () => {
  expect(() => error()).toThrow(Error); //함수로 한번 감싸야 한다.
});


test("custom error test", () => {
    try {
        error();
    }catch (err) {
        expect(err).toStrictEqual(new Error());
    }
})
