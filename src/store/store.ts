import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import basket from "./slices/basketSlice";
import bober from "./slices/bobersSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    filter,
    basket,
    bober,
  },
});
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch