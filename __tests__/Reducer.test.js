import { autocompleteSlice, setFilteredData, setKeyword } from "../src/store/reducers";

describe("autocompleteSlice", () => {
  const initialState = {
    filteredData: [],
    keyword: "",
  };

  it("should return the initial state", () => {
    expect(autocompleteSlice.reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle setFilteredData", () => {
    const filteredData = [{ description: "Hello world" }];
    const nextState = autocompleteSlice.reducer(initialState, setFilteredData(filteredData));
    const expectedState = {
      filteredData,
      keyword: "",
    };
    expect(nextState).toEqual(expectedState);
  });

  it("should handle setKeyword", () => {
    const keyword = "hello";
    const nextState = autocompleteSlice.reducer(initialState, setKeyword(keyword));
    const expectedState = {
      filteredData: [],
      keyword,
    };
    expect(nextState).toEqual(expectedState);
  });
});
