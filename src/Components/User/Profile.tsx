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
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { colors } from "../../Constants";
import Title from "../../Common/Title";
import Chip from "@mui/joy/Chip";
import styled from "@emotion/styled";
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
                    {value ? (
                      <OutlinedInput size="small" value="John Doe" />
                    ) : (
                      <ListItemText>John Doe</ListItemText>
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Email" />
                    {value ? (
                      <OutlinedInput size="small" value="John@doe.com" />
                    ) : (
                      <ListItemText>John@doe.com</ListItemText>
                    )}
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List sx={{ width: "100%", maxWidth: 450 }}>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Phone" />
                    {value ? (
                      <OutlinedInput size="small" value="(342) 8785 453" />
                    ) : (
                      <ListItemText>(342) 8785 453</ListItemText>
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Location" />
                    {value ? (
                      <OutlinedInput size="small" value="Fort Lauderdale, FL" />
                    ) : (
                      <ListItemText>Fort Lauderdale, FL</ListItemText>
                    )}
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Title text="My interest" sx={{ ml: 0, mb: 1 }} variation="small" />
      <Box
        sx={{
          p: 6,
          my: 3,
          borderRadius: 4,
          maxWidth: "85%",
          boxShadow: "6px 9px 29px -8px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography sx={{fontWeight: 600, mb:2}}> Desired Pet</Typography>
            {[
              "Territorial",
              "Anxious",
              "Joyful",
              "Lots of energy",
            ].map((name) => {
              // const checked = selected.includes(name);
              return (
                <StyledChip
                  key={name}
                  // variant={"plain"}
                  // color="success"
                >{name}</StyledChip>
              );
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{fontWeight: 600, mb:2}}> Breed</Typography>
            {[
              "Territorial",
              "Anxious",
              "Joyful",
              "Lots of energy",
            ].map((name) => {
              // const checked = selected.includes(name);
              return (
                <StyledChip
                  key={name}
                  // variant={"plain"}
                  // color="success"
                >{name}</StyledChip>
              );
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{fontWeight: 600, mb:2}}>Pet</Typography>
            {[
              "Territorial",
              "Anxious",
              "Joyful",
              "Lots of energy",
            ].map((name) => {
              // const checked = selected.includes(name);
              return (
                <StyledChip
                  key={name}
                  // variant={"plain"}
                  // color="success"
                >{name}</StyledChip>
              );
            })}
          </Grid>
          <Grid item xs={12} sx={{mt:5}}></Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{fontWeight: 600, mb:2}}>Size</Typography>
            {[
              "Small",
              "Medium",
             
            ].map((name) => {
              // const checked = selected.includes(name);
              return (
                <StyledChip
                  key={name}
                  // variant={"plain"}
                  // color="success"
                >{name}</StyledChip>
              );
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{fontWeight: 600, mb:2}}>Color</Typography>
            {[
              "Brown",
              "Green",
            ].map((name) => {
              // const checked = selected.includes(name);
              return (
                <StyledChip
                  key={name}
                  // variant={"plain"}
                  // color="success"
                >{name}</StyledChip>
              );
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            
          </Grid>
          <Grid item xs={12} sx={{mt:5}}></Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{fontWeight: 600, mb:2}}>Cared for by</Typography>
            {[
              "Breeder",
              "Shelter",
             
            ].map((name) => {
              // const checked = selected.includes(name);
              return (
                <Typography sx={{color: colors.primary}}>{name}</Typography>
              );
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{fontWeight: 600, mb:2}}>Gender</Typography>
            <Typography sx={{color: colors.primary}}>Any</Typography>
             
          </Grid>
          <Grid item xs={12} md={4}>
            
          </Grid>
        </Grid>
        {/* comment out */}
        {/* {value ? (
          
        <></>
        ) : (
          <>
            {[
              "Territorial",
              "Anxious",
              "Playful",
              "Affectionate",
              "Trained",
              "Protective",
              "Friendly",
              "Joyful",
              "Lots of energy",
            ].map((name) => {
              // const checked = selected.includes(name);
              return (
                <StyledChip
                  key={name}
                  // variant={"plain"}
                  // color="success"
                >{name}</StyledChip>
              );
            })}
          </>
        )} */}
        <Grid container>
          <Grid item xs={12}>
            <List sx={{ width: "100%", maxWidth: 650 }}>
              <ListItem>
                <ListItemText sx={{ maxWidth: 100 }} primary="Price" />
                {value ? (
                  <OutlinedInput size="small" value="$1000 - $2000" />
                ) : (
                  <ListItemText>$1000 - $2000</ListItemText>
                )}
              </ListItem>
              <ListItem>
                <ListItemText sx={{ maxWidth: 100 }} primary="Date" />
                {value ? (
                  <OutlinedInput
                    size="small"
                    value="Puppies will be available after 8 weeks of being born "
                  />
                ) : (
                  <ListItemText>
                    Puppies will be available after 8 weeks of being born{" "}
                  </ListItemText>
                )}
              </ListItem>
              {/* <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Website" />{" "}
                    {value ? <OutlinedInput size="small" value="John@doe.com" /> :<ListItemText>www.jhondow.com</ListItemText>}
                  </ListItem> */}
            </List>
          </Grid>
          {value && (
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: colors.primary,
                  color: colors.primary,
                  mx: 0.6,
                  "&:hover": {
                    borderColor: colors.primary,
                    color: colors.dark,
                  },
                }}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: colors.primary,
                  color: colors.white,
                  mx: 0.6,
                  "&:hover": {
                    bgcolor: colors.primary,
                    color: colors.dark,
                  },
                }}
              >
                Save changes
              </Button>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

const StyledChip = styled(Chip)({
  "&.MuiChip-root": {
    backgroundColor: `${colors.primary}!important`,
    "--Chip-radius": "10px",
    margin: "3px 6px",
  },
});

export default Profile;
