import { configureStore } from "@reduxjs/toolkit";
import pictureSettings from "./pictures-slice";

const store = configureStore({
  reducer: { picturesettings: pictureSettings.reducer },
});

export default store;
