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

const BreederCode = () => {
  return (
    <Box sx={{ my: 15, position: "relative" }}>
      <Title
        text="Breeders Code of Ethics"
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
            <Typography variant="h5">1. Breeding Standards</Typography>
            <Typography sx={{ pl: 5 }}>
              Breeders should adhere to the highest standards of animal welfare,
              including proper nutrition, healthcare, and socialization.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">2. Health Testing</Typography>
            <Typography sx={{ pl: 5 }}>
              Breeders should perform regular health testing on their breeding
              animals to ensure the health and well-being of the offspring.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">3. Responsible Breeding</Typography>
            <Typography sx={{ pl: 5 }}>
              Breeders should only breed healthy animals that meet breed
              standards and have the potential to produce quality offspring.
              They should avoid breeding animals with genetic defects or health
              issues.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">4. Placement</Typography>
            <Typography sx={{ pl: 5 }}>
              Breeders should carefully screen potential buyers and ensure that
              the animals are going to responsible, loving homes that are
              suitable for the breed. They should not sell to pet stores,
              brokers, or puppy mills.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">5. Education</Typography>
            <Typography sx={{ pl: 5 }}>
              Breeders should be knowledgeable about the breed they are working
              with and should educate potential buyers about the breed's
              temperament, characteristics, and care requirements.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">6. Support</Typography>
            <Typography sx={{ pl: 5 }}>
              Breeders should provide ongoing support to buyers, including
              guidance on training, socialization, and health care.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">7. Contract</Typography>
            <Typography sx={{ pl: 5 }}>
              Breeders should provide a written contract that includes health
              guarantees, registration papers, and other important information
              related to the sale of the animal.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">8. Transparency</Typography>
            <Typography sx={{ pl: 5 }}>
              Breeders should be transparent about their breeding practices,
              including any potential health issues or genetic defects in their
              breeding animals.
            </Typography>
          </ListItem>
        </List>
        <Typography sx={{ mt: 2, lineHeight: 1.5 }}>
          By following these ethical standards, breeders can ensure the health
          and well-being of their animals and contribute to the overall welfare
          of the animal community. At PATS, we believe in promoting responsible
          breeding practices and supporting breeders who adhere to these high
          standards.
        </Typography>
      </Container>
    </Box>
  );
};

export default BreederCode;
