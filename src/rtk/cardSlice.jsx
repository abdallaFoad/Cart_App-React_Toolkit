import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cardItem")
  ? JSON.parse(localStorage.getItem("cardItem"))
  : [];

const initialState = {
  cardItems: items || [],
};

const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const existItem = state.cardItems.find(
        (item) => item.id === action.payload.id
      );

      if (existItem) {
        existItem.quantity += 1;
      } else {
        const addQuantity = { ...action.payload, quantity: 1 };
        state.cardItems.push(addQuantity);
      }

      localStorage.setItem("cardItem", JSON.stringify(state.cardItems));
    },

    removeFromCard: (state, action) => {
      const existItem = state.cardItems.find(
        (item) => item.id === action.payload.id
      );
      if (existItem) {
        state.cardItems = state.cardItems.filter(
          (e) => e.id !== action.payload.id
        );
      }
    },
    clearCard: (state, action) => {
      return localStorage.clear('cardItem');
      // return state.cardItems = [];
    },
  },
});

export const { addToCard, removeFromCard, clearCard } = cardSlice.actions;
export default cardSlice.reducer;
