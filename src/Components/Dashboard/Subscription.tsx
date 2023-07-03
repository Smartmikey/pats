import { Box, Button, Grid, Typography } from "@mui/material";
import SubscriptionCard from "./SubscriptionCard";
import Title from "../../Common/Title";
import { colors } from "../../Constants";
import { useState } from "react";
import Popup from "../../Common/Popup";
import PaymentForm from "../../Common/PaymentForm";

const Subscription = () => {
  const [active, setActive] = useState<number | null>(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [openPaymentPopUp, setOpenPaymentPopUp] = useState(false);
  const [error, setError] = useState("");
  const subscriptionItems: any = [
    {
      name: "Pay per post",
      title: "Basic ",
      price: 15,
      index: 1,
      benefits: ["No subscription required", "Each post will cost $15"],
    },
    {
      name: "Pay per month",
      price: 20,
      title: "Breeder",
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
      title: "Unlimited posts",
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
  const getField = (name: string) => {
    let sub = subscriptionItems.filter((item: any) => item.index === active);
    console.log(sub);
    if (sub[0]) {
      return sub[0][name];
    } else return "";
  };

  // console.log(getTitle());

  return (
    <Box sx={{ width: "98%" }}>
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
          {subscriptionItems.map((data: any) => (
            <SubscriptionCard
              name={data.name}
              price={data.price}
              index={data.index}
              benefits={data.benefits}
              onClick={() => {
                setActive(data.index);
              }}
              active={data.index === active}
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
              onClick={() =>
                active !== null
                  ? setOpenPopUp(true)
                  : setError("Select a package")
              }
            >
              {" "}
              Save changes
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Popup
        title="Confirm Selection"
        secondaryText={
          <Box>
            <Typography sx={{ textAlign: "center" }}>
              You're selecting{" "}
              <Typography
                component="span"
                sx={{ color: colors.textHeading, fontWeight: 600 }}
              >
                {getField("title").toLowerCase()}
              </Typography>{" "}
              for{" "}
              <Typography
                component="span"
                sx={{ color: colors.textHeading, fontWeight: 600 }}
              >
                ${getField("price")}{" "}
              </Typography>
              monthly
            </Typography>
          </Box>
        }
        actions={
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              variant="outlined"
              sx={{
                color: colors.primary,
                borderColor: colors.primary,
                "&:hover": { borderColor: colors.primary },
                mr: 1,
              }}
              onClick={() => setOpenPopUp(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                color: colors.white,
                bgcolor: colors.primary,
                "&:hover": { bgcolor: colors.primary }
              }}
              onClick={()=> {setOpenPopUp(false); setOpenPaymentPopUp(true)}}
            >
              Confirm
            </Button>
          </Box>
        }
        open={openPopUp}
      />
      <Popup
        title="Card Payment"
        secondaryText={
          <Box>
            {/* <Typography sx={{ textAlign: "center" }}>
              You're selecting{" "}
              <Typography
                component="span"
                sx={{ color: colors.textHeading, fontWeight: 600 }}
              >
                {getField("title").toLowerCase()}
              </Typography>{" "}
              for{" "}
              <Typography
                component="span"
                sx={{ color: colors.textHeading, fontWeight: 600 }}
              >
                ${getField("price")}  {" "}
              </Typography>monthly
            </Typography> */}
            <PaymentForm />
          </Box>
        }
        open={openPaymentPopUp}
      />
    </Box>
  );
};

export default Subscription;
