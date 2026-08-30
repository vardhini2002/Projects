import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface DesignState {
  upper: string;
  sole: string;
  laces: string;
}

const initialState: DesignState = {
  upper: "#FFFFFF",
  sole: "#FFFFFF",
  laces: "#111111",
};

const DesignSlice = createSlice({
  name: "design",

  initialState,

  reducers: {
    setUpperColor: (state, action: PayloadAction<string>) => {
      state.upper = action.payload;
    },

    setSoleColor: (state, action: PayloadAction<string>) => {
      state.sole = action.payload;
    },

    setLacesColor: (state, action: PayloadAction<string>) => {
      state.laces = action.payload;
    },
  },
});

export const {
  setUpperColor,
  setSoleColor,
  setLacesColor,
} = DesignSlice.actions;

export default DesignSlice.reducer;