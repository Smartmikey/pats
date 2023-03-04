import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../Constants'

const AdoptionProcess = () => {
  return (
    <Box
        sx={{
          width: "80%",
          px: 20,
          my: 6,
          boxShadow: " 0 3px 8px rgb(0 0 0 / 0.15)",
          p: 8,
          mx: "auto",
          borderRadius: '8px',
        }}
      >
        <Container>
            <Typography variant='h5'  sx={{my: 6, color: colors.textHeading}}>Process of getting a puppy</Typography>
            <Typography>If you're interested in a puppy from Little Paws, please contact the breeder. You'll be asked to provide information about yourself and what you are looking for so the breeder can help you find the right match. Once you apply, Mac will get back to you about availability, pricing and next steps.</Typography>
            <List sx={{ width: '100%', maxWidth: 450, px: 0}}>
                <ListItem sx={{px:0}}>
              <ListItemText sx={{maxWidth: 100}} primary="Price" /><ListItemText >$100 - $200</ListItemText>
              </ListItem>
              <ListItem  sx={{px:0}}><ListItemText sx={{maxWidth: 100}} primary="Date" /><ListItemText >Puppies will be available after 8 weeks of being born </ListItemText></ListItem>
              </List>
        </Container>
      </Box>
  )
}

export default AdoptionProcess