import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('sliceProducts/fetchProducts',
  async () => {
    const res = await fetch("http://localhost:9000/products");
    const data = await res.json();
    return data;
  }
)


export const sliceProducts = createSlice({
  name: "sliceProducts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {}  = sliceProducts.actions; 
export default sliceProducts.reducer;