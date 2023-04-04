import { ArrowLeftOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Scrollable from "../../Common/Scrollable";
import Title from "../../Common/Title";
import { colors } from "../../Constants";
import { pets } from "../../data";
import Explore from "../BreederProfile/Explore";
import PetCard from "./PetCard";
// import PetCard from "../LandingPage/PetCard";
import PetCardList from "./PetCardList";

const Discover = () => {
  return (
    <Box sx={{ mt: 12, p: 4 }}>
      <Button
        startIcon={<ArrowLeftOutlined />}
        variant="text"
        sx={{ color: colors.primary, my: 2 }}
      >
        Back to results
      </Button>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Carousel>
              <img
                src="_placeholderimage.png"
                width="100%"
                alt="placeholder "
              />
              <img
                src="_placeholderimage.png"
                width="100%"
                alt="placeholder "
              />
              <img
                src="_placeholderimage.png"
                width="100%"
                alt="placeholder "
              />
            </Carousel>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: {xs: 1, md: 3}, width: "100%" }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h3" fontWeight={600}>
                  Chum
                </Typography>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                  <Link href="#">Poodle</Link> |{" "}
                  <Typography>South Carolina</Typography>
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
                      <ListItemText>8 months</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Color
                      </Typography>
                      <ListItemText>Tan/Red</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Size
                      </Typography>
                      <ListItemText>Small (0-25lbs)</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Gender
                      </Typography>
                      <ListItemText>Male</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={7} sx={{ mt: 2 }}>
                  <List
                    sx={{ bgcolor: colors.primaryLight, borderRadius: "7px" }}
                  >
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Age
                      </Typography>
                      <ListItemText>8 months</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Color
                      </Typography>
                      <ListItemText>Tan/Red</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Size
                      </Typography>
                      <ListItemText>Small (0-25lbs)</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Gender
                      </Typography>
                      <ListItemText>Male</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Typography sx={{ my: 3 }} fontWeight={600}>
                Meet Chum
              </Typography>
              <Typography>
                Consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                vitae congue. Consectetur adipiscing elit duis tristique
                sollicitudin nibh sit amet commodo nulla facilisi nullam
                vehicula ipsum a arcu cursus vitae congue. Consectetur
                adipiscing elit duis tristique sollicitudin nibh sit amet
                commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                congue. Read more
              </Typography>

              <List >
              <ListItem sx={{pl: 0}}>
                      <Typography fontWeight={600} sx={{ width: "80px" }}>
                        Pet Price
                      </Typography>
                      <ListItemText>Tan/Red</ListItemText>
                    </ListItem>
              </List>
              <Button variant='contained' sx={{bgcolor: colors.primary, color: colors.white, display: 'block', '&:hover': {bgcolor: colors.primary}, mx: 'auto'}}>Contact</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Title text="More dogs from little pawn" align="left" variation="small" />

        <Scrollable>
        {pets.slice(0, 4).map(item => <PetCard sx={{mx: 2, my: 2}} key={item.id} size={4} data={item} />)}
          
        </Scrollable>
        <Button
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
        </Button>
      </Container>
      <Container>
        <Title text="Similar bread" align="left" variation="small" />

        <Scrollable>
        {pets.slice(0, 4).map(item => <PetCard sx={{mx: 2, my: 2}} key={item.id} size={4} data={item} />)}
        </Scrollable>
        <Button
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
        </Button>
      </Container>

        <Explore />
    </Box>
  );
};

export default Discover;
