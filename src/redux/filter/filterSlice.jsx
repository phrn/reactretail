import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "popular",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action);
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
