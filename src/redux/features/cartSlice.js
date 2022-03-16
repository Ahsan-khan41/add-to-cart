import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Dictionaries/ProductDictionary";

const initialState = {
  productsList: [],
  status: null,
};

// const fetchProductsFunc = async(dispatch) => {
//   const res = await fetch("/api/products") 
//   dispatch({
//     type: "product/fetchProducts",
//     payload: res.data,
//   })
// }

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      alert(action.payload)
    }
  }
});

export const { addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
