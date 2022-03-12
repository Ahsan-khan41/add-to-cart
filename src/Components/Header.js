import React from "react";
import {
  AppBar,
  Typography,
  Box,
  InputBase,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Toolbar,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles({
  logo: {
    color: "black",
  },
  searchBar: {
    backgroundColor: "#F2F2F2",
    width: "300px",
    borderRadius: "5px",
    paddingLeft: "10px",
  },
});

const Header = () => {
  const classes = useStyles();

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

  return (
    <>
      <AppBar position='static' elevation={0} >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "10px 60px 10px 60px",
            backgroundColor: "white",
            shadow: "none",
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ color: "#000" }}>
              FINISH LINE
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <InputBase
              placeholder="Search here"
              className={classes.searchBar}
            />
            <Button
              variant="outlined"
              startIcon={<PersonIcon />}
              sx={{ marginLeft: "5px" }}
            >
              Account
            </Button>
            <Button
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
              sx={{ marginLeft: "5px" }}
            >
              Cart
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "10px 100px 10px 100px",
            backgroundColor: "white",
            shadow: "none",
          }}
        >
          {newArrivals.map((item, index) => (
            <Typography variant='body2' sx={{ color: "#8C8C8C" }} key={index}>{item}</Typography>
          ))}
        </Box>
        <Divider sx={{borderColor: '#D9D9D9', width: '100%'}} />
      </AppBar>
    </>
  );
};

export default Header;
