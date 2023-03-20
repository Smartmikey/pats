import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { StyleRules } from "@mui/styles";
import { spacing } from "@mui/system";
import { relative } from "path";
import React from "react";
import Scrollable from "../../Common/Scrollable";
import Title from "../../Common/Title";
import PetCard from "./PetCard";

const LandingPage = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: { xs: "60vh", md: "90vh" },
          mt: 9,
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "50%",
            position: "absolute",
            bottom: 0,
          }}
          src="dog-head.png"
          alt="dog head background"
        />
        <Container
          sx={{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="pats.svg" style={{ width: "300px" }} alt="pats logo" />
          <Box sx={{ mt: 3, mb: 18, textAlign: "center" }}>
            <TextField
              id="looking-for"
              size="small"
              sx={{ mx: 1, my: { xs: 1, md: "unset" } }}
              label="What are you looking for?"
              variant="outlined"
            />
            <TextField
              id="Location"
              size="small"
              sx={{ mx: 1, my: { xs: 1, md: "unset" } }}
              label="Location"
              variant="outlined"
            />
            <Button
              sx={{
                my: { xs: 1, md: "unset" },
                display: { xs: "block", md: "inline" },
                mx: "auto",
              }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>
      <Container>
        <Title text="Popular category" align="center" variation="medium" />
        <Scrollable >
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </Scrollable>
      </Container>
    </Box>
  );
};

export default LandingPage;
