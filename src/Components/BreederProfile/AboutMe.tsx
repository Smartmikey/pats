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

const AboutMe = (data: any) => {
  console.log(data, "from inside");
  
  const { about, address, name, last_name, email, web_site, phone_number} = data?.data;
  return (
    <Container sx={{ my: 7 }}>
      <Typography dangerouslySetInnerHTML={{
                  __html: about,
                }}  sx={{ my: 4, color: colors.textHeading }} />
        
        
      {/* <Typography variant="h5" sx={{ my: 4,  color: colors.textHeading }}>
        Contact info
      </Typography>
      <Box sx={{bgcolor: colors.primaryLight, p: {xs:1, md:5}, borderRadius: '8px'}}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <List sx={{ width: '100%', maxWidth: 450}}>
                <ListItem >
              <ListItemText sx={{maxWidth: 100}} primary="Contact" /><ListItemText >{name} {last_name}</ListItemText>
              </ListItem>
              <ListItem><ListItemText sx={{maxWidth: 100}} primary="Email" /><ListItemText >{email}</ListItemText></ListItem>
              {/* <ListItem>
              <ListItemText sx={{maxWidth: 100}} primary="Website" /> <ListItemText >{web_site}</ListItemText> 
            </ListItem> 
            </List>
            
          </Grid>
          <Grid item xs={12} sm={6}>
          <List sx={{ width: '100%', maxWidth: 450}}>
            <ListItem><ListItemText sx={{maxWidth: 100}} primary="Address" /><ListItemText >{address}</ListItemText></ListItem>
                {/* <ListItem >
              <ListItemText sx={{maxWidth: 100}} primary="Phone" /><ListItemText >{phone_number}</ListItemText>
              </ListItem> 
              </List>
          </Grid>
        </Grid>
      </Box> */}
      <Button sx={{bgcolor: colors.primary, color: colors.white, mx: 'auto', my: 4, display: 'block'}}>Ask question</Button>
    </Container>
  );
};

export default AboutMe;
