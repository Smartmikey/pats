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

const Index = () => {
  // const routes = createBrowserRouter([
  //   { path: "/", element: <Profile /> },
  //   { path: "/available-pets", element:  },
  // ]);
  return (
    <Box sx={{ mt: 9 }}>
      <Grid container>
        <Grid item xs={0} md={2} sx={{ display: { xs: "none", md: "grid" } }}>
          <VerticalMenu />
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
