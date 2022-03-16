import React from "react";
import {
  Grid,
  Box,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CartProductCard } from "../Components/AddtoCard";

const AddtoCart = () => {
  return (
    <>
      <Box
        display="grid"
        direction="column"
        sx={{ m: 3, padding: "1vw 2.5vw 1vw 2.5vw" }}
      >
        <Typography variant="h4">Shopping Bag</Typography>
        <Grid container direction="row" spacing={2}>
          <Divider />
          <Grid
            item
            display="flex"
            sx={{ flexFlow: "column", }}
            xs={12}
            sm={6}
            md={8}
            lg={8}
            xl={8}
          >
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box
              sx={{
                backgroundColor: "#F2F2F2",
                p: 3,
                borderRadius: 2,
                width: "auto",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Purchase Summary
              </Typography>
              <Divider />
              <Accordion elevation={0} sx={{ backgroundColor: "#F2F2F2" }}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="body2">Enter Coupon Code</Typography>
                </AccordionSummary>
              </Accordion>
              <Divider />
              <Box
                display="flex"
                direction="row"
                justifyContent="space-between"
                sx={{ pt: 2 }}
              >
                <Typography variant="body2">Subtotal (1 item)</Typography>
                <Typography variant="body2">$130</Typography>
              </Box>
              <Box
                display="flex"
                direction="row"
                justifyContent="space-between"
                sx={{ pt: 2 }}
              >
                <Typography variant="body2">Estimated Shipping Cost</Typography>
                <Typography variant="subtitle2">FREE</Typography>
              </Box>
              <Box
                display="flex"
                direction="row"
                justifyContent="space-between"
                sx={{ pt: 2 }}
              >
                <Typography variant="body2">Tax</Typography>
                <Typography variant="body2">TBD</Typography>
              </Box>
              <Divider />
              <Box
                display="flex"
                direction="row"
                justifyContent="space-between"
                sx={{ pt: 2 }}
              >
                <Typography variant="subtitle1">Total</Typography>
                <Typography variant="subtitle1">$130</Typography>
              </Box>
              <Button variant="contained" sx={{ width: 1, mt: 3 }}>
                Proceed to Checkout
              </Button>
              <Button variant="outlined" sx={{ width: 1, mt: 3 }}>
                + Check Other Payment Options
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddtoCart;
