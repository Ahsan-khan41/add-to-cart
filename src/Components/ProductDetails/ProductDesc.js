import React, { useState, useEffect } from "react";
import { Typography, Divider, Box, Chip, Button } from "@mui/material";
import VariantImageList from "./VariantImageList";
import StarIcon from "@mui/icons-material/Star";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/cartSlice";

const useStyles = makeStyles({
  thechipNotSeleted: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    color: "#000",
  },
  thechipSeleted: {
    backgroundColor: "#666",
    color: "#fff",
  },
});

const ProductDesc = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const arrayList = [
    {
      title: "Running Shoes",
      img: "https://media.finishline.com/s/finishline/GZ9260_100?$default$&w=87&h=87&bg=rgb(237,237,237)",
    },
    {
      title: "Running Shoes",
      img: "https://media.finishline.com/s/finishline/GZ9257_001?$default$&w=87&h=87&bg=rgb(237,237,237)",
    },
    {
      title: "Running Shoes",
      img: "https://media.finishline.com/s/finishline/GZ9256_001?$default$&w=87&h=87&bg=rgb(237,237,237)",
    },
    {
      title: "Running Shoes",
      img: "https://media.finishline.com/s/finishline/GZ9259_100?$default$&w=87&h=87&bg=rgb(237,237,237)",
    },
    {
      title: "Running Shoes",
      img: "https://media.finishline.com/s/finishline/GZ9261_100?$default$&w=87&h=87&bg=rgb(237,237,237)",
    },
    {
      title: "Running Shoes",
      img: "https://media.finishline.com/s/finishline/GZ9261_100?$default$&w=87&h=87&bg=rgb(237,237,237)",
    },
  ];
  const ratingsStar = [1, 2, 3, 4, 5];
  const [sizes, setSizes] = useState([]);
  const [i, setI] = useState();
  const [chipVariant, setChipVariant] = useState(false);
  const [chipSelected, setChipSelected] = useState(false);
  const [sizeSelected, setSizeSelected] = useState("");

  useEffect(() => {
    if (product) {
      setSizes(product.variants);
    }
  }, [product]);

  const chipHandler = (index, size) => {
    setI(index);
    setChipSelected(!chipSelected);
    setSizeSelected(size);
    setChipVariant(true);
  };

  const addtoCartHandler = () => {
    // adding product to Cart
    product.size = sizeSelected;
    dispatch(addProduct(product));
  };

  return (
    <>
      <Box>
        <Typography variant="body2">
          {ratingsStar.map((item, index) => (
            <StarIcon key={index} sx={{ fontSize: 17 }} />
          ))}
          (32)
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
          {product.title}
        </Typography>
        {/* Price */}
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
          $150.00
        </Typography>
        <Typography variant="caption" sx={{ mt: 1 }}>
          Or 4 interest-free installments with{" "}
          <Typography variant="subtitle2" display="inline">
            Klarna
          </Typography>{" "}
          or{" "}
          <Typography variant="subtitle2" display="inline">
            AfterPay
          </Typography>
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
          Color
        </Typography>
        <Typography variant="caption">
          White/White/Gum 2 - GZ9260 100
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {/*rendering image list of variants */}
          <VariantImageList arrayList={arrayList} />
        </Box>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
          Size
        </Typography>
      </Box>
      <Box sx={{ textAlign: { xs: "center", md: "start" } }}>
        {sizes.map((item, index) => (
          <Chip
            key={index}
            disabled={!item.inStock}
            label={item.size}
            variant="outlined"
            className={
              i === index ? classes.thechipSeleted : classes.thechipNotSeleted
            }
            onClick={() => chipHandler(index, item.size)}
            clickable
            sx={{ borderRadius: 1, width: "87px", mt: 1, mr: 1 }}
          />
        ))}
      </Box>
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Box>
        <Typography variant="body1">
          Ship to an Address
          <Typography variant="caption" display="block">
            (FREE SHIPPING)
          </Typography>
        </Typography>
      </Box>
      <Button
        disabled={!chipVariant}
        onClick={addtoCartHandler}
        variant="contained"
        sx={{ width: 1, mt: 3 }}
      >
        Add to Bag
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: 1,
          mt: 3,
        }}
      >
        <LogoDevIcon sx={{ fontSize: "60px" }} color="black" />
        <Typography display="inline" variant="body2" sx={{ color: "black" }}>
          GET POINTS. GAIN ACCESS. BOOST YOUR STATUS.
          <Typography variant="caption" display="block">
            Use your STATUS across our brand family, JD Sports and Finish Line.
            Join STATUS Now
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default ProductDesc;
