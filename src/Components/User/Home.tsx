import { Box, Button, Container, Grid, TextField } from '@mui/material'
import { colors } from '../../Constants'

const Home = () => {
  return (
    <Box>
        <Box
        sx={{
        //   minHeight: { xs: "60vh", md: "90vh" },
          mt: 9,
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="pats.svg" style={{ width: "300px" }} alt="pats logo" />
          <Box sx={{ mt: 3, mb: 18, textAlign: "center" }}>
            <TextField
              id="looking-for"
              size="small"
              sx={{ mx: 1, my: { xs: 1, md: "unset" } }}
              label="What are you looking for?"
              variant="outlined"
            />
            <TextField
              id="Location"
              size="small"
              sx={{ mx: 1, my: { xs: 1, md: "unset" } }}
              label="Location"
              variant="outlined"
            />
            <Button
              sx={{
                my: { xs: 1, md: "unset" },
                display: { xs: "block", md: "inline" },
                bgcolor: colors.primary,
                mx: "auto",
              }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
          <Grid container>
            <Grid item xs={4}>
              <Button sx={{bgcolor: colors.primaryLight}}>
                <img src="/dog.svg" alt='dog icon ' />
                Dogs
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home