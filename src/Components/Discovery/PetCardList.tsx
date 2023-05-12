import { Box, Button, Grid } from "@mui/material";
import React from "react";
import PetCard from "./PetCard";
import { pets } from "../../data";
import { colors } from "../../Constants";
const PetCardList = () => {
  return (
    <Grid container spacing={3} sx={{ py: 6 }}>
      {pets.map((item) => (
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
                href="/pet"
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
  );
};

export default PetCardList;
