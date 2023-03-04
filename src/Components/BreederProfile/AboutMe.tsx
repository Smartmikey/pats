import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../Constants";

const AboutMe = () => {
  return (
    <Container sx={{ my: 7 }}>
      <Typography  variant="h5" sx={{ my: 4, color: colors.textHeading }}>
        Hi! I’m Mac from Little Paws{" "}
      </Typography>
      <Typography>
        I am a dedicated and passionate breeder with a love for all things
        canine. My interest in breeding started at a young age and has only
        grown over the years as I have gained knowledge and experience in the
        field. I am committed to breeding healthy, happy, and well-tempered
        dogs. I spend a lot of time researching and studying different breeds,
        paying close attention to their physical characteristics and
        temperaments. I also make sure to keep up-to-date with best practices in
        breeding and genetics to ensure that my dogs are healthy and free of any
        genetic disorders. My breeding program is focused on producing
        high-quality dogs that are not only beautiful, but also have great
        dispositions and temperaments. I am proud of the work that I do and the
        dogs that I produce, and I enjoy sharing my knowledge and passion for
        breeding with others. When I'm not busy breeding, I enjoy spending time
        with my dogs and taking them on adventures. I also love to compete in
        dog shows and events, as it allows me to showcase the qualities of my
        dogs and meet other breeders and enthusiasts.
      </Typography>
      <Typography variant="h5" sx={{ my: 4,  color: colors.textHeading }}>
        Contact info
      </Typography>
      <Box sx={{bgcolor: colors.primaryLight, p: 5, borderRadius: '8px'}}>
        <Grid container>
          <Grid item xs={6}>
            <List sx={{ width: '100%', maxWidth: 450}}>
                <ListItem >
              <ListItemText sx={{maxWidth: 100}} primary="Contact" /><ListItemText >John Doe</ListItemText>
              </ListItem>
              <ListItem><ListItemText sx={{maxWidth: 100}} primary="Email" /><ListItemText >John@doe.com</ListItemText></ListItem>
              <ListItem>
              <ListItemText sx={{maxWidth: 100}} primary="Website" /> <ListItemText >www.jhondow.com</ListItemText> 
            </ListItem>
            </List>
            
          </Grid>
          <Grid item xs={6}>
          <List sx={{ width: '100%', maxWidth: 450}}>
                <ListItem >
              <ListItemText sx={{maxWidth: 100}} primary="Phone" /><ListItemText >(342) 8785 453</ListItemText>
              </ListItem>
              <ListItem><ListItemText sx={{maxWidth: 100}} primary="Address" /><ListItemText >Somewhere in the world</ListItemText></ListItem>
              </List>
          </Grid>
        </Grid>
        <Button sx={{bgcolor: colors.primary, color: colors.white, mx: 'auto', my: 4, display: 'block'}}>Ask question</Button>
      </Box>
    </Container>
  );
};

export default AboutMe;
