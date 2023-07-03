import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../Common/Title";
import PetCard from "../Discovery/PetCard";
import { colors } from "../../Constants";
import Axios from "../../API/Axios";
import useAuth from "../../Hooks/Auth";
import { useHistory } from "react-router-dom";

const AvailablePets = () => {
  const user: any = useAuth();
  const [refresh, setRefresh] = useState(false)
  const [petss, setPetss] = useState<any>();
  const history = useHistory()
  const markAsSold = (petId: number) => {
    Axios.put(`/breeder/pets/${petId}/update-status`, {status: 'SOLD'}).then(()=> setRefresh(!refresh)
    )
  }
  
  useEffect(() => {
    
    const getPets = async()=> {

      const res = await Axios.get(`/breeder/pets/${user?.id}/member`)
      setPetss(await res.data.data);
    }
    getPets();

  }, [user, refresh]);
  return (
    <Box sx={{ pb: { xs: 4, md: 12, maxWidth: "96%" } }}>
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
          {petss?.filter((pet: any) => pet.status === 'AVAILABLE').length > 0 ? petss?.filter((pet: any) => pet.status === 'AVAILABLE')?.map((pet: any) => (
            <PetCard
              key={pet.id}
              size={4}
              data={pet}
              Action={
                <>
                  <Button
                    variant="outlined"
                    sx={{
                      color: colors.primary,
                      borderColor: colors.primary,
                      mx: 1,
                      borderRadius: "6px",
                      textTransform: "initial",
                      "&:hover": { borderColor: colors.primary },
                    }}
                    onClick={()=> markAsSold(pet.id)}
                  >
                    Mark as sold
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: colors.primary,
                      mx: 1,
                      textTransform: "initial",
                      borderRadius: "6px",
                      "&:hover": { backgroundColor: colors.primary },
                      
                    }}
                    onClick={()=> history.push(`/breeder/edit-pet/${pet.id}`)}
                  >
                    Edit
                  </Button>
                </>
              }
            />
          )) : (
            <Grid item xs={12} justifyContent="center">
            <Typography align="center">No pets added yet</Typography>
            </Grid>
          )}
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
          {petss?.filter((pet: any) => pet.status === 'SOLD').length >0 ? petss?.filter((pet: any) => pet.status === 'SOLD')?.map((item: any) => (
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
                    textTransform: "initial",
                    borderRadius: "6px",
                    "&:hover": { backgroundColor: colors.primary },
                  }}
                >
                  Delete
                </Button>
              }
            />
          )) : (
            <Typography sx={{mx: 'auto'}} align="center">Past pets will be displayed here</Typography>
          )}
        </Grid>
          {/* {petss?.filter((pet: any) => pet.status === 'SOLD').length < 1 && } */}
      </Box>
    </Box>
  );
};

export default AvailablePets;
