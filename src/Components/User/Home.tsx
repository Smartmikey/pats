import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { colors } from "../../Constants";
import Title from "../../Common/Title";
import { breeder, pets } from "../../data";
import PetCard from "../Discovery/PetCard";
import BreederCard from "../../Common/BreederCard";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          my: 6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
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
            <Box sx={{ mt: 3, mb: 8, textAlign: "center" }}>
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
            <Grid container spacing={3}>
              <Grid item md={1}></Grid>
              <Grid item md={2}></Grid>
              <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    bgcolor: colors.primary,
                    p: 2,
                    color: colors.white,
                    '&:hover': {bgcolor: colors.textHeadingTransparent},
                    fontWeight: 600,
                  }}
                >
                  <img
                    style={{ marginBottom: "10px" }}
                    src="/dog.svg"
                    alt="dog icon "
                  />
                </Button>

                <Typography>Dog</Typography>
              </Grid>
              <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    bgcolor: colors.primary,
                    p: 2,
                    color: colors.white,
                    fontWeight: 600,
                    '&:hover': {bgcolor: colors.textHeadingTransparent},
                  }}
                >
                  <img
                    style={{ marginBottom: "10px" }}
                    src="/cat.svg"
                    alt="dog icon "
                  />
                </Button>

                <Typography>Cat</Typography>
              </Grid>
              <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    bgcolor: colors.primary,
                    p: 2,
                    color: colors.white,
                    fontWeight: 600,
                    '&:hover': {bgcolor: colors.textHeadingTransparent},
                  }}
                >
                  <img
                    style={{ marginBottom: "10px" }}
                    src="/paw.svg"
                    alt="dog icon "
                  />
                </Button>
                <Typography> Other Animal</Typography>
              </Grid>
              <Grid item md={2}></Grid>
              <Grid item md={1}></Grid>
            </Grid>
          </Container>
        </Box>
        <Title text="Browse Pets" sx={{ ml: 0 }} />
        <Grid container spacing={5}>
          {pets.slice(0,6).map((item) => (
            <PetCard
              key={item.id}
              size={4}
              data={item}
              Action={
                <>
                  <Button
                    variant="outlined"
                    sx={{
                      color: colors.primary,
                      borderColor: colors.primary,
                      mx: 1,
                      textTransform: "initial",
                      borderRadius: "6px",
                      "&:hover": { borderColor: colors.primary },
                    }}
                    href="/pet"
                  >
                    View more
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: colors.primary,
                      mx: 1,
                      textTransform: "initial",
                      borderRadius: "6px",
                      "&:hover": { backgroundColor: colors.primary },
                    }}
                  >
                    Contact
                  </Button>
                </>
              }
            />
          ))}

          <Grid item xs={12} sx={{mt:8}} >
              
          <Title text="Browse breeders near you" sx={{ml:0, mb: 0}} />
          </Grid> 
          {breeder.map((item) => (
            <BreederCard
              key={item.id}
              size={4}
              data={item}
              Action={
                <>
                  <Button
                    variant="outlined"
                    sx={{
                      color: colors.primary,
                      borderColor: colors.primary,
                      mx: 1,
                      textTransform: "initial",
                      borderRadius: "6px",
                      "&:hover": { borderColor: colors.primary },
                    }}
                    href="/pet"
                  >
                    View more
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: colors.primary,
                      mx: 1,
                      textTransform: "initial",
                      borderRadius: "6px",
                      "&:hover": { backgroundColor: colors.primary },
                    }}
                  >
                    Contact
                  </Button>
                </>
              }
            />
          ))}
          <Grid item xs={12} sx={{mt:8}} >
              
          <Title text="Rescues & Shelters" sx={{ml:0, mb:0}} />
          </Grid> 
          {breeder.map((item) => (
            <BreederCard
              key={item.id}
              size={4}
              data={item}
              Action={
                <>
                  <Button
                    variant="outlined"
                    sx={{
                      color: colors.primary,
                      borderColor: colors.primary,
                      mx: 1,
                      textTransform: "initial",
                      borderRadius: "6px",
                      "&:hover": { borderColor: colors.primary },
                    }}
                    href="/pet"
                  >
                    View more
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: colors.primary,
                      mx: 1,
                      textTransform: "initial",
                      borderRadius: "6px",
                      "&:hover": { backgroundColor: colors.primary },
                    }}
                  >
                    Contact
                  </Button>
                </>
              }
            />
          ))}
        </Grid>


      </Box>
    </>
  );
};

export default Home;