import { Box, Card, List, ListItem } from '@mui/material'
import React from 'react'

const PetCard = () => {
  return (
    <Box>
        <img src='cat-pet.jpg' alt='cat' />
        <List>
            <ListItem> Cat name</ListItem>
            <ListItem> Paws breed</ListItem>
            <ListItem> North Carolina</ListItem>
        </List>
    </Box>
  )
}

export default PetCard