import { createSlice } from "@reduxjs/toolkit";

export const autocompleteSlice = createSlice({
  initialState: {
    filteredData: [],
    keyword: "",
  },
  name: "autocomplete",
  reducers: {
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { setFilteredData, setKeyword } = autocompleteSlice.actions;

export default {
  autocomplete: autocompleteSlice.reducer,
};
