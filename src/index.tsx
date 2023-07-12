import React from "react";
import ReactDOM from "react-dom/client";
import * as DOTENV from 'dotenv'
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Discovery from "./Components/Discovery/Discovery";
import Profile from "./Components/BreederProfile/Profile";
import HeaderNav from "./Common/HeaderNav";
import Footer from "./Common/Footer";
import LandingPage from "./Components/LandingPage";
import { Provider } from "react-redux";
import store from "./Redux/store";
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
import UserIndex from "./Components/User/Index";
import Wrapper from "./Wrapper";
import UnauthorizedPage from "./UnauthorizedPage";
import AnimalShelter from "./Legal/AnimalShelter";
import BreederCode from "./Legal/BreederCode";
import LivestockOwners from "./Legal/LivestockOwners";
import PrivacyPolicy from "./Legal/PrivacyPolicy";
import PaymentForm from "./Common/PaymentForm";
import EditPet from "./Components/Dashboard/EditPet";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const breederPath = [
  '/pet',
  "/breeder",
  "/breeder/profile",
  "/breeder/pet",
  "/breeder/account",
  "/breeder/password",
  "/breeder/subscription",
  "/breeder/add-pets",
  "/breeder/available-pets",
  "/breeder/edit-pet/*",
  "/user",
  "/user/profile",
  "/user/message",
  "/user/account",
  "/user/password",
  "/user/subscription",
  "/user/browse-pets",
  "/user/interested-pets",
];
const userPath = [
  '/pet',
  "/user",
  "/user/profile",
  "/user/message",
  "/user/account",
  "/user/password",
  "/user/subscription",
  "/user/browse-pets",
  "/user/interested-pets",
];


root.render(
  <React.StrictMode>

    {/* <App /> */}
    <Provider store={store}>
      <Router>
        <HeaderNav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          {/* <Route path="/how-it-works" component={LearnMore} /> */}
          <Route path="/about-us" component={About} />
          <Route path="/change-password" component={ChangedPassword} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/code-of-ethics" component={CodeOfEthics} />
          <Route path="/discovery" component={Discovery} />
          <Route path="/pet/:id" component={Discover} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signup-breeder" component={SignupBreeder} />
          <Route path="/unauthorized" component={UnauthorizedPage} />
          <Route path="/breeder-profile/:id" component={Profile} />
          <Route path="/animal-shelter-and-animal-rescue-code-ethics" component={AnimalShelter} />
          <Route path="/breeders-code-of-ethics" component={BreederCode} />
          <Route path="/livestock-ouwners-code-of-ethics" component={LivestockOwners} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          {/* <Route path="/payment" component={PaymentForm} /> */}
          {/* <Route path="/breeder/edit-pet/:id" component={EditPet} /> */}
          <Wrapper
            allowedPaths={{
              breeder: breederPath,
              user: userPath,
              unregistered: [],
            }}
          >
            <Route path="/breeder" component={Index} />
            <Route path="/user" component={UserIndex} />
          </Wrapper>
        </Switch>
          <Footer />
      </Router>
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
