import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SneakerComponent =
  | "upper"
  | "heel"
  | "tongue"
  | "midsole"
  | "outsole"
  | "laces"
  | "toe"
  | "logo";

interface DesignState {
  model: string;
  components: Record<SneakerComponent, string>;
}

const initialState: DesignState = {
  model: "runner-v1",

  components: {
   upper: "#FF0000",
    heel: "#E5E5E5",
    tongue: "#D9D9D9",
    midsole: "#FFFFFF",
    outsole: "#CFCFCF",
    laces: "#171717",
    toe: "#EEEEEE",
    logo: "#171717",
  },
};

const designSlice = createSlice({
  name: "design",

  initialState,

  reducers: {
    setComponentColor: (
      state,
      action: PayloadAction<{
        component: SneakerComponent;
        color: string;
      }>
    ) => {
      state.components[action.payload.component] = action.payload.color;
    },

    resetDesign: (state) => {
      state.components = initialState.components;
    },
  },
});

export const {
  setComponentColor,
  resetDesign,
} = designSlice.actions;

export default designSlice.reducer;