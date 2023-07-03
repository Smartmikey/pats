import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import { colors } from "../Constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box component='footer' sx={{bgcolor: colors.gray, p: '50px'}}>
      <Grid container alignItems='top' sx={{textAlign: {xs: 'center', md: 'unset'}, lineHeight: {xs: '35px'}}}>
        <Grid item xs={12} md={2}>
          <Stack sx={{ mx: "auto", px: 2 }} direction="column">
            <img width="100px" style={{margin: '0 auto'}} src="Loo.svg" alt="logo" />
            <Box sx={{ my: 2 }}>
              <IconButton
                sx={{
                  bgcolor: colors.primary,
                  color: colors.white,
                  mx: 0.6,
                  "&:hover": {
                    bgcolor: colors.primaryLight,
                    color: colors.dark,
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: colors.primary,
                  color: colors.white,
                  mx: 0.6,
                  "&:hover": {
                    bgcolor: colors.primaryLight,
                    color: colors.dark,
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: colors.primary,
                  color: colors.white,
                  mx: 0.6,
                  "&:hover": {
                    bgcolor: colors.primaryLight,
                    color: colors.dark,
                  },
                }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <Link style={{color: colors.dark, textDecoration: 'none'}} to="/about-us">About Us</Link>
            {/* <Link style={{color: colors.dark, textDecoration: 'none'}} to="#">How it works?</Link> */}
            {/* <Link style={{color: colors.dark, textDecoration: 'none'}} to="#">Mission & values</Link> */}
          </Stack>
        </Grid>
        {/* <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <Link style={{color: colors.dark, textDecoration: 'none'}} to="#">Code Of Ethics</Link>
            <Link style={{color: colors.dark, textDecoration: 'none'}} to="#">Contact Us</Link>
            {/* <Link style={{color: colors.dark, textDecoration: 'none'}} to="#">Pats Blog</Link>
          </Stack>
        </Grid> */}
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <Link style={{color: colors.dark, textDecoration: 'none'}} to="/discovery">Find a pet</Link>
            <Link style={{color: colors.dark, textDecoration: 'none'}} to="/sign-up">Login/Sign up</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <Link style={{color: colors.dark, textDecoration: 'none'}} to="/animal-shelter-and-animal-rescue-code-ethics">Shelter & Rescue</Link>
            <Link style={{color: colors.dark, textDecoration: 'none'}} to="breeders-code-of-ethics">Breeder code of ethics</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <Link style={{color: colors.dark, textDecoration: 'none'}} to="/livestock-ouwners-code-of-ethics">Livestock owners ethics</Link>
            <Link style={{color: colors.dark, textDecoration: 'none'}} to="/privacy-policy">Privacy policy</Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
