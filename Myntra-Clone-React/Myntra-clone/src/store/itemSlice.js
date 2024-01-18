import { createSlice } from "@reduxjs/toolkit";

const itensSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitailItems: (state, action) => {
      return action.payload
    },
  },
});

export const ItemsActions = itensSlice.actions;

export default itensSlice;

