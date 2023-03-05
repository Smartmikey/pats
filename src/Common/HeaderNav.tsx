import { AppBar, Box, Button, Container, Divider, Link, Drawer, IconButton,  List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { colors } from "../Constants/index";
import {  useNavigate } from "react-router-dom";

interface Props {
    
    window?: () => Window;
  }

const HeaderNav = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navItems = [{name: 'About us', link: 'about-us'}, {name: 'How it works', link: 'how-it-works'}, {name: 'Discover', link: 'discovery'}, {name: 'Log in', link: 'login'}, {name: 'Sign up', link: 'sign-up', type: 'button'},];
  const navigate = useNavigate
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/">

      <img src='Loo.svg' alt="logo" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <Link href={item.link} sx={{textDecoration: 'none', color: 'inherit'}} >
              <ListItemText primary={item.name} />
              </Link>
                
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Container>
        <AppBar sx={{color: colors.white, bgcolor: colors.white, boxShadow: 'none', postion: 'relative'}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: colors.textHeading }}
          >
            <MenuIcon />
            <Link href='/'>

          <img src='Loo.svg' width={100} style={{marginLeft: 70}} alt="logo" />
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href='/'>

            <img src='Loo.svg' alt="logo" />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button variant={item.type ? 'contained' : 'text'}   key={item.name} sx={{ color: !item.type ? colors.dark : colors.white, cursor: "pointer", mx: 1.2, background: item.type ? colors.primary : '' }}>
                <Link sx={{textDecoration: 'none', color: 'inherit'}} href={item.link}>{item.name}</Link>
              </Button>
            ))}
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Container>
  )
}

export default HeaderNav