import { Person, PetsRounded } from "@mui/icons-material";
import { Box, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../Constants";
import Index from "../Chat/Index";

const Home = () => {
  return <Box>
    <Typography variant="h4" sx={{fontWeight: 600, my:2}}>Hello! <Box component="span" sx={{color: colors.primary}}>Little Paws Breeder</Box></Typography>
    <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          mb:6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
       <Grid container sx={{textAlign: 'center',}}>
        <Grid item xs={4} >
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', justifyContent: 'center'}}>
                <IconButton sx={{bgcolor: colors.primary,  m: 2}}><PetsRounded sx={{fontSize: 34, color: colors.white}} /></IconButton>
                <Box>
                    <Typography>Animals <Box component="span" sx={{fontWeight: 800}}>sold</Box></Typography>
                    <Typography variant="h5" sx={{color: colors.primary}}>9</Typography>
                </Box>
            </Box>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
        <Grid item xs={4} >
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', justifyContent: 'center'}}>
                <IconButton sx={{bgcolor: colors.primary,  m: 2}}><PetsRounded sx={{fontSize: 34,  color: colors.white}} /></IconButton>
                <Box>
                    <Typography>Animals <Box component="span" sx={{fontWeight: 800}}>Available</Box></Typography>
                    <Typography variant="h5" sx={{color: colors.primary}}>6</Typography>
                </Box>
            </Box>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
        <Grid item xs={4} >
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', justifyContent: 'center'}}>
                <IconButton sx={{bgcolor: colors.primary,  m: 2}}><Person sx={{fontSize: 34,  color: colors.white}} /></IconButton>
                <Box>
                    <Typography>Customers <Box component="span" sx={{fontWeight: 800}}>in contact</Box></Typography>
                    <Typography variant="h5" sx={{color: colors.primary}}>3</Typography>
                </Box>
            </Box>
        </Grid>
        
       </Grid>
      </Box>

      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          my:6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Index />
      </Box>
  </Box>;
};

export default Home;
