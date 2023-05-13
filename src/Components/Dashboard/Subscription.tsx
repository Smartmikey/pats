import { Box, Button, Grid } from "@mui/material";
import SubscriptionCard from "./SubscriptionCard";
import Title from "../../Common/Title";
import { colors } from "../../Constants";

const Subscription = () => {
  const subscriptionItems = [
    {
      name: "Pay per post",
      price: 15,
      index: 1,
      benefits: ["No subscription required", "Each post will cost $15"],
    },
    {
      name: "Pay per month",
      price: 20,
      index: 2,
      benefits: [
        "Subscription required",
        "5 post allowed per month",
        "Able to chat directly with customers",
        "Able to upload health records",
        "Able to upload pedigree",
      ],
    },
    {
      name: "Pay per month",
      price: 50,
      index: 3,
      benefits: [
        "Subscription required",
        "Unlimited posts per month",
        "Able to get verified ",
        "Able to chat directly with customers",
        "Able to chat with other business owners",
        "Able to use AI to help manage business operations",
      ],
    },
  ];
  return (
    <Box sx={{width: '98%'}}>
      <Title text="Subscription" sx={{ ml: 0 }} />
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          my: 6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Grid container spacing={3}>
          {subscriptionItems.map((data) => (
            <SubscriptionCard
              name={data.name}
              price={data.price}
              index={data.index}
              benefits={data.benefits}
            />
          ))}

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                color: colors.primary,
                borderColor: colors.primary,
                "&:hover": {
                  borderColor: colors.textHeading,
                  color: colors.textHeading,
                },
              }}
              variant="outlined"
            >
              {" "}
              Save changes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Subscription;
