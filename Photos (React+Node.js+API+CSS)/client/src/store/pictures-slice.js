import { createSlice } from "@reduxjs/toolkit";

const pictureSettings = createSlice({
  name: "picturesettings",
  initialState: {
    isModalOpen: false,
    backendData: [],
    selectedCategory: "flowers",
    pageNumber: 1,
    selectedPicture: null,
    selectedPictureModul: false,
    idSort: "ascending",
  },
  reducers: {
    changeIsModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
    changeBackendData(state, action) {
      state.backendData = action.payload;
    },

    changeSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },

    changePageNumberPlus(state, action) {
      if (state.pageNumber < 3) {
        state.pageNumber++;
      }
      
    },
    changePageNumberReset(state, action) {
      state.pageNumber = 1;
    },
    changePageNumberMinus(state, action) {
      if (state.pageNumber > 1) {
        state.pageNumber--;
      }
    },

    changeSelectedPicture(state, action) {
      state.selectedPicture = action.payload;
    },

    changeSelectedPictureModul(state, action) {
      state.selectedPictureModul = action.payload;
    },

    changeIdSort(state, action) {
      state.idSort = action.payload;
    },
  },
});

export const pictureSettingsActions = pictureSettings.actions;

export default pictureSettings;
