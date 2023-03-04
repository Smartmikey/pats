import { Box, Grid } from '@mui/material'
import React from 'react'
import Review from './Review'
import WriteReview from './WriteReview'

const Reviews = () => {
  const items = [1,2,3,4,5,6]
  return (
    <Box sx={{mt:12}}>
      <Grid container spacing={2}>
        {items.map(item =><Review size={4} />)}
        
      </Grid>
    
    </Box>
  )
}

export default Reviews