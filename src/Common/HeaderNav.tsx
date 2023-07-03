import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { colors } from "../Constants/index";
import { useHistory, Link } from "react-router-dom";
import useAuth from "../Hooks/Auth";
import Axios from "../API/Axios";
import { useCookies } from "react-cookie";

interface Props {
  window?: () => Window;
}

const HeaderNav = (props: Props) => {
  const { window } = props;
  const isUser: any = useAuth();
  const [openPopOver, setOpenPopOver] = useState(false);
  const [, , removeToken] = useCookies(["token"]);
  const [userProfile, setUserProfile] = useState<any>(undefined);
  const history = useHistory();

  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { name: "About us", link: "about-us" },
    // { name: "How it works", link: "how-it-works" },
    { name: "Discover", link: "discovery" },
  ];
  // const navigate = useHistory;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const logUserOut = () => {
    const res = Axios.get("/logout");
    setOpenPopOver(false);
    removeToken("token");
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const loginAndSignup = [
    { name: "Log In", link: "login" },
    { name: "Sign Up", link: "signup", type: "button" },
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/">
          <img src="/Loo.svg" alt="logo" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const userLoggedin = () => {
    if (isUser) {
      return (
        // <Link to={isUser?.role === "ROLE_MEMBER" ? "/breeder" : "/user"}>
        <Avatar onClick={() => setOpenPopOver(!openPopOver)} component="span">
          {userProfile?.name[0]}
        </Avatar>
        // </Link>
      );
    } else {
      return loginAndSignup.map((item, index) => {
        return (
          <Button
            variant={item?.type ? "contained" : "text"}
            key={index}
            sx={{
              color: !item.type ? colors.dark : colors.white,
              cursor: "pointer",
              mx: 1.2,
              background: item.type ? colors.primary : "",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/${item.link}`}
            >
              {item.name}
            </Link>
          </Button>
        );
      });
    }
  };

  useEffect(() => {
    const getBreederProfile = async () => {
      const res = await Axios.get(`member/breeder/${isUser?.id}`);
      setUserProfile(await res.data.data[0]);
    };
    getBreederProfile();
  }, [isUser]);

  return (
    <Container>
      <AppBar
        sx={{
          color: colors.white,
          bgcolor: colors.white,
          boxShadow: "none",
          postion: "relative",
        }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: colors.textHeading }}
          >
            <MenuIcon />
            <Link to="/">
              <img
                src="/Loo.svg"
                width={100}
                style={{ marginLeft: 70 }}
                alt="logo"
              />
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">
              <img src="/Loo.svg" alt="logo" width={130} />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <Button
                variant="text"
                key={item.name}
                sx={{ color: colors.dark, cursor: "pointer", mx: 1.2 }}
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/${item.link}`}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
            {userLoggedin()}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
          }}
        >
          {drawer}
          {userLoggedin()}
        </Drawer>
      </Box>

      {openPopOver && (
        <List
          sx={{
            position: "absolute",
            bgcolor: colors.white,
            m: 2,
            zIndex: 9999,
            width: "200px",
            top: "60px",
            right: 0,
            borderRadius: "8px",
            boxShadow: " 0 3px 8px rgb(0 0 0 / 0.15)",
          }}
        >
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  bgcolor: colors.primary,
                  color: colors.white,
                },
              }}
              onClick={() => {
                setOpenPopOver(!openPopOver)
                isUser?.role === "ROLE_MEMBER"
                  ? history.push("/breeder")
                  : history.push("/user");
              }}
            >
              <ListItemText>
                Dashboard
                {/* </Link> */}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  bgcolor: colors.primary,
                  color: colors.white,
                },
              }}
              // component="a"
              onClick={() => logUserOut()}
            >
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Container>
  );
};

export default HeaderNav;
