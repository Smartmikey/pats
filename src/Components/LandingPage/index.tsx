import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import Scrollable from "../../Common/Scrollable";
import Title from "../../Common/Title";
import { colors } from "../../Constants";
import Article from "./Article";
import PetCard from "./PetCard";
import Axios from "../../API/Axios";
import { useDispatch, useSelector } from "react-redux";
import { addPets } from "../../Redux/petsSlice";

const LandingPage = () => {
  const dispatch = useDispatch()
  const pets = useSelector((state:any) => state.pets)

console.log(pets);

  useEffect(() => {
    const getAllPets = async () => {
      const res = await Axios.get("/breeder/pets/timeline");
      const {data: {data: {_items: items}}} = await res
      dispatch(addPets(await items))
      console.log(items);
      
    };
    getAllPets();
  }, []);
  return (
    <Box>
      <Box
        sx={{
          minHeight: { xs: "60vh", md: "90vh" },
          mt: 9,
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "50%",
            position: "absolute",
            bottom: -10,
          }}
          src="dog-head.png"
          alt="dog head background"
        />
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
                mx: "auto",
              }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>
      <Container>
        <Title text="Popular category" align="center" variation="medium" />
        {/* <Carousel>
            {
                items.map( (item, i) => <p key={i} >{item.name} {item.description}</p> )
            }
        </Carousel> */}
        <Stack
          direction="row"
          spacing={{ xs: 1, md: 4 }}
          alignItems="center"
          justifyContent="center"
          sx={{ m: 4 }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: colors.textHeadingTransparent,
              color: colors.white,
              borderRadius: 3,
              "&:hover": { bgcolor: colors.textHeading },
            }}
          >
            Dogs
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: colors.textHeadingTransparent,
              color: colors.white,
              borderRadius: 3,
              "&:hover": { bgcolor: colors.textHeading },
            }}
          >
            Cats
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: colors.textHeadingTransparent,
              color: colors.white,
              borderRadius: 3,
              "&:hover": { bgcolor: colors.textHeading },
            }}
          >
            Birds
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: colors.textHeadingTransparent,
              color: colors.white,
              borderRadius: 3,
              "&:hover": { bgcolor: colors.textHeading },
            }}
          >
            Others
          </Button>
        </Stack>
        <Scrollable>
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </Scrollable>
        <Button
          variant="contained"
          sx={{
            bgcolor: colors.textHeading,
            color: colors.white,
            mx: "auto",
            display: "block",
            my: 6,
            "&:hover": { bgcolor: colors.textHeading },
          }}
        >
          View all
        </Button>
      </Container>
      <Container>
        <Title text="Available Now" align="center" variation="medium" />

        <Scrollable>
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </Scrollable>
        <Button
          variant="contained"
          sx={{
            bgcolor: colors.textHeading,
            color: colors.white,
            mx: "auto",
            display: "block",
            my: 6,
            "&:hover": { bgcolor: colors.textHeading },
          }}
        >
          View all
        </Button>
      </Container>

      <Container component="section" sx={{ textAlign: "center" }}>
        <Title text="How it works?" align="center" variation="medium" />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img src="searchIcon.svg" width="100px" />
            <Title m={2} text="Search" align="center" variation="small" />
            <Typography component="p">
              Explore our marketplace to find your new friend. You can be as
              specific as you like with your search criteria. you can easily
              find exactly what you're looking for.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="connectIcon.svg" width="100px" />
            <Title m={2} text="Connect" align="center" variation="small" />
            <Typography component="p">
              Explore our marketplace to find your new friend. You can be as
              specific as you like with your search criteria. you can easily
              find exactly what you're looking for.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="adoptIcon.svg" width="100px" />
            <Title m={2} text="Adopt" align="center" variation="small" />
            <Typography component="p">
              Explore our marketplace to find your new friend. You can be as
              specific as you like with your search criteria. you can easily
              find exactly what you're looking for.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: { xs: 3, md: 8 } }}>
        <Title text="Top Articles" align="center" variation="medium" />
        <Grid container spacing={2}>
          <Article />
          <Article />
          <Article />
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
