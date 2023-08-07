import { createSlice } from "@reduxjs/toolkit";


const movieSettings = createSlice({
  name: "moviesettings",
  initialState: {
    show: null,
    search: "",
    shows: null,
    
    searchSuggestions: null,
    

  },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    changeShow(state, action) {
      state.show = action.payload;
    },
    changeShows(state, action) {
      state.shows = action.payload;
    },
    changeSearchSuggestions(state, action) {
      state.searchSuggestions = action.payload;
    },
  },
});

export const movieSettingsActions = movieSettings.actions;

export default movieSettings;
