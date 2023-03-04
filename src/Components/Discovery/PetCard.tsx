import { ExpandMore, ShareLocation } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { styled } from "@mui/styles";
import { colors } from "../../Constants";
interface Props {
  size: number;
}
const PetCard = ({size}: Props) => {
  return (
    <Grid item xs={size}>
      <Card sx={{ maxWidth: 312, borderRadius: "12px", pb:3 }}>
        <CardHeader
        sx={{'&.MuiCardHeader-title': {fontWeight: 700}}}
          avatar={
            <Avatar sx={{ bgcolor: colors.primary }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {/* <MoreVertIcon /> */}
            </IconButton>
          }
          title="Pows shelter"
          subheader="South Carolina"
        />
        <Box 
          sx={{position: 'relative'}}>

        <CardMedia
          component="img"
          height="194"
          image="_placeholderimage.png"
          alt="Paella dish"
        />
        <BannerOnImage variant="overline" >3+ more photos</BannerOnImage>
        </Box>
        
        <CardContent>
            <Typography sx={{fontWeight: 600}}>Max</Typography>
            <Typography variant="subtitle2">Mixed Breed</Typography>
            <Typography variant="subtitle2">2 years old | Male</Typography>
            <Divider sx={{my: 1.5}} />
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "end" }}>
          <Box>
            <Button
              variant="outlined"
              sx={{
                color: colors.primary,
                borderColor: colors.primary,
                mx: 1,
                borderRadius: '6px',
                "&:hover": { borderColor: colors.primary },
              }}
            >
              View more
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: colors.primary,
                mx: 1,
                borderRadius: '6px',
                "&:hover": { backgroundColor: colors.primary },
              }}
            >
              Contact
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

const BannerOnImage = styled(Typography)({
  position: 'absolute',
  bottom: '8px',
  right: '8px',
  paddingLeft: '10px',
  paddingRight: '10px',
  borderRadius: '5px',
  backgroundColor: colors.darkTransparent,
  color: colors.white,
})

export default PetCard;

