import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Title from "../../Common/Title";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "../../Constants";
import {
  Chip,
  FormControl,
  FormLabel,
  Checkbox,
  Input,
  Textarea,
} from "@mui/joy";
import { styled } from "@mui/styles";

const AddPet = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Box>
      <Title text="Add a pet" sx={{ ml: 0 }} />
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          my: 6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box maxWidth="200px" sx={{ mx: "auto", my: 6 }}>
          <Button
            sx={{
              bgcolor: colors.grayLight,
              height: "150px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "unset",
              "&:hover": { bgcolor: colors.grayLight },
            }}
            variant="contained"
            component="label"
          >
            <img src="/cameraIcon.svg" alt="upload icon" />
            <Typography sx={{ color: colors.textHeading }}>Upload</Typography>
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Box>
        <Divider />

        <form>
          <Grid container spacing={8} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Type of Animal
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input variant="soft" placeholder="e.g Dog, cat" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Breed
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input variant="soft" placeholder="e.g Akita,  poodle" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>Size</FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input variant="soft" placeholder="e.g Small (0-25lbs)" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Health
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input
                    variant="soft"
                    placeholder="e.g Vaccines, medication"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Pet Price
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input variant="soft" placeholder="e.g $1000" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Gender
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input variant="soft" placeholder="e.g Male" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Color
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input variant="soft" placeholder="e.g Tan/Red" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>Age</FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input variant="soft" placeholder="e.g 8 months" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Good in a home with
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input
                    variant="soft"
                    placeholder="e.g no other pets, family"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
        <Divider sx={{ my: 6 }} />
        <Grid container>
          <Grid item xs={12} md={3}>
            <FormLabel sx={{ color: colors.textHeading }}>
              Pet Characteristics
            </FormLabel>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box
              role="group"
              aria-labelledby="fav-movie"
              sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
            >
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
                const checked = selected.includes(name);
                return (
                  <StyledChip
                    key={name}
                    variant={checked ? "soft" : "plain"}
                    color="success"
                    startDecorator={
                      checked && (
                        <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />
                      )
                    }
                  >
                    <Checkbox
                      variant="outlined"
                      color={checked ? "primary" : "neutral"}
                      disableIcon
                      overlay
                      label={name}
                      checked={checked}
                      onChange={(event) => {
                        setSelected((names) =>
                          !event.target.checked
                            ? names.filter((n) => n !== name)
                            : [...names, name]
                        );
                      }}
                    />
                  </StyledChip>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Describe your pet </FormLabel>
              <Textarea variant="soft" minRows={10} />
            </FormControl>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center", my: 6 }} item xs={12}>
            <Button
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                "&:hover": {
                  borderColor: colors.primary,
                  color: colors.primary,
                },
                mx: 4
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" sx={{
                bgcolor: colors.primary,
                color: colors.white,
                "&:hover": {
                  bgcolor: colors.primary,
                  color: colors.white,
                },
              }}>Add pets</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const StyledChip = styled(Chip)({
  "&.MuiChip-root": {
    // backgroundColor: `${colors.primary}!important`,
    "--Chip-radius": "4px",
    margin: "3px 6px",
  },
});
export default AddPet;
