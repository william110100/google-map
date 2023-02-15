import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../services";
import rootReducer from "./reducers";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  middleware: [epicMiddleware],
  reducer: rootReducer,
});

epicMiddleware.run(rootEpic)

export default store;
