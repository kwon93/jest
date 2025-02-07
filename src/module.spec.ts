import axios from "axios";
jest.mock("axios", () => {
  return {
    test: "test",
  };
});

test("axios mocking ", () => {
  console.log(axios);
});

import { obj } from "./module";

//jest mock 은 호이스팅 되는 성질이 있다.
jest.mock("./module", () => {
  return {
    obj: {
      ...jest.requireActual("./module").obj,
      method3: jest.fn(),
    },
  };
});
it("should ", () => {
  console.log(obj);
});
