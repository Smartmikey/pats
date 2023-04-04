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
import { Provider } from "react-redux";
import store from './Redux/store'
import Signup from "./Components/Login/Signup";
import SignupBreeder from "./Components/Login/SignupBreeder";
import Login from "./Components/Login/Login";
import ForgotPassword from "./Components/Login/ForgotPassword";
import ChangedPassword from "./Components/Login/ChangedPassword";
import Discover from "./Components/Discovery/Discover";

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
  {
    path: "/discover",
    element: <Discover />,
  },
  { path: "/breeder", element: <Profile /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signup-breeder", element: <SignupBreeder /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/change-password", element: <ChangedPassword /> },
]);
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}

    {/* <App /> */}
    <Provider store={store}>

    <HeaderNav />
    <RouterProvider router={router} />
    <Outlet />
    <Footer/>
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
