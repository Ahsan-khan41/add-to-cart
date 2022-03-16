import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Dictionaries/ProductDictionary";

const initialState = {
  productsList: "[]",
  status: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      state.productsList = action.payload;
      console.log(state.productsList);
    },
  },
});

export const { fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;
