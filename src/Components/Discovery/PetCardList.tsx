import { Box, Grid } from '@mui/material'
import React from 'react'
import PetCard from './PetCard'
import { pets } from "../../data";
const PetCardList = () => {
  return (
    <Grid container spacing={3} sx={{py: 6}}>
        {pets.map(item => <PetCard key={item.id} size={4} data={item} />)}
    </Grid>
  )
}

export default PetCardList