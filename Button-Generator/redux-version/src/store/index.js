import { configureStore } from '@reduxjs/toolkit';
import btncssSlice from './btncss-slice';

const store = configureStore({
  reducer: {  btncss: btncssSlice.reducer },
});

export default store;
