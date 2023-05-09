import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../../Common/Title";
import { colors } from "../../Constants";

const LearnMore = () => {
  return (
    <Box>
      <Box sx={{ mt: 15, px: {sm:3, md:8} }}>
        {/* <Link to="/">Back to results</Link> */}

        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={12} sx={{ px: 5 }}>
            <Title text="Breeders Code Of Ethics" align="center" m={2.5} variation="large" />
            <Title text="Breeding Standards" m={2.5} variation="small" />
            <Typography m={2.5}>
              Breeders should adhere to the highest standards of animal welfare, including proper nutrition, healthcare, and socialization.
            </Typography>
            <Title text="Health Testing" m={2.5} variation="small" />
            <Typography m={2.5}>
Breeders should perform regular health testing on their breeding animals to ensure the health and well-being of the offspring.            
</Typography>
            <Title text="Responsible Breeding" m={2.5} variation="small" />
            <Typography m={2.5}>
Breeders should only breed healthy animals that meet breed standards and have the potential to produce quality offspring. They should avoid breeding animals with genetic defects or health issues.            
</Typography>
            <Title text="Placement" m={2.5} variation="small" />
            <Typography m={2.5}>
Breeders should carefully screen potential buyers and ensure that the animals are going to responsible, loving homes that are suitable for the breed. They should not sell to pet stores, brokers, or puppy mills.            
</Typography>
            <Title text="Education" m={2.5} variation="small" />
            <Typography m={2.5}>
Breeders should be knowledgeable about the breed they are working with and should educate potential buyers about the breed's temperament, characteristics, and care requirements.            
</Typography>
            <Title text="Support" m={2.5} variation="small" />
            <Typography m={2.5}>
Breeders should provide ongoing support to buyers, including guidance on training, socialization, and health care.
            </Typography>
            <Title text="Contract" m={2.5} variation="small" />
            <Typography m={2.5}>
Breeders should provide a written contract that includes health guarantees, registration papers, and other important information related to the sale of the animal.
            </Typography>
            <Title text="Transparency" m={2.5} variation="small" />
            <Typography m={2.5}>
Breeders should be transparent about their breeding practices, including any potential health issues or genetic defects in their breeding animals.
            </Typography>
          </Grid>
          <Typography my={5} mx={5}>
            By following these ethical standards, breeders can ensure the health and well-being of their animals and contribute to the overall welfare of the animal community. At PATS, we believe in promoting responsible breeding practices and supporting breeders who adhere to these high standards.
          </Typography>
        </Grid>
      </Box>


    </Box>
  );
};

export default LearnMore;