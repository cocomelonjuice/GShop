import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Slice.jsx"

export const store =  configureStore ({
    reducer: {
        cart: cartReducer,
    },
});