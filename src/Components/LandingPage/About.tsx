import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "../../Common/Title";
import { colors } from "../../Constants";
import { useSelector } from "react-redux";

const About = () => {
  const { pets } = useSelector((state: any) => state.pet);

  const blobStyle = {
    position: "absolute",
    top: `${Math.floor(Math.random() * 70)}px`,
  };

  return (
    <Box sx={{ my: 15, position: "relative" }}>
      <Title
        text="About Us"
        variation="large"
        secondary="Paws and Tails"
        align="center"
      />
      {/* Blobs */}
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs-1.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs-2.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs-3.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blob-12.png"
      />
      {/* Blobs */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box sx={{ pl: { xs: 3, md: 20 }, }}>
            <Typography sx={{mt:2, lineHeight: 1.5}}>
              PATS is a leading online marketplace dedicated to transforming the
              animal industry. Our platform provides a secure and user-friendly
              environment where individuals can connect with trusted businesses,
              find their perfect animal companion, while being able to access a
              range of animal services. We are on a mission to revolutionize the
              way people interact within the industry, by bringing convenience,
              transparency, and responsible practices to the forefront.
            </Typography>
            <Typography sx={{mt:2, lineHeight: 1.5}}>
              At PATS, our core values drive everything we do. We believe in
              promoting animal welfare, facilitating responsible breeding, and
              fostering meaningful connections between pet seekers and reputable
              businesses. Our ultimate goal is to ensure that every animal finds
              a loving home and is treated with care and respect throughout its
              life.
            </Typography>
            <Typography sx={{mt:2, lineHeight: 1.5}}>
              We are committed to creating a safe and trusted marketplace. Our
              team meticulously vets every business listed on our platform,
              ensuring that they meet our standards for animal welfare, ethical
              practices, and customer satisfaction. By prioritizing transparency
              and accountability, we provide pet seekers with the peace of mind
              they deserve when making important decisions about their furry
              companions.
            </Typography>
            <Typography sx={{mt:2, lineHeight: 1.5}}>
              PATS is more than just a marketplace. We are a community that
              brings together passionate individuals who share a common love for
              animals. Through our platform, we aim to educate and empower our
              users by providing valuable resources, educational content, and
              expert advice on responsible pet ownership and animal care.
            </Typography>
            <Typography sx={{mt:2, lineHeight: 1.5}}>
              Join us on this exciting journey as we revolutionize the animal
              industry and make a lasting impact on the lives of animals and
              their human companions. Together, we can create a world where
              every animal is cherished, and their well-being is paramount.
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
        <Grid item xs={12} sx={{ mt: 6 }} md={6}>
          <Box
            sx={{
              textAlign: "left",
              bgcolor: colors.primaryLight,
              borderRadius: " 0px 214px 214px 0px",
              p: 3,
            }}
          >
            <Title
              m={3}
              sx={{ ml: 0 }}
              variation="medium"
              text="Company Values"
            />
            <Typography>
              PATS believes that trust, reliability, transparency, innovation,
              and compassion are all foundational values.
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
              borderRadius: " 214px 0px 0px 214px",
              p: 3,
            }}
          >
            <Title
              m={3}
              sx={{ ml: 0 }}
              variation="medium"
              align="right"
              text="Mission"
            />
            <Typography>
              PATS is focused on bringing efficiency and compliance to the
              animal industry. That's why we decided to create an online
              platform that simplifies the process for everyone involved. Our
              mission is to make a one-stop destination for connecting
              organizations, services and industry information all in one place.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
