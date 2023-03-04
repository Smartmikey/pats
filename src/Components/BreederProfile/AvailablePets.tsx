import { Box, Grid,  } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import PetCard from '../Discovery/PetCard'

const AvailablePets = () => {
    const list = [1,2,3,4]
  return (
    <Box sx={{my:6, display: 'flex', gap: 5, flexDirection: 'column', justifyContent: 'center'}}>
        <Grid container spacing={3}>
            {list.map(item =><PetCard size={3} /> )}
            
        </Grid>

        <Link style={{textAlign: 'center'}} to="#">See more</Link>
    </Box>
  )
}

export default AvailablePets