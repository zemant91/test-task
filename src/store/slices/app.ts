import { createSlice, createSelector } from "@reduxjs/toolkit";

export interface AppState {
  pageNumber: number;
}

const initialState: AppState = {
  pageNumber: 1,
};

const sliceName = "app";

const appSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    nextPage(state) {
      state.pageNumber += 1;
    },
    prevPage(state) {
      state.pageNumber -= 1;
    },
  },
});

export default appSlice.reducer;

export const appActions = appSlice.actions;

const selectState = (
  state: unknown & {
    [sliceName]: AppState;
  }
) => state;

export const appSelectors = {
  app: createSelector(selectState, (state) => state.app),
};
