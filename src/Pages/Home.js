import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  AppBar,
  Typography,
  Box,
  InputBase,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Toolbar,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Checkbox,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { RelevanceSearch, ProductCard } from "../Components/ProductDetails";
import { PRODUCTS } from "../Dictionaries/ProductDictionary";

const Home = () => {
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
  // console.log(PRODUCTS);

  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1, padding: "30px 60px 10px 60px" }}>
        <Grid container spacing={4}>
          <Grid item xs={3} md={2}>
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
          <Grid item xs={9} md={10}>
            <Typography variant="h5">MEN'S RUNNING SHOES (613)</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box>
                <Checkbox />
                <Typography variant="overline" display="inline">
                  Shop Your Store, Set Location
                </Typography>
              </Box>
              <RelevanceSearch itemsArr={itemsArr} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {PRODUCTS.map((item, index) => (
                <ProductCard
                  imageUrl={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  reviews={item.reviews}
                  colors={item.colors}
                />
              ))}
            </Box>
            <Box sx={{
              mt: 10
            }}>
              <Typography variant='h6' >MEN'S RUNNING SHOES AND SNEAKERS</Typography>
              <Typography variant='body2' sx={{color:'#595959', mt: 1}} >
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
      <Footer />
    </>
  );
};

export default Home;
