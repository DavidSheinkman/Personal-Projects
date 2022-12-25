import { createSlice } from '@reduxjs/toolkit';


const initialMainCityState = { favoritesCities: [] , buttonStatus : false ,imgsrc: "https://img.icons8.com/pastel-glyph/128/hearts--v1.png" , btnText: "Add to Favorites" };

const favoritesSlice = createSlice({
  name: 'mainCity',
  initialState: initialMainCityState,
  reducers: {
    addCity(state, action) {
      
      if (!state.favoritesCities.filter(e => e.name === action.payload.name).length > 0) {
        state.favoritesCities.push(action.payload);
      }else{
        state.favoritesCities = state.favoritesCities.filter((e) => e.name !== action.payload.name);
        state.buttonStatus = false;
        state.imgsrc = "https://img.icons8.com/pastel-glyph/128/hearts--v1.png";
        state.btnText = "Add to Favorites";
      }
      
    },
    checkButton(state, action) {
      state.buttonStatus = false;
      state.imgsrc = "https://img.icons8.com/pastel-glyph/128/hearts--v1.png";
      state.btnText = "Add to Favorites";
      if (state.favoritesCities.filter(e => e.name === action.payload).length > 0) {
        state.buttonStatus = true;
        state.imgsrc = "https://img.icons8.com/cotton/128/hearts--v2.png";
        state.btnText = "Remove from Favorites";
      }
      
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;