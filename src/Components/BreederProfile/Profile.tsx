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
import React, { useEffect, useState } from "react";
import { colors } from "../../Constants";
import AboutMe from "./AboutMe";
import AdoptionProcess from "./AdoptionProcess";
import AvailablePets from "./AvailablePets";
import Explore from "./Explore";
import Reviews from "./Reviews";
import SimilarBreed from "./SimilarBreed";
import WriteReview from "./WriteReview";
import { useParams } from "react-router-dom";
import Axios from "../../API/Axios";
import { capitalize } from "@material-ui/core";
import { capitalizeFirstLowercaseRest } from "../../utility";

const Profile = () => {
  const [value, setValue] = useState("one");
  const [breederProfile, setBreederProfile] = useState<any>()
const { id } = useParams<any>();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
console.log(breederProfile);

  useEffect(() => {
    // if (user?.id) {
      Axios.get(`member/breeder/${id}`).then((res) => {
        console.log(res);
        
        setBreederProfile(res.data.data[0]);
      });
    // }
    // const getBreederProfile = async () => {
    //   const cityRes = Axios.get("city");
    //   const stateRes = Axios.get("state");
    //   const locationRes = Axios.get("location");
    //   setState({
    //     cityRes: (await cityRes).data.data,
    //     stateRes: (await stateRes).data.data,
    //     locationRes: (await locationRes).data.data,
    //   });
    // };
    // getBreederProfile();
  }, [id]);
  return (
    <Box sx={{ mt: 12 }}>
      <Box maxHeight="300px">
        <CardMedia component="img" height="200px" src="/_placeholderImage.png" />
        <Container
          sx={{
            bgcolor: colors.primaryLight,
          }}
          maxWidth="xl"
        >
          <Box
            sx={{
              px: {xs:1.5, md:10},
              py: 3,
              display: "flex",
              flexDirection: {xs: "column", md: 'row'},
              alignItems: "center",
              gap: 4,
            }}
          >
            <Avatar
              src="ladyImage.png"
              sx={{ width: 150, height: 150, mt: -9 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{fontSize: {xs: '24px'}}}>{capitalizeFirstLowercaseRest(`${breederProfile?.name} ${breederProfile?.last_name}`)}</Typography>
              <Typography variant="subtitle2">Breed's {capitalizeFirstLowercaseRest(breederProfile?.breeder_type?.name)}</Typography>
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
          width: {xs: '85%', md:"80%"},
          px: {xs: 2,md:20},
          my: {xs:30, md:6},
          mb: {xs: 5},
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

        variant="scrollable"
        scrollButtons={false}
        >
          <ModifiedTab sx={{fontSize: {xs: '10px', md: '18px'}}} value="one" label="About me" />
          <ModifiedTab sx={{fontSize: {xs: '10px', md: '18px'}}} value="two" label="Available pets" />
          <ModifiedTab sx={{fontSize: {xs: '10px', md: '18px'}}} value="three" label="Reviews" />
        </Tabs>
        {value === 'one' &&(<AboutMe data={breederProfile || {}} />)}
        {value === 'two' &&(<AvailablePets data={breederProfile || {}} />)}
        {value === 'three' &&(<Reviews />)}
        
      </Box>
      {value === 'one' &&(<AdoptionProcess data={breederProfile || {}} />)}
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
