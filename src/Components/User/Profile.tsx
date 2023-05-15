import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Checkbox,
  Container,
  FormControlLabel,
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
import { FormControl, Select, Option, Input, Autocomplete } from "@mui/joy";
import { Close } from "@mui/icons-material";
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              {" "}
              Desired Pet
            </Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option) => option}
                // placeholder="Combo box"
                options={["Territorial", "Anxious", "Joyful", "Lots of energy"]}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : 
            ["Territorial", "Anxious", "Joyful", "Lots of energy"].map(
              (name) => {
                // const checked = selected.includes(name);
                return (
                  <StyledChip
                    key={name}
                    // variant={"plain"}
                    // color="success"
                  >
                    {name}
                  </StyledChip>
                );
              }
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}> Breed</Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option) => option}
                // placeholder="Combo box"
                options={["Territorial", "Anxious", "Joyful", "Lots of energy"]}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : 
            ["Territorial", "Anxious", "Joyful", "Lots of energy"].map(
              (name) => {
                // const checked = selected.includes(name);
                return (
                  <StyledChip
                    key={name}
                    // variant={"plain"}
                    // color="success"
                  >
                    {name}
                  </StyledChip>
                );
              }
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Pet</Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option) => option}
                // placeholder="Combo box"
                options={["Territorial", "Anxious", "Joyful", "Lots of energy"]}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : ["Territorial", "Anxious", "Joyful", "Lots of energy"].map(
              (name) => {
                // const checked = selected.includes(name);
                return (
                  <StyledChip
                    key={name}
                    // variant={"plain"}
                    // color="success"
                  >
                    {name}
                  </StyledChip>
                );
              }
            )}
          </Grid>
          <Grid item xs={12} sx={{ mt: 5 }}></Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Size</Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option) => option}
                // placeholder="Combo box"
                options={["small", "medium", "large"]}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : ["Small", "Medium"].map((name) => {
              // const checked = selected.includes(name);
              return (
                <StyledChip
                  key={name}
                  // variant={"plain"}
                  // color="success"
                >
                  {name}
                </StyledChip>
              );
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Color</Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option) => option}
                // placeholder="Combo box"
                options={["Green ", "Red", "Yellow"]}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : (
              <>
                {" "}
                {["Brown", "Green"].map((name) => {
                  // const checked = selected.includes(name);
                  return (
                    <StyledChip
                      key={name}
                      // variant={"plain"}
                      // color="success"
                    >
                      {name}
                    </StyledChip>
                  );
                })}
              </>
            )}
          </Grid>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} sx={{ mt: 5 }}></Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Cared for by
            </Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option) => option}
                // placeholder="Combo box"
                options={["Breeder", "Shelter"]}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : (
              <>
                {["Breeder", "Shelter"].map((name) => {
                  // const checked = selected.includes(name);
                  return (
                    <Typography sx={{ color: colors.primary }}>
                      {name}
                    </Typography>
                  );
                })}
              </>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Gender</Typography>
            {value ? (
              <Input variant="soft" type="text" />
            ) : (
              <Typography sx={{ color: colors.primary }}>Any</Typography>
            )}
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Box>
      <Title text="Basic information" sx={{ ml: 0, mb: 1 }} variation="small" />
      <Box
        sx={{
          p: 6,
          my: 3,
          borderRadius: 4,
          maxWidth: "85%",
          boxShadow: "6px 9px 29px -8px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container columnSpacing={4}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              What type of home do you live in?
            </Typography>

            {value ? (
              <Select defaultValue="Appartment" variant="soft">
                <Option value="appartment">Appartment</Option>
                <Option value="condominium">Condominium</Option>
                <Option value="duplex">Duplex</Option>
                <Option value="bungalows">Bungalows</Option>
              </Select>
            ) : (
              <>
                {["Appartment"].map((name) => {
                  // const checked = selected.includes(name);
                  return (
                    <StyledChip
                      key={name}
                      // variant={"plain"}
                      // color="success"
                    >
                      {name}
                    </StyledChip>
                  );
                })}
              </>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Who will be the primary caretaker of your new puppy?
            </Typography>
            {value ? (
              <Select defaultValue="Myself" variant="soft">
                <Option value="Myself">Myself</Option>
                <Option value="Someone else">Someone else</Option>
              </Select>
            ) : (
              <StyledChip>Myself</StyledChip>
            )}
          </Grid>

          <Grid item xs={12} sx={{ mt: 5 }}></Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Any other pets?
            </Typography>
            {value ? (
              <FormControl
                sx={{ display: "flex", flexDirection: "row", gap: 3 }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: colors.primary,
                        "&.Mui-checked": {
                          color: colors.primary,
                        },
                      }}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: colors.primary,
                        "&.Mui-checked": {
                          color: colors.primary,
                        },
                      }}
                    />
                  }
                  label="No"
                />
              </FormControl>
            ) : (
              <Typography sx={{ color: colors.primary }}>Yes</Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Are you at least 18 y/o?
            </Typography>
            {value ? (
              <FormControl
                sx={{ display: "flex", flexDirection: "row", gap: 3 }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: colors.primary,
                        "&.Mui-checked": {
                          color: colors.primary,
                        },
                      }}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: colors.primary,
                        "&.Mui-checked": {
                          color: colors.primary,
                        },
                      }}
                    />
                  }
                  label="No"
                />
              </FormControl>
            ) : (
              <Typography sx={{ color: colors.primary }}>Yes</Typography>
            )}
          </Grid>
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
