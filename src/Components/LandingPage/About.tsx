import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "../../Common/Title";
import { colors } from "../../Constants";
import { useSelector } from "react-redux";

const About = () => {
  const {pets} = useSelector((state:any) => state.pet)

console.log(pets);
    const blobStyle = {
        position: "absolute",
        top: `${Math.floor(Math.random() * 70)}px`
    }

    console.log(blobStyle);
    
  return (
    <Box sx={{ my: 15, position: "relative" }}>
      <Title
        text="About Us"
        variation="large"
        secondary="Paws and Tails"
        align="center"
      />
      {/* Blobs */}
        <img style={{
        position: "absolute",
        top: `${Math.floor(Math.random() * 400)}px`,
        right: `${Math.floor(Math.random() * 1500)}px`,
        zIndex: -1
    }} src="Blobs.png" />
        <img style={{
        position: "absolute",
        top: `${Math.floor(Math.random() * 400)}px`,
        right: `${Math.floor(Math.random() * 1500)}px`,
        zIndex: -1
    }} src="Blobs-1.png" />
        <img style={{
        position: "absolute",
        top: `${Math.floor(Math.random() * 400)}px`,
        right: `${Math.floor(Math.random() * 1500)}px`,
        zIndex: -1
    }} src="Blobs-2.png" />
        <img style={{
        position: "absolute",
        top: `${Math.floor(Math.random() * 400)}px`,
        right: `${Math.floor(Math.random() * 1500)}px`,
        zIndex: -1
    }} src="Blobs-3.png" />
        <img style={{
        position: "absolute",
        top: `${Math.floor(Math.random() * 400)}px`,
        right: `${Math.floor(Math.random() * 1500)}px`,
        zIndex: -1
    }} src="Blob-12.png" />
      {/* Blobs */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box sx={{ pl: {xs: 3, md: 20}, lineHeight: 3 }}>
            <Typography>
              We understand the significance of providing the animal industry
              with a safe and responsible platform. Thus, PATS, was created. An
              easy-to-use platform that brings the animal industry into the
              cloud, while ensuring all our users are secure. With this
              marketplace, users can browse and buy with confidence knowing they
              will be interacting with businesses that share a commitment to
              safety and responsible practices.
            </Typography>
            <Typography>
              After three years of working hand in hand with animal breeders and
              organizations, it became apparent that the animal industry lacked
              direction and supervision. Leaving business owners and
              organizations, that want to make a difference in the lives of
              animals with few resources to work with.{" "}
            </Typography>
            <Typography>
              The lack of centralized online directories or marketplaces meant
              that many such initiatives did not have the ability to advertise
              for themselves, let alone reach their target audience or make any
              meaningful progress. In December of 2022, the PATS team began
              building the animal industry’s first comprehensive marketplace.
              Which values efficiency and transparency. We are very excited with
              everyone who has joined our waitlist, as we prepare for our launch
              in late Q1 of 2023!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: "right",
              bgcolor: colors.primaryLight,
              borderRadius: " 214px 0px 0px 214px",
            }}
          >
            <img src="/sitting-dog-image.png" width="80%" />
          </Box>
        </Grid>
        <Grid  item xs={12} sx={{mt: 6}} md={6}>
        <Box
            sx={{
              textAlign: "left",
              bgcolor: colors.primaryLight,
              borderRadius: " 0px 214px 214px 0px",
              p: 3
            }}
          >
            <Title m={3} sx={{ml:0}} variation="medium" text="Company Values" />
            <Typography>PATS believes that trust, reliability, transparency, innovation, and compassion are all foundational values.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}> </Grid>
        <Grid item xs={12} md={6}> </Grid>
        <Grid item xs={12} md={6}>
        <Box
            sx={{
              textAlign: "right",
              bgcolor: colors.primaryLight,
              borderRadius: " 214px 0px 0px 214px",
              p: 3
            }}
          >
            <Title m={3} sx={{ml:0}} variation="medium" align="right" text="Mission" />
            <Typography>PATS is focused on bringing efficiency and compliance to the animal industry. That's why we decided to create an online platform that simplifies the process for everyone involved. Our mission is to make a one-stop destination for connecting organizations, services and industry information all in one place.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
