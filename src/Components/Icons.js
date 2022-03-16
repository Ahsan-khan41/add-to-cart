import * as React from "react";
import { Box, SvgIcon  } from "@mui/material";
import { ReactComponent as Logo } from "../assets/bookmarkIcon.svg";

function HomeIcon(props) {
  return (
    <SvgIcon  {...props}>
      <Logo />
    </SvgIcon >
  );
}

export default function SvgIconsColor() {
  return (
    <Box sx={{ m: 2, }}>
      <HomeIcon />
    </Box>
  );
}
