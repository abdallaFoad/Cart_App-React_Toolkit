import { createSlice } from "@reduxjs/toolkit";


export const cardSlice = createSlice({
  name: 'cardSlice',
  initialState: [],
  reducers: {
    addToCard: (state, action) => {
      const find = state.find((p) => p.id === action.payload.id);
      if (find) {
        find.quantity += 1;
      } else {
        const addQuantity = { ...action.payload, quantity: 1 };
        state.push(addQuantity);
      }
    },
    removeFromCard: (state, action) => {
      return state.filter((e) => e.id !== action.payload.id)
     },
    clearCard: (state, action) => {
      return [];
     },
  }
});

export const { addToCard, removeFromCard, clearCard } = cardSlice.actions;
export default cardSlice.reducer;