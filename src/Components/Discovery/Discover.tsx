import {
  ArrowBackIosNew,
  ArrowForwardIos,
  ArrowLeftOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Carousel } from "@trendyol-js/react-carousel";
import Scrollable from "../../Common/Scrollable";
import Title from "../../Common/Title";
import { HOSTURL, colors } from "../../Constants";
// import { pets } from "../../data";
import Explore from "../BreederProfile/Explore";
import PetCard from "./PetCard";
import { useEffect, useState } from "react";
import Axios from "../../API/Axios";
import { useHistory, useParams, Link } from "react-router-dom";
import { capitalizeFirstLowercaseRest } from "../../utility";

const Discover = () => {
  const [pets, setPets] = useState<any>();
  const [pet, setPet] = useState<any>();
  const [petsByMember, setPetsByMember] = useState<any>();
  const { id } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    const makeAllCalls = () => {

      Axios.get(`/breeder/pets/${id}`).then((response) => {
        setPet(response.data.data[0]);
        Axios.get(`/breeder/pets/${response.data.data[0].member_id}/member`)
          .then((res) => {
            setPetsByMember(res.data.data);
          })
          .catch((error) => console.log(error));
        Axios.get(
          `/breeder/pets/${response.data.data[0].category_id}/category?category_pet_id=${response.data.data[0].category_id}`
        )
          .then((resp) => {
            setPets(resp.data.data);
          })
          .catch((error) => console.log(error));
      });
    }
    makeAllCalls();
  }, [id]);
  return (
    <Box sx={{ mt: 12, p: 4 }}>
      <Button
        startIcon={<ArrowLeftOutlined />}
        variant="text"
        sx={{ color: colors.primary, my: 2 }}
        onClick={() => history.goBack()}
      >
        Back to results
      </Button>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            {pet && (
              <Carousel
                useArrowKeys
                dynamic
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
                show={1}
                slide={1}
              >
                {pet.photos ? pet.photos.map((photo: any) => (
                  <img
                    src={photo.fullpath}
                    width="100%"
                    alt={pet.name}
                  />
                )):  <img
                src="/_placeholderimage.png"
                width="100%"
                alt="placeholder test"
              />} {/*}
              <img
                src="/_placeholderimage.png"
                width="100%"
                alt="placeholder "
              /> */}
              </Carousel>
            )}
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: { xs: 1, md: 3 }, width: "100%" }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h3" fontWeight={600}>
                  {capitalizeFirstLowercaseRest(pet?.name || "")}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                  <Link to="#">{pet?.breed.name}</Link> |{" "}
                  <Typography>{pet?.location.name}</Typography>
                </Box>
              </Box>
              <Typography fontWeight={600}>Facts about me</Typography>

              <Grid container spacing={1}>
                <Grid item xs={12} md={5} sx={{ mt: 2 }}>
                  <List
                    sx={{ bgcolor: colors.primaryLight, borderRadius: "7px" }}
                  >
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Age
                      </Typography>
                      <ListItemText>{pet?.age}</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Color
                      </Typography>
                      <ListItemText>{pet?.color}</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Size
                      </Typography>
                      <ListItemText>{pet?.size.name}</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Gender
                      </Typography>
                      <ListItemText>{pet?.gender.name}</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={7} sx={{ mt: 2 }}>
                  <List
                    sx={{ bgcolor: colors.primaryLight, borderRadius: "7px" }}
                  >
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "140px" }}>
                        Characteristics
                      </Typography>
                      <ListItemText>
                        {pet?.pet_characteristic_pets.map(
                          (char: any, index: number) => (
                            <span>
                              {char.pet_characteristic.name}
                              {index === pet.pet_characteristic_pets.length - 1
                                ? ""
                                : ","}
                              &nbsp;
                            </span>
                          )
                        )}
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "140px" }}>
                        Cared for by
                      </Typography>
                      <ListItemText><Link to={`/breeder-profile/${pet?.member_id}`}>{`${capitalizeFirstLowercaseRest(pet?.member?.name) } ${capitalizeFirstLowercaseRest(pet?.member?.last_name) }`}</Link></ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "140px" }}>
                        Health
                      </Typography>
                      <ListItemText>{pet?.health}</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "140px" }}>
                        Good in a home with
                      </Typography>
                      <ListItemText>{pet?.good_in_home}</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Typography sx={{ my: 3 }} fontWeight={600}>
                Meet Chum
              </Typography>
              <Typography>{pet?.description}</Typography>

              <List>
                <ListItem sx={{ pl: 0 }}>
                  <Typography fontWeight={600} sx={{ width: "80px" }}>
                    Pet Price
                  </Typography>
                  <ListItemText>${pet?.price}</ListItemText>
                </ListItem>
              </List>
              <Button
                variant="contained"
                sx={{
                  bgcolor: colors.primary,
                  color: colors.white,
                  display: "block",
                  "&:hover": { bgcolor: colors.primary },
                  mx: "auto",
                }}
              >
                Contact
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Title
          text={`More pets from ${pet?.member.name + " " + pet?.member.last_name}`}
          align="left"
          variation="small"
        />

        {petsByMember && (
          <Carousel
            useArrowKeys
            dynamic
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
            {petsByMember &&
              petsByMember?.map((item: any) => (
                <PetCard
                  sx={{ mx: 2, my: 2 }}
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
                        onClick={() => history.push(`/pet/${item?.id}`)}
                      >
                        View more
                      </Button>
                    </>
                  }
                />
              ))}
          </Carousel>
        )}
        {/* <Button
          variant="text"
          sx={{
            // bgcolor: colors.textHeading,
            color: colors.textHeading,
            mx: "auto",
            textDecoration: "underline",
            display: "block",
            my: 6,
            // "&:hover": { bgcolor: colors.textHeading },
          }}
        >
          See more
        </Button> */}
      </Container>
      <Container>
        <Title text="Similar bread" align="left" variation="small" />

        {pets && (
          <Carousel
            useArrowKeys
            dynamic
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
              pets?.map((item: any) => (
                <PetCard
                  sx={{ mx: 2, my: 2 }}
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
                        onClick={() => history.push(`/pet/${item?.id}`)}
                      >
                        View more
                      </Button>
                    </>
                  }
                />
              ))}
          </Carousel>
        )}
        {/* <Button
          variant="text"
          sx={{
            // bgcolor: colors.textHeading,
            color: colors.textHeading,
            textDecoration: 'underline',
            mx: "auto",
            display: "block",
            my: 6,
          }}
        >
          See more
        </Button> */}
      </Container>

      <Explore />
    </Box>
  );
};

export default Discover;
