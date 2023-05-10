import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  Tab,
  Tabs,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import React, { useState } from "react";
import { colors } from "../../Constants";
import Title from "../../Common/Title";
const Profile = () => {
  const [value, setValue] = useState(false);

  const handleEditing = () => {
    setValue(!value);
  };

  return (
    <Box>
      <Box maxHeight="300px">
        <CardMedia
          component="img"
          height="200px"
          src="/_placeholderImage.png"
        />
        <Container
          sx={{
            bgcolor: colors.primaryLight,
          }}
          maxWidth="xl"
        >
          <Box
            sx={{
              px: { xs: 1.5, md: 10 },
              py: 3,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Avatar
              src="ladyImage.png"
              sx={{ width: 150, height: 150, mt: -9 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ fontSize: { xs: "24px" } }}>
                Little Paws Breeder
              </Typography>
              <Typography variant="subtitle2">Random things</Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                "&:hover": {
                  borderColor: colors.primary,
                  color: colors.primary,
                },
              }}
              onClick={handleEditing}
            >
              Edit my profile
            </Button>
          </Box>
        </Container>
      </Box>
      <Title text="About me" sx={{ ml: 0 }} variation="small" />
      <Box
        sx={{
          p: 3,
          my: 3,
          borderRadius: 4,
          maxWidth: "90%",
          boxShadow: "6px 9px 29px -8px rgba(0,0,0,0.1)",
        }}
      >
        <Container sx={{ my: 7 }}>
          {value ? (
            <>
              <OutlinedInput
                sx={{ my: 4, color: colors.textHeading }}
                value=" Hi! I’m Mac from Little Paws"
                size="small"
              />
              <TextareaAutosize
                minRows={12}
                defaultValue="I am a dedicated and passionate breeder with a love for all things
            canine. My interest in breeding started at a young age and has only
            grown over the years as I have gained knowledge and experience in
            the field. I am committed to breeding healthy, happy, and
            well-tempered dogs. I spend a lot of time researching and studying
            different breeds, paying close attention to their physical
            characteristics and temperaments. I also make sure to keep
            up-to-date with best practices in breeding and genetics to ensure
            that my dogs are healthy and free of any genetic disorders. My
            breeding program is focused on producing high-quality dogs that are
            not only beautiful, but also have great dispositions and
            temperaments. I am proud of the work that I do and the dogs that I
            produce, and I enjoy sharing my knowledge and passion for breeding
            with others."
                style={{ display: "block", width: "100%" }}
              />
            </>
          ) : (
            <>
              <Typography
                variant="h5"
                sx={{ my: 4, color: colors.textHeading }}
              >
                Hi! I’m Mac from Little Paws{" "}
              </Typography>
              <Typography>
                I am a dedicated and passionate breeder with a love for all
                things canine. My interest in breeding started at a young age
                and has only grown over the years as I have gained knowledge and
                experience in the field. I am committed to breeding healthy,
                happy, and well-tempered dogs. I spend a lot of time researching
                and studying different breeds, paying close attention to their
                physical characteristics and temperaments. I also make sure to
                keep up-to-date with best practices in breeding and genetics to
                ensure that my dogs are healthy and free of any genetic
                disorders. My breeding program is focused on producing
                high-quality dogs that are not only beautiful, but also have
                great dispositions and temperaments. I am proud of the work that
                I do and the dogs that I produce, and I enjoy sharing my
                knowledge and passion for breeding with others. When I'm not
                busy breeding, I enjoy spending time with my dogs and taking
                them on adventures. I also love to compete in dog shows and
                events, as it allows me to showcase the qualities of my dogs and
                meet other breeders and enthusiasts.
              </Typography>
            </>
          )}
          <Typography variant="h5" sx={{ my: 4, color: colors.textHeading }}>
            Contact info
          </Typography>
          <Box
            sx={{
              bgcolor: colors.primaryLight,
              p: { xs: 1, md: 5 },
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={6}>
                <List sx={{ width: "100%", maxWidth: 450 }}>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Contact" />
                    {value ? <OutlinedInput size="small" value="John Doe" /> :<ListItemText>John Doe</ListItemText>}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Email" />
                    {value ? <OutlinedInput size="small" value="John@doe.com" /> : <ListItemText>John@doe.com</ListItemText>}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Website" />{" "}
                    {value ? <OutlinedInput size="small" value="John@doe.com" /> :<ListItemText>www.jhondow.com</ListItemText>}
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List sx={{ width: "100%", maxWidth: 450 }}>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Phone" />
                    {value ? <OutlinedInput size="small" value="(342) 8785 453" /> : <ListItemText>(342) 8785 453</ListItemText>}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Address" />
                    {value ? <OutlinedInput size="small" value="(342) 8785 453" /> :<ListItemText>Somewhere in the world</ListItemText>}
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Title text="Process for getting a puppy" sx={{ ml: 0, mb: 1 }} variation="small" />
      <Box
        sx={{
          p: 6,
          my: 3,
          borderRadius: 4,
          maxWidth: "85%",
          boxShadow: "6px 9px 29px -8px rgba(0,0,0,0.1)",
        }}
      >
        {value ? <TextareaAutosize
                minRows={12}
                defaultValue="I am a dedicated and passionate breeder with a love for all things
            canine. My interest in breeding started at a young age and has only
            grown over the years as I have gained knowledge and experience in
            the field. I am committed to breeding healthy, happy, and
            well-tempered dogs. I spend a lot of time researching and studying
            different breeds, paying close attention to their physical
            characteristics and temperaments. I also make sure to keep
            up-to-date with best practices in breeding and genetics to ensure
            that my dogs are healthy and free of any genetic disorders. My
            breeding program is focused on producing high-quality dogs that are
            not only beautiful, but also have great dispositions and
            temperaments. I am proud of the work that I do and the dogs that I
            produce, and I enjoy sharing my knowledge and passion for breeding
            with others."
                style={{ display: "block", width: "100%" }}
              />
             : <Typography>If you're interested in a puppy from Little Paws, please contact the breeder. You'll be asked to provide information about yourself and what you are looking for so the breeder can help you find the right match. Once you apply, Mac will get back to you about availability, pricing and next steps.</Typography>}
        <Grid container>
              <Grid item xs={12}>
                <List sx={{ width: "100%", maxWidth: 650 }}>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Price" />
                    {value ? <OutlinedInput size="small" value="$1000 - $2000" /> :<ListItemText>$1000 - $2000</ListItemText>}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Date" />
                    {value ? <OutlinedInput size="small" value="Puppies will be available after 8 weeks of being born " /> : <ListItemText>Puppies will be available after 8 weeks of being born </ListItemText>}
                  </ListItem>
                  {/* <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Website" />{" "}
                    {value ? <OutlinedInput size="small" value="John@doe.com" /> :<ListItemText>www.jhondow.com</ListItemText>}
                  </ListItem> */}
                </List>
              </Grid>
              </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
