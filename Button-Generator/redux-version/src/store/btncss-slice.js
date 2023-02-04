import { createSlice } from "@reduxjs/toolkit";

const btncssSlice = createSlice({
  name: "btncss",
  initialState: {
    buttonText: "My Button",
    bgColor: "#0066CC",
    textColor: "#FFFFFF",
    borderColor: "#0066CC",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Arial",
    fontStyle: "normal",
    paddingintV: 10,
    paddingintH: 30,
    borderRadius: 50,
    borderSize: 1,
    boxShadowPositionH: 0,
    boxShadowPositionV: 0,
    boxShadowBlurRadius: 0,
    boxShadowSpreadRadius: 0,
    boxShadowColor: "#FFFFFF",
    textShadowPositionH: 0,
    textShadowPositionV: 0,
    textShadowBlurRadius: 0,
    textShadowColor: "#FFFFFF",
    bgColorHover: "#FFFFFF",
    textColorHover: "#0066CC",
    borderColorHover: "#0066CC",
    gifLink: "",
  },
  reducers: {
    changeButtonText(state, action) {
      state.buttonText = action.payload;
    },
    changeBgColor(state, action) {
      state.bgColor = action.payload;
    },
    changeTextColor(state, action) {
      state.textColor = action.payload;
    },
    changeBorderColor(state, action) {
      state.borderColor = action.payload;
    },
    changeFontSize(state, action) {
      state.fontSize = action.payload;
    },
    changeFontWeight(state, action) {
      state.fontWeight = action.payload;
    },
    changeFontFamily(state, action) {
      state.fontFamily = action.payload;
    },
    changeFontStyle(state, action) {
      state.fontStyle = action.payload;
    },
    changePaddingintV(state, action) {
      state.paddingintV = action.payload;
    },
    changePaddingintH(state, action) {
      state.paddingintH = action.payload;
    },
    changeBorderRadius(state, action) {
      state.borderRadius = action.payload;
    },
    changeBorderSize(state, action) {
      state.borderSize = action.payload;
    },
    changeBoxShadowPositionH(state, action) {
      state.boxShadowPositionH = action.payload;
    },
    changeBoxShadowPositionV(state, action) {
      state.boxShadowPositionV = action.payload;
    },
    changeBoxShadowBlurRadius(state, action) {
      state.boxShadowBlurRadius = action.payload;
    },
    changeBoxShadowSpreadRadius(state, action) {
      state.boxShadowSpreadRadius = action.payload;
    },
    changeBoxShadowColor(state, action) {
      state.boxShadowColor = action.payload;
    },
    changeTextShadowPositionH(state, action) {
      state.textShadowPositionH = action.payload;
    },
    changeTextShadowPositionV(state, action) {
      state.textShadowPositionV = action.payload;
    },
    changeTextShadowBlurRadius(state, action) {
      state.textShadowBlurRadius = action.payload;
    },
    changeTextShadowColor(state, action) {
      state.textShadowColor = action.payload;
    },
    changeBgColorHover(state, action) {
      state.bgColorHover = action.payload;
    },
    changeTextColorHover(state, action) {
      state.textColorHover = action.payload;
    },
    changeBorderColorHover(state, action) {
      state.borderColorHover = action.payload;
    },
    changeGifLink(state, action) {
      state.gifLink = action.payload;
    },
  },
});

export const btncssActions = btncssSlice.actions;

export default btncssSlice;
