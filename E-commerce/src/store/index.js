import { configureStore } from "@reduxjs/toolkit";
import cartSettings from "./cart-slice";

const store = configureStore({
  reducer: { cartSettings: cartSettings.reducer },
});

export default store;
