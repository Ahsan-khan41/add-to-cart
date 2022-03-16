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

export const CartProductCard = () => {
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
          image="https://media.finishline.com/s/finishline/GZ9260_100?$Main$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp"
          alt="NMD R1 PRIMEBLUE SHOES"
        />
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%", height: "100%" }}>
          <CardContent
            sx={{
              flex: "1",
              minHeight: "fit-content",
              p: 1,
              justifyContent: "space-between",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={6} sm={6} md={10} lg={10} xl={8}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  NMD R1 PRIMEBLUE SHOES
                </Typography>
                <Typography variant="caption">
                  Size: 8.0 <br />
                  Color: Wolf Grey/Kumquat/Cool Grey/White
                  <br />
                  Qualifies for Free Shipping
                </Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
                <Typography>
                  <IconButton aria-label="add" color="primary">
                    <AddIcon />
                  </IconButton>
                  QTY
                  <IconButton aria-label="remove" color="primary">
                    <RemoveIcon />
                  </IconButton>
                </Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
                <Typography>$130</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
      <Divider sx={{ mt: 0.5 }} />
    </>
  );
};
