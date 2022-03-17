import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { VariantImageList, ProductCarousel } from "../Components";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import AddIcon from "@mui/icons-material/Add";
import { PRODUCTS } from "../Data/mockData";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/features/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  let params = useParams();

  const ratingsStar = [1, 2, 3, 4, 5];

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

  const details = [
    {
      title: "Product Details",
    },
    {
      title: "Review",
    },
    {
      title: "Delivery",
    },
    {
      title: "Returns",
    },
  ];

  const [productCarousel, setProductCarousel] = useState([]);
  const [product, setProduct] = useState({});
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const found = PRODUCTS.find(
      (item, index) => item.id === Number(params.productId)
    );
    if (found) {
      setProductCarousel(found.productDetails.carouselImg);
      setProduct(found);
      setSizes(found.sizes);
    } else {
      alert("No product found!");
    }
  }, [params.productId]);

  return (
    <>
      {/* ProductDetails of {params.productId} */}
      <Box>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", padding: "3vh 3vw 1vh 3vw" }}
        >
          <Grid item xs={12} sm={12} md={7} sx={{ padding: "1rem" }}>
            <ProductCarousel productCarouselList={productCarousel} />
          </Grid>
          <Grid item xs={12} sm={12} md={5} sx={{ padding: "1rem" }}>
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
            {/*rendering image list of variants */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: { sm: "center", lg: "start" },
              }}
            >
              <VariantImageList arrayList={arrayList} />
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
              Size
            </Typography>
            <Box sx={{ textAlign: { sm: "center", lg: "start" } }}>
              <Chip
                label="6.5"
                disabled
                sx={{ borderRadius: 1, width: "87px", mt: 1, mr: 1 }}
              />
              {sizes.map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  variant="outlined"
                  sx={{ borderRadius: 1, width: "87px", mt: 1, mr: 1 }}
                />
              ))}
            </Box>
            <Divider sx={{ mt: 4, mb: 4 }} />
            <Box>
              <Typography variant="body1">
                {/* <input type="radio" /> */}
                Ship to an Address
                <Typography variant="caption" display="block">
                  (FREE SHIPPING)
                </Typography>
              </Typography>
            </Box>
            <Button
              onClick={() => dispatch(addProduct(product))}
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
              <Typography
                display="inline"
                variant="body2"
                sx={{ color: "black" }}
              >
                GET POINTS. GAIN ACCESS. BOOST YOUR STATUS.
                <Typography variant="caption" display="block">
                  Use your STATUS across our brand family, JD Sports and Finish
                  Line. Join STATUS Now
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* Accordions Section */}
        <Grid
          container
          direction="column"
          sx={{ display: "flex", padding: "1vh 3vw 1vh 4vw" }}
        >
          <Grid item xs={12} md={12} xl={12}>
            {details.map((item, index) => (
              <Accordion key={index} elevation={0}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", mb: 2, mt: 1 }}
                    >
                      {" "}
                      Made from Sustainable Materials
                    </Typography>
                    <Typography variant="body2">
                      This product is made with Primeblue to save resources and
                      decrease emissions 50% of the upper is textile, 75% of the
                      textile is Primeblue yarn
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", mb: 2, mt: 1 }}
                    >
                      {" "}
                      Product Features
                    </Typography>
                    <Typography variant="body2">
                      Stretch knit upper for breathable comfort Lace-up
                      construction BOOST midsole for comfort Supportive,
                      sock-like fit The adidas Originals NMD R1 Primeblue is
                      imported. Made in part with Parley Ocean Plastic, the
                      adidas Originals NMD R1 Primeblue Casual shoes are as
                      sleek and stylish as they are sustainable. Rock these
                      classics when you want to maintain your comfort and stand
                      out from the crowd.
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductDetails;
