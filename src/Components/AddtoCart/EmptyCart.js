import React from "react";
import { Card, Typography, CardContent } from "@mui/material";

const EmptyCart = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "auto",
          padding: "3vh 1vw 5vh 0",
          backgroundColor: "#f2f2f2",
          mt:2
        }}
        elevation={0}
      >
        <CardContent>
          <Typography variant="h5">
            Your Cart is Empty!
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default EmptyCart;
