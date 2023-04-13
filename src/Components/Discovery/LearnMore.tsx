import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../../Common/Title";

const LearnMore = () => {
  return (
    <Box sx={{ my: 15, p: 8 }}>
      <Link to="/">Back to results</Link>

      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12} md={5}>
          <img src="running-dog.jpg" width="100%" />
        </Grid>
        <Grid item xs={12} md={7} sx={{px:5}}>
          <Title text="Poodle" align="center" m={1} variation="large" />
          <Title text="About the breed" m={1} variation="small" />
          <Typography>
            Whether Standard, Miniature, or Toy, and either black, white, or
            apricot, the Poodle stands proudly among dogdom¿s true aristocrats.
            Beneath the curly, low-allergen coat is an elegant athlete and
            companion for all reasons and seasons.
          </Typography>
          <Typography>
            Poodles come in three size varieties: Standards should be more than
            15 inches tall at the shoulder; Miniatures are 15 inches or under;
            Toys stand no more than 10 inches. All three varieties have the same
            build and proportions. At dog shows, Poodles are usually seen in the
            elaborate Continental clip. Most pet owners prefer the simpler
            Sporting clip, in which the coat is shorn to follow the outline of
            the squarely built, smoothly muscled body.
          </Typography>
          <Typography>
            Forget any preconceived notions about Poodles you may have: Poodles
            are eager, athletic, and wickedly smart dogs of remarkable
            versatility. The Standard, with his greater size and strength, is
            the best all-around athlete of the family, but all Poodles can be
            trained with great success.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LearnMore;
