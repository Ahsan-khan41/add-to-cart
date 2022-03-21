import React from "react";
import { Box } from "@mui/material";

export default function VariantImageList({ arrayList }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "start" },
        }}
      >
        {arrayList.map((item, index) => (
          <Box key={index} sx={{ mt: 0.75, mr: 1 }}>
            <img alt={item.img} src={item.img} />
          </Box>
        ))}
      </Box>
    </>
  );
}
