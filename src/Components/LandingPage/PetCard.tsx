import { WidthFull } from '@mui/icons-material'
import { Box, Card, List, ListItem } from '@mui/material'
import React from 'react'
import { colors } from '../../Constants'

const PetCard = () => {
  return (
    <Box sx={{position: 'relative', mx: 2, color: colors.white, borderRadius: '15px', width: '300px', height: '300px', backgroundImage: `url(cat-pet.jpg)` }}>
        {/* <img src='cat-pet.jpg' alt='cat' width='100%' style={{borderRadius: '20px'}} /> */}
        <List  sx={{lineHeight: 0.5, bgcolor: colors.darkTransparent, borderRadius: '0 0 12px 12px', position: 'absolute', width: '100%', bottom: 0, }}>
            <ListItem sx={{fontWeight: '600', textTransform: 'uppercase',}}> Cat name</ListItem>
            <ListItem> Paws breed</ListItem>
            <ListItem> North Carolina</ListItem>
        </List>
    </Box>
  )
}

export default PetCard