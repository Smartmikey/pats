import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Discovery from "./Components/Discovery/Discovery";
import Profile from "./Components/BreederProfile/Profile";
import HeaderNav from "./Common/HeaderNav";
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
import About from "./Components/LandingPage/About";
import LearnMore from "./Components/Discovery/LearnMore";
import Index from "./Components/Dashboard";
import CodeOfEthics from "./Components/Discovery/CodeOfEthics";
import  UserIndex from "./Components/User/Index";

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
    path: "/pet",
    element: <Discover />,
  },
  { path: "/breeder-profile", element: <Profile /> },
  { path: "/breeder/*", element: <Index /> },
  { path: "/user/*", element: <UserIndex /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signup-breeder", element: <SignupBreeder /> },
  { path: "/login", element: <Login /> },
  { path: "/about-us", element: <About /> },
  { path: "/how-it-works", element: <LearnMore /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/change-password", element: <ChangedPassword /> },
  { path: "/code-of-ethics", element: <CodeOfEthics /> },
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
