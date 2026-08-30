import { configureStore } from "@reduxjs/toolkit";
import DesignSlice from "./DesignSlice";

export const store = configureStore({
  reducer: {
    design: DesignSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;