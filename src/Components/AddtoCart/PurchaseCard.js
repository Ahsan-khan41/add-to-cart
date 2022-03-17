import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Accordion,
  Button,
  AccordionSummary,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export default function PurchaseCard(props) {
  return (
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
        <Typography variant="body2">Subtotal</Typography>
        <Typography variant="body2">${props.subTotal}</Typography>
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
        <Typography variant="subtitle1">${props.total}</Typography>
      </Box>
      <Button variant="contained" sx={{ width: 1, mt: 3 }}>
        Proceed to Checkout
      </Button>
      <Button variant="outlined" sx={{ width: 1, mt: 3 }}>
        + Check Other Payment Options
      </Button>
    </Box>
  );
}
