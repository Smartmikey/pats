import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import Title from "../Common/Title";

const AnimalShelter = () => {

  return (
    <Box sx={{ my: 15, position: "relative" }}>
      <Title
        text="Animal Shelter & Animal Rescue Code of Ethics"
        variation="large"
        align="center"
      />
      {/* Blobs */}
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs-1.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs-2.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs-3.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blob-12.png"
      />
      {/* Blobs */}
      <Container sx={{ pl: { xs: 3, md: 20 } }}>
        <List>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">
              1. Every animal deserves humane treatment
            </Typography>
            <Typography sx={{ pl: 5 }}>
              Animal shelters should provide proper care, adequate food, clean
              water, and medical attention to every animal under their care.
              They should ensure that animals are not subjected to cruel,
              inhumane, or unnecessary practices.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">
              2. Transparency and accountability
            </Typography>
            <Typography sx={{ pl: 5 }}>
              Animal shelters should be transparent about their policies,
              procedures, and animal care standards. They should be accountable
              for their actions, finances, and operations, and be open to
              criticism and feedback from the public.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">3. Education and Outreach</Typography>
            <Typography sx={{ pl: 5 }}>
              Animal shelters should educate the public about responsible pet
              ownership, animal welfare, and the importance of spaying and
              neutering. They should also promote adoption and provide resources
              to help pet owners keep their animals healthy and happy.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">4. Non-Discrimination</Typography>
            <Typography sx={{ pl: 5 }}>
              Animal shelters should not discriminate against animals based on
              their breed, age, appearance, or any other factor. They should
              treat all animals equally and provide them with the same level of
              care and attention.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">5. Collaboration</Typography>
            <Typography sx={{ pl: 5 }}>
              Animal shelters should work together with other animal welfare
              organizations, veterinary clinics, and rescue groups to promote
              animal welfare, reduce the number of homeless animals, and
              increase adoptions.
            </Typography>
          </ListItem>
        </List>
        <Typography sx={{ mt: 2, lineHeight: 1.5 }}>
          These codes of ethics should serve as guidelines for animal shelters
          and animal rescues to provide the best care for animals in need while
          promoting animal welfare and responsible pet ownership. At PATS, we
          value the organizations that adhere to the best practices when it
          comes to animal welfare and will not condone anything less.
        </Typography>
       
      </Container>
    </Box>
  );
};

export default AnimalShelter;
