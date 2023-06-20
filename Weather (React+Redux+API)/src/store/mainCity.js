import { createSlice } from '@reduxjs/toolkit';
//animations:
import foggy from "../assets/foggy.gif";
import partlyCloudy from "../assets/partly-cloudy.gif";
import snow from "../assets/snow.gif";
import snowSunny from "../assets/snow-sunny.gif";
import storm from "../assets/storm.gif";
import sunny from "../assets/sunny.gif";
import windy from "../assets/windy.gif";

const initialMainCityState = { name: 'Tel Aviv' , gif: sunny, weatherNow : {Temperature: {Metric : {Value : "0"},Imperial : {Value : "0"}}}, fiveDays : []  };

const mainCitySlice = createSlice({
  name: 'mainCity',
  initialState: initialMainCityState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeWeatherNow(state, action) {
      state.weatherNow = action.payload;

      

      if (action.payload.WeatherIcon === 2 || action.payload.WeatherIcon === 1){
        state.gif = sunny
      }

      if (action.payload.WeatherIcon === 3 || action.payload.WeatherIcon === 4 ){
        state.gif = partlyCloudy
      }

      if (action.payload.WeatherIcon === 5 || action.payload.WeatherIcon === 6){
        state.gif = foggy
      }

      if (action.payload.WeatherIcon === 7 || action.payload.WeatherIcon === 8 || action.payload.WeatherIcon === 11){
        state.gif = windy
      }

      if (action.payload.WeatherIcon >= 12 && action.payload.WeatherIcon <= 18){
        state.gif = storm
      }

      if (action.payload.WeatherIcon >= 19 && action.payload.WeatherIcon <= 23){
        state.gif = snowSunny
      }

      if (action.payload.WeatherIcon >= 24 && action.payload.WeatherIcon <= 29){
        state.gif = snow
      }

    },
    changeFiveDays(state, action) {
      state.fiveDays = action.payload;
    },
  },
});

export const mainCityActions = mainCitySlice.actions;

export default mainCitySlice.reducer;