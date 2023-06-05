import { Container, Grid, List, ListItem, Typography } from '@mui/material'
import { colors } from '../../Constants'

const Explore = () => {
  return (
    <Container sx={{my: 6, px: {xs:3,md:12}}}>
        <Typography variant="h5" sx={{my:6, color: colors.textHeading}}>Explore more pets near you</Typography>
        <Grid container >
            <Grid item xs={6} md={3}>
                <List dense={false} sx={{lineHeight: 2}}>
                    <ListItem>North Carolina</ListItem>
                    <ListItem>Tennessee</ListItem>
                    <ListItem>Georgia</ListItem>
                    <ListItem>Washington, D.C</ListItem>
                </List>
            </Grid>
            <Grid item xs={6} md={3}>
                <List sx={{lineHeight: 2}}>
                    <ListItem>Florida</ListItem>
                    <ListItem>Maryland</ListItem>
                    <ListItem>South Carolina</ListItem>
                    <ListItem>New york</ListItem>
                </List>
            </Grid>
            <Grid item xs={6} md={3}>
                <List sx={{lineHeight: 2}}>
                    <ListItem>Massachusetts</ListItem>
                    <ListItem>Virginia</ListItem>
                    <ListItem>Pennsylvania</ListItem>
                    <ListItem>Illinios</ListItem>
                </List>
            </Grid>
            <Grid item xs={6} md={3}>
                <List sx={{lineHeight: 2}}>
                    <ListItem>Texas</ListItem>
                    <ListItem>Ohio</ListItem>
                    <ListItem>California</ListItem>
                    <ListItem>Alabama</ListItem>
                </List>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Explore