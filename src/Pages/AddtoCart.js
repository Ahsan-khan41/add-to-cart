import React, { useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { CartProductCard, PurchaseCard, EmptyCart } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartItems,
  getTotalPrice,
  deleteProduct,
  getFoundItems,
} from "../redux/features/cartSlice";

const AddtoCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const foundItems = useSelector(getFoundItems);
  const total = useSelector(getTotalPrice);

  const [cartData, setCartData] = useState(cartItems);

  const onDelete = (product) => {
    dispatch(deleteProduct(product)); //deletes the object from cartItems
  };
console.log(cartData.length);
  return (
    <>
      <Box
        display="grid"
        direction="column"
        sx={{ m: 3, padding: "1vw 2.5vw 1vw 2.5vw" }}
      >
        <Typography variant="h4">Shopping Bag</Typography>
        <Grid container direction="row" spacing={2}>
          <Divider />
          <Grid item display="flex" sx={{ flexFlow: "column" }} sm={12} md={8}>
            {cartData.length === 0 ? (
              <EmptyCart />
            ) : (
              cartItems.map((item, index) => (
                <CartProductCard
                  key={index}
                  item={item}
                  onDelete={() => onDelete(item)}
                />
              ))
            )}
          </Grid>
          <Grid item sm={12} md={4}>
            <PurchaseCard total={total} subTotal={total} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddtoCart;
