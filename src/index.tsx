import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discovery from "./Components/Discovery/Discovery";
import Profile from "./Components/BreederProfile/Profile";
import HeaderNav from "./Common/HeaderNav";
import { createTheme, ThemeProvider } from "@mui/system";
import Footer from "./Common/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const theme = createTheme({
//   palette: {
//     primary: '#13D3BD',
//     secondary: '#ffd056',
//     secondaryBorder: '#ffd056',
//     dark: '#253444',
//     white: '#ffffff',
//     gray: '#f3f3f3',
//     darkTransparent: '#25344480',
//     success: {
//         background: '#B9F6CA',
//         text: '#00C853',
//         border: '#00C853'
//     },
//     warn: {
//         background: '#FFCC80',
//         text: '#FB8C00',
//         border: '#FB8C00'
//     },
//     danger: {
//         background: '#FFCDD2',
//         text: '#E53935',
//         border: '#E53935'
//     }
//   },
// });

const router = createBrowserRouter([
  {
    path: "/",
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
    <Footer/>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
