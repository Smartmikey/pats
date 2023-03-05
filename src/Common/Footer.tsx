import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Grid, IconButton, Link, Stack } from "@mui/material";
import React from "react";
import { colors } from "../Constants";

const Footer = () => {
  return (
    <footer style={{backgroundColor: colors.gray, padding: '50px'}}>
      <Grid container alignItems='top' sx={{textAlign: {xs: 'center', md: 'unset'}, lineHeight: {xs: '35px'}}}>
        <Grid item xs={12} md={2}>
          <Stack sx={{ mx: "auto", px: 2 }} direction="column">
            <img width="100px" src="Loo.svg" alt="logo" />
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
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">About Us</Link>
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">How it works?</Link>
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">Mission & values</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">Privacy policy</Link>
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">Contact Us</Link>
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">Pats Blog</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">Find a pet</Link>
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">Login/Sign up</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <Link sx={{color: colors.dark, textDecoration: 'none', fontWeight: 600}} href="#">Shelter & Rescue</Link>
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">Log in/Sign up</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <Link sx={{color: colors.dark, textDecoration: 'none', fontWeight: 600}} href="#">Breeders</Link>
            <Link sx={{color: colors.dark, textDecoration: 'none'}} href="#">Log in/Sign up</Link>
          </Stack>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
