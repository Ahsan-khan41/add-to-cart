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
  Skeleton,
  Stack,
} from "@mui/material";
import {
  VariantImageList,
  ProductCarousel,
  Chips,
  ProductDesc,
} from "../Components";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import AddIcon from "@mui/icons-material/Add";
import { PRODUCTS } from "../Data/mockData";
import { fetchOneProduct } from "../api";

const ProductDetails = () => {
  let params = useParams();

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
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  let componentMount = true;

  useEffect(() => {
    const funcToFetch = async () => {
      const response = await fetchOneProduct(params.productId);
      if (response) {
        setProduct(response);
        setLoading(false);
      } else {
        setErr("error Occured while fetching data!");
        console.log("error Occured while fetching data!");
      }

    };
    funcToFetch();
  }, [params.productId]);

  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", padding: "3vh 3vw 1vh 3vw" }}
        >
          <Grid item xs={12} md={7} sx={{ padding: "1rem" }}>
            {/*product Carousel */}
            {loading ? (
              <Stack spacing={1}>
                <Skeleton variant="rectangular" height={"25vh"} />
              </Stack>
            ) : (
              <ProductCarousel productCarouselList={product.carouselImgs} />
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} sx={{ padding: "1rem" }}>
            {/* Product Desc */}
            {loading ? (
              <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
              </Box>
            ) : (
              <ProductDesc product={product} />
            )}
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
