import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import Profile from './Profile'
import VerticalMenu from '../../Common/VerticalMenu'

const Index = () => {
  return (
    <Box sx={{mt:9}}>
        <Grid container>
            <Grid item xs={2}>
                <VerticalMenu />
            </Grid>
            <Grid item xs={10}>
                <Profile />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Index