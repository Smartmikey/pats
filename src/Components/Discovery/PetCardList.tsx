import { Box, Grid } from '@mui/material'
import React from 'react'
import PetCard from './PetCard'
import { pets } from "../../data";
const PetCardList = () => {
    const list = [1,2,3,3,3,3,2,1,3,7,4,]
  return (
    <Grid container spacing={3} sx={{py: 6}}>
        {pets.map(item => <PetCard key={item.id} size={4} data={item} />)}
    </Grid>
  )
}

export default PetCardList