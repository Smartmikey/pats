import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import Title from "../../Common/Title";
import PetCardList from "../Discovery/PetCardList";
import { pets } from "../../data";
import PetCard from "../Discovery/PetCard";
import { colors } from "../../Constants";

const AvailablePets = () => {
  return (
    <Box sx={{pb: {xs:4, md:12, maxWidth: "96%"}}}>
      <Title sx={{ ml: 0 }} text="Available Pets" />
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Grid container spacing={3} sx={{ py: 6 }}>

        {pets.slice(0, 6).map((item) => (
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
                  textTransform: 'initial',
                  "&:hover": { borderColor: colors.primary },
                }}
                href="/pet"
              >
                Mark as sold
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors.primary,
                  mx: 1,
                  textTransform: 'initial',
                  borderRadius: "6px",
                  "&:hover": { backgroundColor: colors.primary },
                }}
              >
                Edit
              </Button>
            </>
          }
        />
      ))}
        </Grid>
      </Box>
      <Title sx={{ ml: 0 }} text="Past Pets" />
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Grid container spacing={3} sx={{ py: 6 }}>

        {pets.slice(0, 6).map((item) => (
        <PetCard
          key={item.id}
          size={4}
          data={item}
          Action={
           
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors.primary,
                  mx: 1,
                  textTransform: 'initial',
                  borderRadius: "6px",
                  "&:hover": { backgroundColor: colors.primary },
                }}
              >
                Delete
              </Button>
          }
        />
      ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AvailablePets;
