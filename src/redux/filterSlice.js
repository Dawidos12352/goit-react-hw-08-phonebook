import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    filterContact(state, { payload }) {
      return payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;