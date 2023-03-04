import {
  Box,
  Button,
  Container,
  Grid,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { HomeMax, School, FormatListBulleted } from "@mui/icons-material";
import { styled } from "@mui/styles";
import FilterSidebar from "./FilterSidebar";
import HeaderNav from "../../Common/HeaderNav";
import { colors } from "../../Constants/index";
import PetCardList from "./PetCardList";

const Discovery = () => {
  const menuItems = [
    { path: "home", text: "Home", icon: <HomeMax /> },
    { path: "candidates", text: "Candidates", icon: <School /> },
    { path: "jobs", text: "Jobs", icon: <FormatListBulleted /> },
  ];
  return (
    <Box sx={{ p: 5 }}>
      <Grid container sx={{ mt: 12 }}>
        <Grid item xs={3}>
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
        </Grid>
        <Grid item xs={9}>
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
            <div>
              <Button
                startIcon={<img src="sortIcon.svg" />}
                sx={{ background: colors.white, px: 1.5 }}
              >
                Sort
              </Button>
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
