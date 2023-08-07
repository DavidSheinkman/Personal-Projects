import { createSlice } from "@reduxjs/toolkit";


const movieSettings = createSlice({
  name: "moviesettings",
  initialState: {
    show: null,
    search: "",

  },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    changeShow(state, action) {
      state.show = action.payload;
    },
  },
});

export const movieSettingsActions = movieSettings.actions;

export default movieSettings;
