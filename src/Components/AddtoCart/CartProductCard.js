import React from "react";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartItems,
  addProduct,
  addQuantity,
  removeQuantity,
} from "../../redux/features/cartSlice";

export default function CartProductCard  (props) {
  const { item } = props;
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const onAddClick = () => {
    const { quantity, _id, price } = item;
    dispatch(addQuantity({ quantity, _id, price }));
  };
  const onRemoveClick = () => {
    const { quantity } = item;
    dispatch(removeQuantity({ quantity, _id: item._id }));
  };
  return (
    <>
      <Card
        sx={{
          display: "flex",
          width: "auto",
          // height: "20vh",
          padding: "3vh 1vw 5vh 0",
        }}
        elevation={0}
      >
        <CardMedia
          component="img"
          sx={{
            // minWidth: "60px",
            minHeight: "60px",
            height: "100px",
            width: "100px",
          }}
          image={item.imageUrl}
          alt={item.imageUrl}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
          }}
        >
          <CardContent
            sx={{
              flex: "1",
              minHeight: "fit-content",
              width: "100%",
              p: "10px",
              justifyContent: "space-between",
            }}
          >
            <Grid
              container
              direction="row"
              // justifyContent="space-between"
              alignItems="center"
              spacing={4}
            >
              <Grid item sm={6} md={8}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography variant="caption">
                  Size: 8.0 <br />
                  Color: Wolf Grey/Kumquat/Cool Grey/White
                  <br />
                  Qualifies for Free Shipping
                </Typography>
              </Grid>
              <Grid item sm={3} md={2}>
                <Typography>
                  <IconButton
                    disabled={item.quantity > 1 ? false : true}
                    onClick={onRemoveClick}
                    aria-label="remove"
                    color="primary"
                  >
                    <RemoveIcon />
                  </IconButton>
                  {item.quantity} QTY
                  <IconButton
                    onClick={onAddClick}
                    aria-label="add"
                    color="primary"
                  >
                    <AddIcon />
                  </IconButton>
                </Typography>
              </Grid>
              <Grid item sm={2} md={1}>
                <Typography>${item.price}</Typography>
              </Grid>
              <Grid item sm={1} md={1}>
                <IconButton onClick={props.onDelete}>
                  <DeleteIcon color="warning" />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
      <Divider sx={{ mt: 0.5 }} />
    </>
  );
};