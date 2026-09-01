import {
  createSlice,
 type PayloadAction,
} from "@reduxjs/toolkit";

interface DesignState {
  model: string;

  components: {
    upper: string;
    sole: string;
    laces: string;
  };
}

const initialState: DesignState = {
  model: "runner-v1",

  components: {
    upper: "#FFFFFF",
    sole: "#FFFFFF",
    laces: "#111111",
  },
};

const DesignSlice = createSlice({
  name: "design",

  initialState,

  reducers: {
    setUpperColor: (
      state,
      action: PayloadAction<string>
    ) => {
      state.components.upper = action.payload;
    },

    setSoleColor: (
      state,
      action: PayloadAction<string>
    ) => {
      state.components.sole = action.payload;
    },

    setLacesColor: (
      state,
      action: PayloadAction<string>
    ) => {
      state.components.laces = action.payload;
    },

    resetDesign: (state) => {
      state.components.upper = "#FFFFFF";
      state.components.sole = "#FFFFFF";
      state.components.laces = "#111111";
    },
  },
});

export const {
  setUpperColor,
  setSoleColor,
  setLacesColor,
  resetDesign,
} = DesignSlice.actions;

export default DesignSlice.reducer;