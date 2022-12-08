import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './cardSlice';
import  sliceProducts  from './slice';

export const store = configureStore({
  reducer: {
    products: sliceProducts,
    card: cardSlice,
  },
});