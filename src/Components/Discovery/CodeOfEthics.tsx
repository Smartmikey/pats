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

          <Grid item xs={12} sx={{ px: 5 }}>

            <Title text="Animal Shelter & Animal Rescue Code of Ethics" align="center" m={2.5} variation="large" />

            <Title text="Every animal deserves humane treatment" m={2.5} variation="small" />
            <Typography m={2.5}>
Animal shelters should provide proper care, adequate food, clean water, and medical attention to every animal under their care. They should ensure that animals are not subjected to cruel, inhumane, or unnecessary practices.
            </Typography>  

            <Title text="Transparency and accountability" m={2.5} variation="small" />
            <Typography m={2.5}>
Animal shelters should be transparent about their policies, procedures, and animal care standards. They should be accountable for their actions, finances, and operations, and be open to criticism and feedback from the public.
            </Typography>
            <Title text="Education and Outreach" m={2.5} variation="small" />
            <Typography m={2.5}>
Animal shelters should educate the public about responsible pet ownership, animal welfare, and the importance of spaying and neutering. They should also promote adoption and provide resources to help pet owners keep their animals healthy and happy.
            </Typography>
            <Title text="Non-Discrimination" m={2.5} variation="small" />
            <Typography m={2.5}>
 Animal shelters should not discriminate against animals based on their breed, age, appearance, or any other factor. They should treat all animals equally and provide them with the same level of care and attention.
            </Typography>
            <Title text="Collaboration" m={2.5} variation="small" />
            <Typography m={2.5}>
Animal shelters should work together with other animal welfare organizations, veterinary clinics, and rescue groups to promote animal welfare, reduce the number of homeless animals, and increase adoptions.
            </Typography>
          </Grid>
          <Typography my={5} mx={5}>
These codes of ethics should serve as guidelines for animal shelters and animal rescues to provide the best care for animals in need while promoting animal welfare and responsible pet ownership. At PATS, we value the organizations that adhere to the best practices when it comes to animal welfare and will not condone anything less. 
          </Typography>


          <Grid item xs={12} sx={{ px: 5 }}>


            <Title text="Livestock Owners Code of Ethics" align="center" m={2.5} variation="large" />

            <Title text="Animal Welfare" m={2.5} variation="small" />
            <Typography m={2.5}>
All livestock owners and farmers listed on PATS must provide adequate and appropriate care for their animals, ensuring they are well-fed, properly sheltered, and receive necessary medical treatment.
            </Typography>
            <Title text="Transparency" m={2.5} variation="small" />
            <Typography m={2.5}>
Farmers and livestock owners must provide accurate and complete information about their animals and their living conditions. Any misleading or false advertising will not be tolerated.
            </Typography>
            <Title text="Environmental Stewardship" m={2.5} variation="small" />
            <Typography m={2.5}>
Farmers and livestock owners must follow environmentally sustainable practices and avoid any activities that may cause harm to the natural environment.
            </Typography>
            <Title text="Legal Compliance" m={2.5} variation="small" />
            <Typography m={2.5}>
All livestock owners and farmers must comply with relevant laws and regulations pertaining to animal welfare, environmental protection, and public health.
            </Typography>
            <Title text="Continuous Improvement" m={2.5} variation="small" />
            <Typography m={2.5}>
Farmers and livestock owners must continually seek ways to improve their operations, including animal care, environmental sustainability, and business practices.
            </Typography>
 
           </Grid>
          <Typography my={5} mx={5}>
At PATS, we take these ethical standards seriously and hold our business partners to the highest level of accountability. By following these guidelines, we can work together to promote responsible, sustainable, and ethical farming practices.
          </Typography>
            </Grid>
      </Box>
    </Box>
  );
};

export default LearnMore;