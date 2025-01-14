import { createSlice } from "@reduxjs/toolkit";

const year = String(new Date().getFullYear());
const month = String(new Date().getMonth() + 1);
const day = String(new Date().getDate());

const initialState = {
  date: { day, month, year },
  currentType: "expenses",
  currentCategory: "Продукты",
};

const dateSlice = createSlice({
  name: "extraInfo",
  initialState,
  reducers: {
    addDate: (state, action) => {
      state.date = action.payload;
    },

    addCurrentType: (state, action) => {
      state.currentType = action.payload;
    },

    addCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },

    goBackOneMonth: (state, action) => {
      if (Number(state.date.month) === 1) {
        state.date.year = Number(state.date.year) - 1;
        state.date.month = 12;
        return;
      }

      state.date.month = Number(state.date.month) - 1;
    },
    goForwardOneMonth: (state, action) => {
      if (Number(state.date.month) === 12) {
        state.date.year = Number(state.date.year) + 1;
        state.date.month = 1;
        return;
      }

      state.date.month = Number(state.date.month) + 1;
    },
  },
});

export const {
  addDate,
  addCurrentType,
  addCurrentCategory,
  goBackOneMonth,
  goForwardOneMonth,
} = dateSlice.actions;

export default dateSlice.reducer;
