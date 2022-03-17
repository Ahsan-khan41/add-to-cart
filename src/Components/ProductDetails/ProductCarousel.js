import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";

export default function ProductCarousel({ productCarouselList }) {
  return (
    <>
      <Carousel>
        {productCarouselList.map((item, index) => (
          <Box key={index}>
            <img alt={index} src={item} />
          </Box>
        ))}
      </Carousel>
    </>
  );
}
