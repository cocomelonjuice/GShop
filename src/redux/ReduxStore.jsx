import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/Slice.jsx"

export const store =  configureStore ({
    reducer: {
        cart: cartSlice,
    },
});