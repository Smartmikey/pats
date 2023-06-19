import React from "react";
import ReactDOM from "react-dom/client";
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const breederPath = [
  "/breeder",
  "/breeder/profile",
  "/breeder/account",
  "/breeder/password",
  "/breeder/subscription",
  "/breeder/add-pets",
  "/breeder/available-pets",
];


root.render(
  <React.StrictMode>

    {/* <App /> */}
    <Provider store={store}>
      <Router>
        <HeaderNav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/how-it-works" component={LearnMore} />
          <Route path="/about-us" component={About} />
          <Route path="/change-password" component={ChangedPassword} />
          <Route path="/forget-password" component={ForgotPassword} />
          <Route path="/code-of-ethics" component={CodeOfEthics} />
          <Route path="/discovery" component={Discovery} />
          <Route path="/pets" component={Discover} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signup-breeder" component={SignupBreeder} />
          <Route path="/unauthorized" component={UnauthorizedPage} />
          <Route path="/breeder-profile/*" component={Profile} />
          <Wrapper
            allowedPaths={{
              breeder: breederPath,
              user: ["/user", "/user/profile"],
              unregistered: [],
            }}
          >
            <Route path="/breeder" component={Index} />
            <Route path="/user/*" component={UserIndex} />
            <Route path="/user" component={UserIndex} />
            <Route path="/user" component={UserIndex} />
          </Wrapper>
        </Switch>
      </Router>
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
