import { combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import { debounceTime, switchMap } from "rxjs/operators";
import data from "../data.json";
import { setFilteredData, setKeyword } from "../store/reducers";

const filterDataEpic = (action$) => {
  return action$.pipe(
    debounceTime(500),
    ofType(setKeyword.type),
    switchMap((action) => {
      const inputValue = action.payload;

      const filteredData = data.predictions.filter((value) =>
        value.description.toLowerCase().includes(inputValue.toLowerCase()),
      );
      return of(setFilteredData(filteredData));
    }),
  );
};

export const rootEpic = combineEpics(filterDataEpic);
