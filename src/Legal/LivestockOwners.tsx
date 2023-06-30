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

const LivestockOwners = () => {
  return (
    <Box sx={{ my: 15, position: "relative" }}>
      <Title
        text="Livestock Owners Code of Ethics"
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
            <Typography variant="h5">1. Animal Welfare</Typography>
            <Typography sx={{ pl: 5 }}>
              All livestock owners and farmers listed on PATS must provide
              adequate and appropriate care for their animals, ensuring they are
              well-fed, properly sheltered, and receive necessary medical
              treatment.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">2. Transparency</Typography>
            <Typography sx={{ pl: 5 }}>
              Farmers and livestock owners must provide accurate and complete
              information about their animals and their living conditions. Any
              misleading or false advertising will not be tolerated.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">3. Environmental Stewardship</Typography>
            <Typography sx={{ pl: 5 }}>
              Farmers and livestock owners must follow environmentally
              sustainable practices and avoid any activities that may cause harm
              to the natural environment.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">4. Legal Compliance </Typography>
            <Typography sx={{ pl: 5 }}>
              All livestock owners and farmers must comply with relevant laws
              and regulations pertaining to animal welfare, environmental
              protection, and public health.
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">5. Continuous Improvement </Typography>
            <Typography sx={{ pl: 5 }}>
              Animal shelters should work together with other animal welfare
              organizations, veterinary clinics, and rescue groups to promote
              animal welfare, reduce the number of homeless animals, and
              increase adoptions.
            </Typography>
          </ListItem>
        </List>
        <Typography sx={{ mt: 2, lineHeight: 1.5 }}>
          At PATS, we take these ethical standards seriously and hold our
          business partners to the highest level of accountability. By following
          these guidelines, we can work together to promote responsible,
          sustainable, and ethical farming practices.
        </Typography>
      </Container>
    </Box>
  );
};

export default LivestockOwners;
