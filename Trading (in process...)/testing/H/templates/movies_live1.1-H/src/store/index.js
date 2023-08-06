import { configureStore } from "@reduxjs/toolkit";
import movieSettings from "./movie-slice";

const store = configureStore({
  reducer: { moviesettings: movieSettings.reducer },
});

export default store;
