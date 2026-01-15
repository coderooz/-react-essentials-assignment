import { createSlice } from '@reduxjs/toolkit';

const PRICES = {
  Small: 10, Medium: 14, Large: 18,
  toppings: 1.5,
  sides: 3,
};

const initialState = {
  size: 'Medium',
  crust: 'Thin',
  toppings: [],
  sides: [],
  currentPrice: 14, // Default Medium Price
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzaOption: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    toggleArrayItem: (state, action) => {
      const { type, value } = action.payload; // type = 'toppings' or 'sides'
      const list = state[type];
      if (list.includes(value)) {
        state[type] = list.filter((item) => item !== value);
      } else {
        state[type].push(value);
      }
    },
    calculatePrice: (state) => {
      const sizePrice = PRICES[state.size] || 0;
      const toppingsPrice = state.toppings.length * PRICES.toppings;
      const sidesPrice = state.sides.length * PRICES.sides;
      state.currentPrice = sizePrice + toppingsPrice + sidesPrice;
    },
    resetPizzaState: () => initialState,
  },
});

export const { setPizzaOption, toggleArrayItem, calculatePrice, resetPizzaState } = pizzaSlice.actions;
export default pizzaSlice.reducer;