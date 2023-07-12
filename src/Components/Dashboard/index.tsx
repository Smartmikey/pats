import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Profile from "./Profile";
import VerticalMenu from "../../Common/VerticalMenu";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AvailablePets from "./AvailablePets";
import Account from "./Account";
import Password from "./Password";
import Subscription from "./Subscription";
import AddPet from "./AddPet";
import { House, Person, Pets, Settings } from "@mui/icons-material";
import Home from "./Home";
import EditPet from "./EditPet";

const Index = () => {
  const menuItemsdata = [
    {
      Icon: <House />,
      name: "home",
      link: "/breeder",
    },
    {
      Icon: <Person />,
      name: "my profile",
      link: "/breeder/profile",
    },
    {
      Icon: <Pets />,
      name: "pet",
      submenu: [
        { name: "available pets", link: "/breeder/available-pets" },
        { name: "add pets", link: "/breeder/add-pets" },
      ],
    },
    {
      Icon: <Settings />,
      name: "settings",
      submenu: [
        { name: "account", link: "/breeder/account" },
        { name: "password", link: "/breeder/password" },
        { name: "subscription", link: "/breeder/subscription" },
      ],
    },
  ];
  return (
    <Box sx={{ mt: 9 }}>
      <Grid container>
        <Grid item xs={0} md={2} sx={{ display: { xs: "none", md: "grid" } }}>
          <VerticalMenu data={menuItemsdata} />
        </Grid>
        <Grid sx={{ px: 2 }} item xs={12} md={10}>
          {/* <Router> */}
          <Switch>
            <Route path="/breeder/profile" component={Profile} />
            <Route path="/breeder/available-pets" component={AvailablePets} />
            <Route path="/breeder/account" component={Account} />
            <Route path="/breeder/password" component={Password} />
            <Route path="/breeder/subscription" component={Subscription} />
            <Route path="/breeder/add-pets" component={AddPet} />

            <Route path="/breeder/edit-pet/:id" component={EditPet} />
            <Route path="/breeder/:id?" component={Home} />
          </Switch>
          {/* </Router> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
