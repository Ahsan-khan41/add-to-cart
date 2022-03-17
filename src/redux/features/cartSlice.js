import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  status: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const newId = new Date().getTime();

      state.cartItems.push({
        _id: newId, // new Id for new Order
        productId: payload.id,
        title: payload.title,
        imageUrl: payload.imageUrl,
        quantity: payload.quantity,
        unitPrice: payload.price,
        price: payload.price * payload.quantity,
      });
    },
    deleteProduct: (state, { payload }) => {
      const newState = state.cartItems.filter(
        (item) => item._id !== payload._id
      );
      state.cartItems = newState;
    },
    addQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((product) =>
        product._id === payload._id
          ? {
              ...product,
              quantity: payload.quantity + 1,
              price: product.unitPrice * (payload.quantity + 1),
            }
          : product
      );
    },
    removeQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((product) =>
        product._id === payload._id
          ? {
              ...product,
              quantity: payload.quantity - 1,
              price: product.price - product.unitPrice,
            }
          : product
      );
    },
  },
});

export const getCartItems = (state) => state.cart.cartItems;

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, item) => total + item.price, 0);
};

export const { addProduct, deleteProduct, addQuantity, removeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
