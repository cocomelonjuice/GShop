import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { getTotals } from "../features/Slice.jsx";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
