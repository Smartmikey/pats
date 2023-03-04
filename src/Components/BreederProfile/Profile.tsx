import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import React, { useState } from "react";
import { colors } from "../../Constants";
import AboutMe from "./AboutMe";
import AdoptionProcess from "./AdoptionProcess";
import AvailablePets from "./AvailablePets";
import Explore from "./Explore";
import Reviews from "./Reviews";
import SimilarBreed from "./SimilarBreed";
import WriteReview from "./WriteReview";

const Profile = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ mt: 12 }}>
      <Box maxHeight="300px">
        <CardMedia component="img" height="200px" src="_placeholderimage.png" />
        <Container
          sx={{
            bgcolor: colors.primaryLight,
          }}
          maxWidth="xl"
        >
          <Box
            sx={{
              px: 10,
              py: 3,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Avatar
              src="ladyImage.png"
              sx={{ width: 150, height: 150, mt: -9 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4">Little Paws Breeder</Typography>
              <Typography variant="subtitle2">Random things</Typography>
            </Box>
            <Button
              sx={{
                bgcolor: colors.primary,
                color: colors.white,
                "&:hover": { bgcolor: colors.primary, color: colors.white },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          width: "80%",
          px: 20,
          my: 6,
          boxShadow: " 0 3px 8px rgb(0 0 0 / 0.15)",
          p: 8,
          mx: "auto",
          borderRadius: '8px',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          TabIndicatorProps={{
            style: { display: "none" },
          }}
        >
          <ModifiedTab value="one" label="About me" />
          <ModifiedTab value="two" label="Available pets" />
          <ModifiedTab value="three" label="Reviews" />
        </Tabs>
        {value === 'one' &&(<AboutMe />)}
        {value === 'two' &&(<AvailablePets />)}
        {value === 'three' &&(<Reviews />)}
        
      </Box>
      {value === 'one' &&(<AdoptionProcess />)}
      {value === 'three' &&(<WriteReview />)}
      {(value === 'two' || value === 'three') &&(<SimilarBreed />)}
      
      <Explore />
    </Box>
  );
};

const ModifiedTab = styled(Tab)({
  '&.MuiTab-root': {

    backgroundColor: "#b0e9d5",
    marginRight: 15,
    borderRadius: "8px",
    color: colors.white,
  },
  "&.Mui-selected": {
    backgroundColor: colors.primary,
    color: `${colors.white}!important`,
  },
});

export default Profile;
