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
import { colors } from "../Constants";
import { Pet } from "../interface/Pet";

interface Props {
  size: number;
  data: Pet;
  sx?: object;
  Action?: React.ReactElement;
}
const BreederCard = ({ size, data, sx, Action }: Props) => {
  return (
    <Grid sx={sx} item xs={12} md={size}>
      <Card
        sx={{
          border: "1px solid rgba(218, 218, 218, 1)",
          maxWidth: 360,
          borderRadius: "12px",
          pb: 3,
        }}
      >
        <CardHeader
          sx={{ "&.MuiCardHeader-title": { fontWeight: 700 } }}
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
          title={data.name}
          subheader={data.location}
        />
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="194"
            image={`/${data.image}`}
            alt={data.name}
          />
          <BannerOnImage variant="overline">3+ more photos</BannerOnImage>
        </Box>

        <CardContent>
          <Typography sx={{ fontWeight: 600 }}>{data.breeder}</Typography>
          <Typography variant="subtitle2">{data.breed}</Typography>
          
          <Divider sx={{ my: 1.5 }} />
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "end" }}>
          <Box>{Action}</Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

const BannerOnImage = styled(Typography)({
  position: "absolute",
  bottom: "8px",
  right: "8px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "5px",
  backgroundColor: colors.darkTransparent,
  color: colors.white,
});

export default BreederCard;
