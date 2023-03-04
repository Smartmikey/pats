import { Box, Grid } from '@mui/material'
import React from 'react'
import PetCard from './PetCard'

const PetCardList = () => {
    const list = [1,2,3,3,3,3,2,1,3,7,4,]
  return (
    <Grid container spacing={3} sx={{py: 6}}>
        {list.map(item => <PetCard size={4} />)}
    </Grid>
  )
}

export default PetCardList