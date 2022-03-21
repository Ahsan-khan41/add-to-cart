import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from "@mui/material";

// Relevance earch Component

const RelevanceSearch = ({ handleChange, val }) => {

  return (
    <Box sx={{ minWidth: 200, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value={"Top Rated"}>Top Rated</MenuItem>
          <MenuItem value={"High to Low"}>Price: High to Low</MenuItem>
          <MenuItem value={"Low to High"}>Price: Low to High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RelevanceSearch;
