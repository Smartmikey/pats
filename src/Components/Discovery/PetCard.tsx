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
import { HOSTURL, colors } from "../../Constants";
import { Pet } from "../../interface/Pet";
import { useHistory } from "react-router-dom";
import { capitalizeFirstLowercaseRest } from "../../utility";
interface Props {
  size: number;
  data: any;
  sx?: object;
  Action?: React.ReactElement
}
const PetCard = ({size, data, sx, Action}: Props) => {
  const history = useHistory()
  return (
    <Grid key={data.id} sx={sx} item xs={12} md={size}>
      <Card sx={{ border: "1px solid rgba(218, 218, 218, 1)", maxWidth: 360, borderRadius: "12px", pb:3 }}>
        <CardHeader
        sx={{'&.MuiCardHeader-title': {fontWeight: 700}}}
          avatar={
            <Avatar sx={{ bgcolor: colors.primary }} aria-label="recipe">
              {data.name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {/* <MoreVertIcon /> */}
            </IconButton>
          }
          title={capitalizeFirstLowercaseRest(data.name)}
          subheader={data.location.name}
        />
        <Box 
          sx={{position: 'relative'}}>

        <CardMedia
          // onClick={()=> history.push(`/pet/${data.id}`)}
          component="img"
          height="194"
          image={`${HOSTURL}/${data.photos[0].filepath}${data.photos[0].filename}`}
          alt={data.name}
        />
        {data.photos.length > 1 && (<BannerOnImage variant="overline" >{data.photos.length - 1} more photos</BannerOnImage>)}
        </Box>
        
        <CardContent>
            <Typography sx={{fontWeight: 600}}>{capitalizeFirstLowercaseRest(data.member.name)} {capitalizeFirstLowercaseRest(data.member.last_name)}</Typography>
            <Typography variant="subtitle2">{data.breed.name}</Typography>
            <Typography variant="subtitle2">{data.age} | {data.gender.name}</Typography>
            <Divider sx={{my: 1.5}} />
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        {Action && (<CardActions sx={{ justifyContent: "end" }}>
          <Box>
            {Action}
            
          </Box>
        </CardActions>)}
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

