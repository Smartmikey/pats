import { Star } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  size: number;
}
const Review = ({ size }: Props) => {
  return (
    <Grid item xs={12} md={size}>
      <Card sx={{ maxWidth: 345, p:2}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="_placeholderImage.png"
          sx={{borderRadius: '12px'}}
        />
        <CardContent>
          
          <List>
            <ListItem>
                <ListItemText><Typography gutterBottom variant="h5" component="h5">
            Lizard
          </Typography></ListItemText><ListItemIcon sx={{color: 'gold'}}><Star/><Star/><Star/><Star/></ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemText><Typography  sx={{fontWeight: 600}} component="p">
            Awesome
          </Typography></ListItemText><ListItemIcon>3/03/2023</ListItemIcon>
            </ListItem>
          </List>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica ... <Link to="#"> read more</Link>
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Review;
