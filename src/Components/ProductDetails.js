import React from "react";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const VariantImageList = ({ arrayList }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", }}>
        {arrayList.map((item, index) => (
          <Box key={index} sx={{ mt: 0.75, mr: 1 }}>
            <img alt={item.img} src={item.img} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export const ProductCarousel = ({ productCarouselList }) => {
  return (
    <>
      <Carousel>
        {productCarouselList.map((item, index) => (
          <div key={index} >
            <img alt={index} src={item} />
          </div>
        ))}
      </Carousel>
    </>
  );
};
