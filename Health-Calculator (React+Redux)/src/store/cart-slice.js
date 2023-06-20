import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalMealProtein: 0,
    totalMealCalories: 0,
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalMealProtein = action.payload.totalMealProtein;
      state.totalMealCalories = action.payload.totalMealCalories;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalMealProtein = state.totalMealProtein + newItem.protein ;
      state.totalMealCalories = state.totalMealCalories + newItem.calories ;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          calories: newItem.calories,
          protein: newItem.protein,
          quantity: 1,
          totalCalories: newItem.calories,
          totalProtein: newItem.protein,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalCalories = existingItem.totalCalories + newItem.calories;
        existingItem.totalProtein = existingItem.totalProtein + newItem.protein;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalMealProtein = state.totalMealProtein - existingItem.protein ;
      state.totalMealCalories = state.totalMealCalories - existingItem.calories ;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalCalories = existingItem.totalCalories - existingItem.calories;
        existingItem.totalProtein = existingItem.totalProtein - existingItem.protein;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
