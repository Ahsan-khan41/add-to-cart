import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  foundItems: [],
  status: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const orderId = new Date().getTime();

      const foundItems = state.cartItems.find(
        (item) => item.productId === payload.id && item.size === payload.size
      );

      if (foundItems) {
        state.cartItems = state.cartItems.map((product) =>
          product.productId === payload.id && product.size === payload.size
            ? {
                ...product,
                quantity: product.quantity + 1,
                price: product.unitPrice * (payload.quantity + 1),
              }
            : product
        );
      } else {
        state.cartItems.push({
          _id: orderId, // new Id for new Order
          productId: payload.id,
          title: payload.title,
          imageUrl: payload.imageUrl,
          quantity: payload.quantity,
          unitPrice: payload.price,
          price: payload.price * payload.quantity,
          size: payload.size,
        });
      }
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
export const getFoundItems = (state) => state.cart.foundItems;

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, item) => total + item.price, 0);
};

export const { addProduct, deleteProduct, addQuantity, removeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
