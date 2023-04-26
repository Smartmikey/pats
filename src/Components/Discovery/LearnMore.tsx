import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../../Common/Title";
import { colors } from "../../Constants";

const LearnMore = () => {
  return (
    <Box>
      <Box sx={{ mt: 15, px: {sm:3, md:8} }}>
        <Link to="/">Back to results</Link>

        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={12} md={5}>
            <img src="running-dog.jpg" width="100%" />
          </Grid>
          <Grid item xs={12} md={7} sx={{ px: 5 }}>
            <Title text="Poodle" align="center" m={1} variation="large" />
            <Title text="About the breed" m={1} variation="small" />
            <Typography>
              Whether Standard, Miniature, or Toy, and either black, white, or
              apricot, the Poodle stands proudly among dogdom¿s true
              aristocrats. Beneath the curly, low-allergen coat is an elegant
              athlete and companion for all reasons and seasons.
            </Typography>
            <Typography>
              Poodles come in three size varieties: Standards should be more
              than 15 inches tall at the shoulder; Miniatures are 15 inches or
              under; Toys stand no more than 10 inches. All three varieties have
              the same build and proportions. At dog shows, Poodles are usually
              seen in the elaborate Continental clip. Most pet owners prefer the
              simpler Sporting clip, in which the coat is shorn to follow the
              outline of the squarely built, smoothly muscled body.
            </Typography>
            <Typography>
              Forget any preconceived notions about Poodles you may have:
              Poodles are eager, athletic, and wickedly smart dogs of remarkable
              versatility. The Standard, with his greater size and strength, is
              the best all-around athlete of the family, but all Poodles can be
              trained with great success.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container sx={{mb: 5}}>
        <Grid item xs={12} sx={{ mt: 3 }} md={6}>
          <Box
            sx={{
              textAlign: "left",
              // bgcolor: colors.primaryLight,
              // borderRadius: {md: " 0px 214px 214px 0px"},
              p: 3,
            }}
          >
            <Title m={1} sx={{ ml: 0 }} variation="medium" text="Health" />
            <Typography>
              Most Poodles live long, happy, healthy lives thanks to the efforts
              of dedicated, responsible breeders who routinely test all breeding
              stock. As with all breeds, however, some health issues can occur,
              including hip dysplasia and several eye disorders. Idiopathic
              epilepsy, sebaceous adenitis, von Willebrand¿s disease, and
              immune-mediated disorders are also seen in the breed on occasion.
              Two orthopedic problems, Legg-Calve-Perthes and luxating patellas,
              are more likely to occur in Toy and Miniature Poodles than in
              Standards. The Standard variety are more at risk for gastric
              dilatation with volvulus (bloat) and sebaceous adenitis.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: "right",
              bgcolor: colors.primaryLight,
              borderRadius: {md: " 214px 0px 0px 214px"},
              p: 3,
            }}
          >
            <Title
              m={1}
              sx={{ ml: 0 }}
              variation="medium"
              align="right"
              text="Grooming"
            />
            <Typography>
              Unless you plan to keep your Poodle clipped in a short trim, you
              will need to learn how to brush how to brush him daily to keep his
              coat from matting. If you do not brush and comb a full-coated
              Poodle completely to the skin, the hair will mat near the roots
              and will have to be shaved off to start all over with new growth.
              Most pet owners opt to keep the Poodle in a shorter trim. Some
              owners learn to do this clipping and trimming themselves, while
              others choose to take their dog to a professional dog groomer
              every four to six weeks for a bath, grooming, and nail trim. The
              breed¿s relatively nonshedding coat makes the breed a good choice
              for people with allergies.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }} md={6}>
          <Box
            sx={{
              textAlign: "left",
              // bgcolor: colors.primaryLight,
              // borderRadius: {md: " 0px 214px 214px 0px"},
              p: 3,
            }}
          >
            <Title m={1} sx={{ ml: 0 }} variation="medium" text="Exercise" />
            <Typography>
            Poodles of any size are very active dogs who require good exercise every day to suit their high energy level. Poodles are eager for all kinds of activity, and they enjoy keeping busy. Swimming is great exercise for them, and most Poodles love to get in the water. Bred as hunting dogs, their impulse is to retrieve, so tossing toys, sticks, or balls for them will exercise both their mind and body. They also thrive on going for jogs or long walks with their human.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: "right",
              // bgcolor: colors.primaryLight,
              // borderRadius: {md: " 214px 0px 0px 214px"},
              p: 3,
            }}
          >
            <Title
              m={1}
              sx={{ ml: 0 }}
              variation="medium"
              align="right"
              text="Training"
            />
            <Typography>
            Poodles are extremely intelligent and are easily trained. They are agile and graceful as well as smart, and they enjoy and excel in a variety of canine sports, including agility, obedience, and tracking. They are excellent water-retrievers and also compete in dock diving and retriever hunt tests. Poodles are very people-oriented, and if your training routines are fun and positive, they are quick to please you. Just be sure that you are being consistent with what you ask
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }} md={6}>
          <Box
            sx={{
              textAlign: "left",
              bgcolor: colors.primaryLight,
              borderRadius: {md: " 0px 214px 214px 0px"},
              p: 3,
            }}
          >
            <Title m={1} sx={{ ml: 0 }} variation="medium" text="Nutrition" />
            <Typography>
            No matter which size Poodle has stolen your heart, you will want to feed him or her the best possible dog food. Your vet or breeder can help you decide on the right food for your dog¿s age, activity level, and size. Some dogs are prone to getting overweight, so watch your dog¿s calorie consumption and weight level. If you choose to give your dog treats, do so in moderation. Treats can be an important aid in training, but giving too many can cause obesity. Never feed a dog cooked bones or fatty table scraps. Learn about which human foods are safe for dogs, and which are not. Check with your vet if you have any concerns about your dogs weight or diet.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LearnMore;
