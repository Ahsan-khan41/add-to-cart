// import Carousel from "react-material-ui-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  carousalContainer: {
    width: "100%",
    height: "calc(80vw + 20px)",
    maxHeight: "685px",
  },
});

export default function ProductCarousel({ productCarouselList }) {
  return (
    <>
      <Carousel showStatus={false}>
        {productCarouselList.map((item, index) => (
          <Box key={index}>
            <img alt={index} src={item} />
          </Box>
        ))}
      </Carousel>
    </>
  );
}


// export default function ProductCarousel({ productCarouselList }) {
//   const classes = useStyles();
//   return (
//     <>
//       <Carousel
//         // navButtonsWrapperProps={{ className: classes.front }}
//         // navButtonsProps={{ className: classes.navButtons }}
//         className={classes.carousalContainer}
//         autoPlay={false}
//         indicators={true}
//         // IndicatorIcon={productCarouselList.map((item, index) => (
//         //   <img
//         //     style={{ width: "80px", paddingRight: "1vw" }}
//         //     alt={item}
//         //     src={item}
//         //   />
//         // ))}
//         navButtonsAlwaysInvisible={true}
//       >
//         {productCarouselList.map((item, index) => (
//           <Paper sx={{ width: "600px", height: "600px" }} key={index}>
//             <img alt={index} src={item} />
//           </Paper>
//         ))}
//       </Carousel>
//     </>
//   );
// }
