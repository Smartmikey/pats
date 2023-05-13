import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { colors } from "../../Constants";
import { Pets } from "@mui/icons-material";

interface Props {
  name: string;
  price: number;
  index: number;
  benefits: string[];
}

const SubscriptionCard = ({ name, price, index, benefits }: Props) => {
  // const {name, price, index, benefits} = data;
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          position: "relative",
          my: {xs:2, md:7},
          border: "1px solid rgba(217, 217, 217, 1)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
          borderRadius: "5px",
          p: {xs: 1, md:3},
          minHeight: "400px",
          cursor: "pointer"
        }}
      >
        <Avatar
          sx={{
            bgcolor: colors.primary,
            mx: "auto",
            position: "absolute",
            top: "-20px",
            left: "45%",
          }}
        >
          {index}
        </Avatar>
        <Typography
          sx={{
            textAlign: "center",
            color: colors.textHeading,
            fontWeight: 600,
            mt: 3,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: colors.primary,
            fontWeight: 600,
            mt: 3,
          }}
          variant="h4"
        >
          ${price}
        </Typography>
        <List dense>
          {benefits.map((item) => (
            <ListItem>
              <ListItemIcon sx={{ color: colors.textHeading }}>
                <Pets />
              </ListItemIcon>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};

export default SubscriptionCard;
