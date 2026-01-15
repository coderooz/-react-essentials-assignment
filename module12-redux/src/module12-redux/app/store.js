import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import pizzaReducer from '../features/pizzaSlice';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    pizza: pizzaReducer,
    cart: cartReducer,
  },
});