import React from "react";
import {
  Typography,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const Footer = () => {
  const usefulLinks = [
    "Privacy Policy",
    "Interest-Based Ads Policy",
    "Terms of Use",
    "Site Map",
  ];

  const footerSponsors = [
    {
      title: "SHOPPING, REWARDS, INSPIRATION & MORE",
      desc: "Use your STATUS across our brand family, JD Sports and Finish Line.",
    },
    {
      title: "GET POINTS. GAIN ACCESS. BOOST YOUR STATUS.",
      desc: "Access it all with exclusive product releases, big ticket giveaways, & app-only content.",
    },
  ];

  const getToKnowUs = [
    "Our Company",
    "Our Brand family",
    "Youth Foundation",
    "Careers",
    "Investor Relations",
    "Blog",
  ];

  return (
    <>
      <Box sx={{ padding: "0vh 4vw 1vh 4vw" }}>
        <Divider
          sx={{ borderColor: "#D9D9D9", width: "100%", marginBottom: "1rem" }}
        />
        <Box>
          <Grid container spacing={5} sx={{ marginBottom: "2rem" }}>
            {footerSponsors.map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <LogoDevIcon sx={{ fontSize: "60px" }} color="action" />
                  <Typography
                    display="inline"
                    variant="subtitle2"
                    sx={{ color: "rgba(0, 0, 0, 0.54)" }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2">{item.desc}</Typography>
              </Grid>
            ))}
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
              >
                <Typography variant="body1" sx={{ mb: 2 }}>
                  GET TO KNOW US
                </Typography>
                {getToKnowUs.map((item, index) => (
                  <Typography variant="caption" key={index}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
              >
                <Typography variant="body1" sx={{ mb: 2 }}>
                  CUSTOMER CARE
                </Typography>
                {getToKnowUs.map((item, index) => (
                  <Typography variant="caption" key={index}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
              >
                <Typography variant="body1" sx={{ mb: 2 }}>
                  GIFT CARDS
                </Typography>
                {getToKnowUs.map((item, index) => (
                  <Typography variant="caption" key={index}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider
          sx={{ borderColor: "#D9D9D9", width: "100%", marginBottom: "1rem" }}
        />
        <Box
          sx={{
            padding: "1rem 3rem 1rem 3rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={2}>
              <Typography variant="body2">
                2022 Finish Line, Inc. All Rights Reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex" }}>
                {usefulLinks.map((item, index) => (
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "1rem" }}
                    key={index}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={4} justify="center" alignItems="center" >
              <FacebookIcon fontSize="large" sx={{ marginRight: "1.5rem" }} />
              <InstagramIcon fontSize="large" sx={{ marginRight: "1.5rem" }} />
              <YouTubeIcon fontSize="large" sx={{ marginRight: "1.5rem" }} />
              <TwitterIcon fontSize="large" sx={{ marginRight: "1.5rem" }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
