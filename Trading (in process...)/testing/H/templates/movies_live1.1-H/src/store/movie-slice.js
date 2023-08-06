import { createSlice } from "@reduxjs/toolkit";


const movieSettings = createSlice({
  name: "moviesettings",
  initialState: {
    movie: null,
    search: "",
    movies: null,
    
    searchSuggestions: null,
    

  },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    changeMovie(state, action) {
      state.movie = action.payload;
    },
    changeMovies(state, action) {
      state.movies = action.payload;
    },
    changeSearchSuggestions(state, action) {
      state.searchSuggestions = action.payload;
    },
  },
});

export const movieSettingsActions = movieSettings.actions;

export default movieSettings;
