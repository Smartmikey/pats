import { House, Person, Pets, Settings } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
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
      link: ".",
    },
    {
      Icon: <Person />,
      name: "my profile",
      link: "profile",
      submenu: [{ name: "message", link: "message" }],
    },
    {
      Icon: <Pets />,
      name: "pet",
      submenu: [
        { name: "interested pets", link: "interested-pets" },
        { name: "browse pets", link: "browse-pets" },
      ],
    },
    {
      Icon: <Settings />,
      name: "settings",
      submenu: [
        { name: "account", link: "account" },
        { name: "password", link: "password" },
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/interested-pets" element={<InterestedPets />} />
            <Route path="/browse-pets" element={<BrowsePets />} />
            <Route path="/account" element={<Account />} />
            <Route path="/password" element={<Password />} />
            <Route path="/message" element={<Message />} />
            {/* <Route path="/add-pets" element={<AddPet />} /> */}
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserIndex;
