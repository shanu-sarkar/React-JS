import { configureStore } from "@reduxjs/toolkit";
import itensSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";



const myntraStore = configureStore({
  reducer: {
    items: itensSlice.reducer,
    fetchStetus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer
    
  },
});

export default myntraStore;
