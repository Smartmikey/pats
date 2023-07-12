import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { HomeMax, School, FormatListBulleted } from "@mui/icons-material";
import { styled } from "@mui/styles";
import FilterSidebar from "./FilterSidebar";
import { colors } from "../../Constants/index";
import PetCardList from "./PetCardList";
import { useState } from "react";
import { bgcolor } from "@mui/system";

const Discovery = () => {
  const [openPopOver, setOpenPopOver] = useState(false);

  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      <Grid container sx={{ mt: 12, px: {xs: 4, md: 8} }}>
        {/* <Grid item xs={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ mr: 1, fontWeight: "700" }}>
              Filter by
            </Typography>
            <Button
              variant="text"
              sx={{
                color: colors.dark,
                textTransform: "capitalize",
                textDecoration: "underline",
              }}
            >
              Reset
            </Button>
          </Box>
          <FilterSidebar />
        </Grid> */}
        <Grid item md={12} xs={12}>
          <Box
            sx={{
              background: colors.gray,
              py: 2,
              px: 4,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextFieldWithoutBorder
              id="outlined-search-flexible"
              label="Search"
              maxRows={12}
              sx={{ background: colors.white, border: "none", borderRadius: 2 }}
              size="small"
              //         variant='standard'
              //   InputProps={{
              //   disableUnderline: true,
              // }}
            />
            <div style={{ position: "relative" }}>
              <Button
                startIcon={<img src="sortIcon.svg" alt="sort icon" />}
                sx={{ background: colors.white, px: 1.5 }}
                onClick={() => setOpenPopOver(!openPopOver)}
              >
                Sort
              </Button>
              {openPopOver && (
                <List
                  sx={{
                    position: "absolute",
                    bgcolor: colors.white,
                    m: 2,
                    zIndex: 9999,
                    width: "200px",
                    right: 0,
                    borderRadius: "8px",
                    boxShadow: " 0 3px 8px rgb(0 0 0 / 0.15)",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          bgcolor: colors.primary,
                          color: colors.white,
                        },
                      }}
                    >
                      <ListItemText primary="Price" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          bgcolor: colors.primary,
                          color: colors.white,
                        },
                      }}
                      component="a"
                      href="#simple-list"
                    >
                      <ListItemText primary="Newest to Oldest" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          bgcolor: colors.primary,
                          color: colors.white,
                        },
                      }}
                      component="a"
                      href="#simple-list"
                    >
                      <ListItemText primary="Oldest to Newest" />
                    </ListItemButton>
                  </ListItem>
                </List>
              )}
            </div>
          </Box>
          <PetCardList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Discovery;

const TextFieldWithoutBorder = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
  },
});
