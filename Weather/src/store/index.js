import { configureStore } from '@reduxjs/toolkit';

import mainCityReducer from './mainCity';
import favoritesReducer from './favorites';
import nightModeReducer from './nightMode';



const store = configureStore({
  reducer: { mainCity: mainCityReducer , favorites:favoritesReducer , nightMode:nightModeReducer },
});

export default store;
