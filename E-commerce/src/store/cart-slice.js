import { createSlice } from "@reduxjs/toolkit";

const cartSettings = createSlice({
  name: "cartSettings",
  initialState: {
    productsNumber: 0,
  },
  reducers: {
    productsNumber(state, action) {
      state.productsNumber = state.productsNumber + action.payload;
    },
  },
});

export const cartSettingsActions = cartSettings.actions;

export default cartSettings;
