import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Box,
  InputBase,
  Button,
  Divider,
  Grid,
  MenuItem,
  Menu,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//icons
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import HomeIcon from "@mui/icons-material/Home";

const MobMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  return (
    <>
      <Box anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuIcon
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          elevation={0}
          onClick={handleClick}
          sx={{ fontSize: 40, color: "black" }}
        />

        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Link style={{ textDecoration: "none", color: "#000" }} to="/store/men/running-shoes">
            <MenuItem onClick={handleClose} disableRipple>
              <HomeIcon />
              {/* Home Icon */}
              Home
            </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/store/men/running-shoes">
            <MenuItem onClick={handleClose} disableRipple>
              <DirectionsRunIcon />
              {/* Shoes Icon */}
              Men Running Shoes
            </MenuItem>
          </Link>
          <Divider sx={{ my: 0.5 }} />
          <Link style={{ textDecoration: "none", color: "#000" }} to="/store/shopping-cart">
            <MenuItem onClick={handleClose} disableRipple>
              <ShoppingCartIcon />
              {/* Cart Icon */}
              Your Bag
            </MenuItem>
          </Link>
        </StyledMenu>
      </Box>
    </>
  );
};

const Header = ({onSearch}) => {
  const newArrivals = [
    "NEW ARRIVALS",
    "MEN",
    "WOMEN",
    "BOYS",
    "GIRLS",
    "ACCESSORIES",
    "BRANDS",
    "RELEASES",
  ];
  let navigate = useNavigate();
  const ButtonHandler = () => {
    navigate("/store/shopping-cart");
  };

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: "#fff" }}>
        <Box
          display="flex"
          direction="row"
          justifyContent="space-between"
          sx={{ padding: "1vw 2.5vw 1vw 2.5vw" }}
        >
          <Box sx={{ mb: "2vh" }}>
            <Typography variant="h4" sx={{ color: "#000", fontWeight: "bold" }}>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#000" }}
              >
                FINISH LINE
              </Link>
            </Typography>
          </Box>
          <Box display="flex" direction="row">
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  
                },
                mb: "2vh",
              }}
            >
              <InputBase
                placeholder="Search here"
                sx={{
                  backgroundColor: "#F2F2F2",
                  width: "300px",
                  pl: 2,
                  borderRadius: 1,
                }}
                onChange={onSearch}
              />
              <Button
                variant="outlined"
                startIcon={<PersonIcon />}
                sx={{ marginLeft: "1vw" }}
              >
                Account
              </Button>
              <Button
                variant="outlined"
                startIcon={<ShoppingCartIcon />}
                sx={{ marginLeft: "1vw" }}
                onClick={ButtonHandler}
              >
                Cart
              </Button>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <MobMenu />
            </Box>
          </Box>
        </Box>
        <Grid item md={12} lg={12} xl={12}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {newArrivals.map((item, index) => (
              <Grid
                key={index}
                item
                sm={1}
                md={1}
                lg={1}
                xl={1}
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#8C8C8C" }}
                  key={index}
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "#D9D9D9", width: "100%", mt: "2vh" }} />
      </AppBar>
    </>
  );
};

export default Header;
