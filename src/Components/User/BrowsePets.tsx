import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  TextField,
  Grid,
} from "@mui/material";
import { useState, useEffect } from "react";
import { colors } from "../../Constants";
import styled from "@emotion/styled";
import { Filter, FilterAlt } from "@mui/icons-material";
import Title from "../../Common/Title";
// import { pets } from "../../data";
import PetCard from "../Discovery/PetCard";
import Axios from "../../API/Axios";
import { useHistory } from "react-router-dom";

const BrowsePets = () => {
  const [openPopOver, setOpenPopOver] = useState(false);
  const [pets, setPets] = useState<any>();
  const history = useHistory();
  useEffect(() => {
    Axios.get("/breeder/pets").then((res) => {
      setPets(res.data.data);
    });
  }, []);
  return (
    <>
      <Title text="Browse pets" sx={{ ml: 0, mb: 1 }} />
      <Box
        sx={{
          p: 3,
          my: 3,
          borderRadius: 4,
          maxWidth: "90%",
          boxShadow: "6px 9px 29px -8px rgba(0,0,0,0.1)",
        }}
      >
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
              startIcon={<img src="/sortIcon.svg" alt="sort icon" />}
              sx={{ background: colors.white, px: 1.5, mx: 2 }}
              onClick={() => setOpenPopOver(!openPopOver)}
            >
              Sort
            </Button>
            <Button
              startIcon={<FilterAlt sx={{ color: colors.dark }} />}
              sx={{ background: colors.white, px: 1.5 }}
              onClick={() => setOpenPopOver(!openPopOver)}
            >
              Filters
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

        <Grid container spacing={4} sx={{ mt: 5 }}>
          {pets && pets.map((item:any) => (
            <PetCard
              key={item.id}
              size={4}
              data={item}
              Action={
                <>
                  <Button
                    variant="outlined"
                    sx={{
                      color: colors.primary,
                      borderColor: colors.primary,
                      mx: 1,
                      borderRadius: "6px",
                      "&:hover": { borderColor: colors.primary },
                    }}
                    onClick={()=> history.push(`/pet/${item.id}`)}
                  >
                    View more
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: colors.primary,
                      mx: 1,
                      borderRadius: "6px",
                      "&:hover": { backgroundColor: colors.primary },
                    }}
                  >
                    Contact
                  </Button>
                </>
              }
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

const TextFieldWithoutBorder = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
  },
});

export default BrowsePets;
