import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Profile from "./Profile";
import VerticalMenu from "../../Common/VerticalMenu";
import { Route, Routes } from "react-router-dom";
import AvailablePets from "./AvailablePets";
import Account from "./Account";
import Password from "./Password";
import Subscription from "./Subscription";
import AddPet from "./AddPet";
import { House, Person, Pets, Settings } from "@mui/icons-material";

const Index = () => {
  const menuItemsdata = [
    {
      Icon: <House />,
      name: "home",
      link: ".",
    },
    {
      Icon: <Person />,
      name: "my profile",
      link: "profile",
      submenu: [{ name: "contact info" }],
    },
    {
      Icon: <Pets />,
      name: "pet",
      submenu: [
        { name: "available pets", link: "available-pets" },
        { name: "past pets" },
        { name: "add pets", link: "add-pets" },
      ],
    },
    {
      Icon: <Settings />,
      name: "settings",
      submenu: [
        { name: "account", link: "account" },
        { name: "password", link: "password" },
        { name: "subscription", link: "subscription" },
      ],
    },
  ];
  return (
    <Box sx={{ mt: 9 }}>
      <Grid container>
        <Grid item xs={0} md={2} sx={{ display: { xs: "none", md: "grid" } }}>
          <VerticalMenu  data={menuItemsdata}/>
        </Grid>
        <Grid sx={{ px: 2 }} item xs={12} md={10}>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/available-pets" element={<AvailablePets />} />
            <Route path="/account" element={<Account />} />
            <Route path="/password" element={<Password />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/add-pets" element={<AddPet />} />
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
