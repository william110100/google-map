import { TestScheduler } from "rxjs/testing";
import { filterDataEpic } from "../src/services";
import { setKeyword, setFilteredData } from "../src/store/reducers";

describe("filterDataEpic", () => {
  let testScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it("should filter data based on keyword", () => {
    const keyword = "hello";
    const inputValue = setKeyword(keyword);
    const expectedOutput = setFilteredData([{ description: "Hello world" }]);
    const data = {
      predictions: [{ description: "Hello world" }, { description: "Goodbye" }],
    };

    testScheduler.run(({ hot, expectObservable }) => {
      const action$ = hot("-a", { a: inputValue });
      const output$ = filterDataEpic(action$, null, { data });

      expectObservable(output$).toBe("500ms -b", { b: expectedOutput });
    });
  });
});
