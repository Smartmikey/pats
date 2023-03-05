import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Discovery from "./Components/Discovery/Discovery";
import Profile from "./Components/BreederProfile/Profile";
import HeaderNav from "./Common/HeaderNav";
import { createTheme, ThemeProvider } from "@mui/system";
import Footer from "./Common/Footer";
import LandingPage from "./Components/LandingPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/discovery",
    element: <Discovery />,
  },
  { path: "/breeder", element: <Profile /> },
]);
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}

    {/* <App /> */}
    <HeaderNav />
    <RouterProvider router={router} />
    <Outlet />
    <Footer/>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
