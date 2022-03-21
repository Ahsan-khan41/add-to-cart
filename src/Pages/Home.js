import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  Grid,
  Checkbox,
  Stack,
  Skeleton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { RelevanceSearch, ProductCard } from "../Components";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../api";

const Home = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortVal, setSortVal] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const funcToFetch = async () => {
      const response = await fetchProducts();
      if (response) {
        setProducts(response);
        setLoading(false)
      } else {
        console.log("error occured while fetching!");
      }
    };
    funcToFetch();
  }, []);

  const sideBar = [
    "Brand",
    "Price",
    "Size",
    "Wide Width",
    "Type",
    "Color",
    "Collection",
    "Sustainable",
  ];

  const itemsArr = [
    "Newest",
    "Top Rated",
    "Price: High to Low",
    "Price; Low to High",
  ];

  const onClickHandler = (param) => {
    navigate(`/${param}`);
    document.documentElement.scrollTop = 0;
  };

  const handleChange = (e) => {
    setSortVal(e.target.value);
    switch (e.target.value) {
      case "Low to High":
        const lowToHigh = products.sort((a, b) => a.price - b.price); //low to high
        // console.log(lowToHigh);
        setProducts(lowToHigh);
        break;

      case "High to Low":
        const highToLow = products.sort((a, b) => b.price - a.price); //high to low
        console.log(highToLow);
        setProducts(highToLow);
        break;
      case "Top Rated":
        const toprated = products.sort((a, b) => b.reviews - a.reviews); //top rated
        setProducts(toprated);
        break;
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "3vw 2.5vw 3vw 2.5vw" }}>
        <Grid container spacing={4}>
          <Grid
            item
            md={2}
            lg={2}
            xl={2}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            {sideBar.map((item, index) => (
              <Accordion elevation={0} key={index}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="subtitle1">{item}</Typography>
                </AccordionSummary>
              </Accordion>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <Typography variant="h5">MEN'S RUNNING SHOES (613)</Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={6} justifyContent="flex-start">
                <Checkbox />
                <Typography variant="overline" display="inline">
                  Shop Your Store, Set Location
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                alignItems="flex-end"
                display="contents"
              >
                <RelevanceSearch handleChange={handleChange} val={sortVal} />
              </Grid>
            </Grid>
            <Grid container wrap="wrap">
              {loading
                ? sideBar.map((value, index) => (
                    <Grid
                      item
                      key={index}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      xl={2}
                      sx={{ padding: "0.15vw" }}
                    >
                      <Stack spacing={1}>
                        <Skeleton
                          variant="rectangular"
                          width={"245px"}
                          height={"245px"}
                        />
                        <Skeleton variant="text" width={"245px"} />
                      </Stack>
                    </Grid>
                  ))
                : products.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                      <ProductCard
                        imageUrl={item.imageUrl}
                        title={item.title}
                        price={item.price}
                        reviews={item.reviews}
                        colors={item.colors}
                        onClick={() => onClickHandler(item._id)}
                      />
                    </Grid>
                  ))}
            </Grid>
            <Box
              sx={{
                mt: "1vh",
              }}
            >
              <Typography variant="h6">
                MEN'S RUNNING SHOES AND SNEAKERS
              </Typography>
              <Typography variant="body2" sx={{ color: "#595959", mt: 1 }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
