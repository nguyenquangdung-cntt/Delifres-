import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./features/sliderSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
