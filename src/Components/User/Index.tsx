import { House, Person, Pets, Settings } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import VerticalMenu from "../../Common/VerticalMenu";
import Profile from "./Profile";
import Account from "./Account";
import AddPet from "../Dashboard/AddPet";
import Subscription from "../Dashboard/Subscription";
import Password from "./Password";
import InterestedPets from "./InterestedPets";
import Home from "./Home";
import BrowsePets from "./BrowsePets";
import Message from "./Message";

const UserIndex = () => {
  const menuItemsdata = [
    {
      Icon: <House />,
      name: "home",
      link: "/user",
    },
    {
      Icon: <Person />,
      name: "my profile",
      link: "/user/profile",
      submenu: [{ name: "message", link: "/user/message" }],
    },
    {
      Icon: <Pets />,
      name: "pet",
      submenu: [
        { name: "interested pets", link: "/user/interested-pets" },
        { name: "browse pets", link: "/user/browse-pets" },
      ],
    },
    {
      Icon: <Settings />,
      name: "settings",
      submenu: [
        { name: "account", link: "/user/account" },
        { name: "password", link: "/user/password" },
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
          <Switch>
            <Route path="/user" exact component={Home} />
            <Route path="/user/profile" component={Profile} />
            <Route path="/user/interested-pets" component={InterestedPets} />
            <Route path="/user/browse-pets" component={BrowsePets} />
            <Route path="/user/account" component={Account} />
            <Route path="/user/password" component={Password} />
            <Route path="/user/message" component={Message} />
            {/* <Route path="/add-pets" element={AddPet} /> */}
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserIndex;
