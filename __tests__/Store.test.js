import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../src/services";
import rootReducer from "../src/store/reducers";

describe("store", () => {
  it("should set up the store with epic middleware and root reducer", () => {
    const epicMiddleware = createEpicMiddleware();
    const store = configureStore({
      reducer: rootReducer,
      middleware: [epicMiddleware],
    });

    expect(store).toBeDefined();
    expect(store.getState()).toEqual(rootReducer(undefined, {}));

    epicMiddleware.run(rootEpic);
  });
});
