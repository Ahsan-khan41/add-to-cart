import * as React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function ProductCard(props) {
  const ratingsStar = [1, 2, 3, 4, 5];

  return (
    <>
      <Card
        sx={{
          marginRight: "1vw",
          marginBottom: "15px",
          minWidth: "10vw",
          minHeight: "35vh",
        }}
        elevation={0}
        onClick={props.onClick}
      >
        <CardActionArea sx={{ maxWidth: "200vw" }}>
          <CardMedia
            component="img"
            height="245"
            width="245"
            image={props.imageUrl}
            alt="Adidas Shoes"
          />
          <CardContent>
            <Typography variant="body2" gutterBottom component="div">
              {props.colors} colors
            </Typography>
            <Divider />
            <Typography
              gutterBottom
              variant="caption"
              component="div"
              sx={{ fontWeight: "bold", fontSize: "13px" }}
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             ${props.price}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {ratingsStar.map((item, index) => (
                <StarIcon key={index} sx={{ fontSize: 17 }} />
              ))}
              <Typography variant="body2" display="inline">
                ({props.reviews})
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
