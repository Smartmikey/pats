import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import Scrollable from "../../Common/Scrollable";
import Title from "../../Common/Title";
import { colors } from "../../Constants";
import Article from "./Article";
import PetCard from "./PetCard";
import Axios from "../../API/Axios";
import { useDispatch, useSelector } from "react-redux";
import { addPets } from "../../Redux/petsSlice";
import { Carousel } from "@trendyol-js/react-carousel";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  SwipeLeftSharp,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {}
  );
  const [petByCategory, setPetByCategory] = useState<any>();
  const [pets, setPets] = useState<any>();
  // const pets = useSelector((state: any) => state.pets);
  const history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const getPetsByCategory = async (category_id: string) => {
    if(category_id === "others"){
      const response = await Axios.get(
        `/breeder/pets/`
      );
      setPetByCategory(response.data.data);
    }else {

      const response = await Axios.get(
        `/breeder/pets/${category_id}/category?category_pet_id=${category_id}`
      );
      setPetByCategory(response.data.data);
    }
  };

  useEffect(() => {
    Axios.get("/category/pets").then((response) => {
      setState({ petCategory: response.data.data });
    });
    Axios.get("/breeder/pets")
      .then((response) => {
        setPets(response.data.data);
        setPetByCategory(response.data.data);
      })
      .catch((error) => console.log(error));
    // const getAllPets = async () => {
    //   const res = await Axios.get("/breeder/pets");
    //   const {
    //     data: { data },
    //   } = await res;
    //   // dispatch(addPets(await items));
    //   setPets(data);
    // };
    // getAllPets();
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
          <img src="pats.svg" style={{ width: "200px" }} alt="pats logo" />
          <Box sx={{ mt: 3, mb: 18, textAlign: "center" }}>
            <TextField
              id="looking-for"
              size="small"
              sx={{ mx: 1, my: { xs: 1, md: "unset" }, minWidth: '300px' }}
              label="What are you looking for?"
              variant="outlined"
            />
            {/* <TextField
              id="Location"
              size="small"
              sx={{ mx: 1, my: { xs: 1, md: "unset" } }}
              label="Location"
              variant="outlined"
            /> */}
            <Button
              sx={{
                my: { xs: 1, md: "unset" },
                display: { xs: "block", md: "inline" },
                mx: "auto",
                bgcolor: colors.primary,
                "&:hover": { bgcolor: colors.textHeading },
              }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>
      <Container>
        <Title text="Popular pets" align="center" variation="medium" />
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
          {state.petCategory &&
            state.petCategory.map((item: any, i: number) => (
              <Button
                key={i}
                variant="contained"
                sx={{
                  bgcolor: colors.textHeadingTransparent,
                  color: colors.white,
                  borderRadius: 3,
                  "&:hover": { bgcolor: colors.textHeading },
                }}
                onClick={() => getPetsByCategory(item.id)}
              >
                {item.name}
              </Button>
            ))}
          {/* <Button
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
          </Button> */}
          <Button
            variant="contained"
            sx={{
              bgcolor: colors.textHeadingTransparent,
              color: colors.white,
              borderRadius: 3,
              "&:hover": { bgcolor: colors.textHeading },
            }}
            onClick={() => getPetsByCategory("others")}
          >
            Others
          </Button>
        </Stack>
        {/* {pets && pets?.map((data: any, index: number) => (
            
            <PetCard key={index} />
        ))} */}
        {petByCategory && (
          <Carousel
            dynamic
            useArrowKeys
            leftArrow={
              <IconButton sx={{ boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
                <ArrowBackIosNew />
              </IconButton>
            }
            rightArrow={
              <IconButton sx={{ boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
                <ArrowForwardIos />
              </IconButton>
            }
            show={3}
            slide={1}
          >
            {petByCategory?.map((data: any, index: number) => {

              return <PetCard key={index + "category"} data={data} />;
            })}
          </Carousel>
        )}

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
          onClick={() => history.push("/discovery")}
        >
          View all
        </Button>
      </Container>
      <Container>
        <Title text="Available Now" align="center" variation="medium" />

        {pets && (
          <Carousel
            useArrowKeys
            leftArrow={
              <IconButton sx={{ boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
                <ArrowBackIosNew />
              </IconButton>
            }
            rightArrow={
              <IconButton sx={{ boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
                <ArrowForwardIos />
              </IconButton>
            }
            show={3}
            slide={1}
          >
            {pets &&
              pets?.map((data: any, index: number) => (
                <PetCard key={index} data={data} />
              ))}
          </Carousel>
        )}
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
          onClick={() => history.push("/discovery")}
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
              specific as you like with your search criteria.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="connectIcon.svg" width="100px" />
            <Title m={2} text="Connect" align="center" variation="small" />
            <Typography component="p">
              If you are interested in an animal, get in touch with the relevant
              business or organization and make contact to explore your options.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="adoptIcon.svg" width="100px" />
            <Title m={2} text="Adopt" align="center" variation="small" />
            <Typography component="p">
              Once you've gathered all the necessary information and made a
              decision, bring your new furry friend home!
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
