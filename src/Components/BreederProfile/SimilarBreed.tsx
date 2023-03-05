import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SimilarBreed = () => {
  return (
    <Box maxWidth='1300px' sx={{mx: 'auto'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>

        <Typography sx={{my: 6, pl: 5}} variant='h5' >Similar Breeds</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Container>
            <img width='100%' style={{borderTopRightRadius: '8px', borderTopLeftRadius: '8px'}} src="_placeholderimage.png" alt="Dog " />
            <Typography>Maltese</Typography>
            <Link to="#">Learn More</Link>
          </Container>
        </Grid>
        <Grid item xs={6} md={4}>
          <Container>
            <img width='100%' style={{borderTopRightRadius: '8px', borderTopLeftRadius: '8px'}} src="_placeholderimage.png" alt="Dog " />
            <Typography>Maltese</Typography>
            <Link to="#">Learn More</Link>
          </Container>
        </Grid>
        <Grid item xs={6} md={4}>
          <Container>
            <img width='100%' style={{borderTopRightRadius: '8px', borderTopLeftRadius: '8px'}} src="_placeholderimage.png" alt="Dog " />
            <Typography>Maltese</Typography>
            <Link to="#">Learn More</Link>
          </Container>
        </Grid>
      </Grid>
            <Link to="#" style={{display: 'block', textAlign: 'center', marginTop: '60px', marginBottom: '60px'}}>See More</Link>
    </Box>
  );
};

export default SimilarBreed;
