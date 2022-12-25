import { createSlice } from '@reduxjs/toolkit';


const initialNightModeState = { nightMode: false , bgClass: "bg-gray-100 h-screen" , bgClass2: "bg-gray-100" , btnTextClass: "text-gray-900"};

const nightModeSlice = createSlice({
  name: 'nightMode',
  initialState: initialNightModeState,
  reducers: {
    toggleNight(state) {
        
        if(!state.nightMode){
            state.nightMode = true
            state.bgClass = "bg-gray-900 h-screen"
            state.bgClass2 = "bg-gray-900"
            state.btnTextClass = "text-gray-100"
        } else {
            state.nightMode = false
            state.bgClass = "bg-gray-100 h-screen"
            state.bgClass2 = "bg-gray-100"
            state.btnTextClass = "text-gray-900"
        }
    },
  },
});

export const nightModeActions = nightModeSlice.actions;

export default nightModeSlice.reducer;