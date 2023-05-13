import {
  HomeRepairServiceTwoTone,
  House,
  Person,
  Pets,
  Settings,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/joy/SvgIcon/SvgIconProps";
import { Box, Button, SvgIconProps } from "@mui/material";
import { isTemplateExpression } from "typescript";
import { colors } from "../Constants";
import { Link, useLocation } from "react-router-dom";

interface Props {
  Icon: any;
  name: string;
  link?: string;
  submenu?: any[];
}
const VerticalMenu = () => {
  const menuItems: Props[] = [
    {
      Icon: <House />,
      name: "home",
      link: ".",
    },
    {
      Icon: <Person />,
      name: "my profile",
      link: "profile",
      submenu: [{ name: "contact info" }],
    },
    {
      Icon: <Pets />,
      name: "pet",
      submenu: [
        { name: "available pets", link: "available-pets" },
        { name: "past pets" },
        { name: "add pets", link: "add-pets" },
      ],
    },
    {
      Icon: <Settings />,
      name: "settings",
      submenu: [
        { name: "account", link: "account" },
        { name: "password", link: "password" },
        { name: "subscription", link: "subscription" },
      ],
    },
  ];

  const location = useLocation();
  console.log(location);

  return (
    <Box sx={{ p: 2 }}>
      {menuItems.map((item) => {
        const { Icon, name, link, submenu } = item;
        return (
          <>
            <Link to={link || "#"} style={{ textDecoration: "none" }}>
              <Button
                size="large"
                fullWidth
                // disabled={!link}
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  textTransform: "capitalize",
                  color:
                    location.pathname == `/breeder/${link}`
                      ? colors.white
                      : colors.textHeading,
                  bgcolor:
                    location.pathname == `/breeder/${link}`
                      ? colors.textHeadingTransparent
                      : "",
                  "&:hover": { color: colors.textHeading },
                }}
                startIcon={Icon}
              >
                {" "}
                {name}
              </Button>
            </Link>
            {submenu && (
              <Box sx={{ ml: 4 }}>
                {submenu.map((submenu) => (
                  <Link to={submenu.link || "#"} style={{ textDecoration: "none" }}>
                    {" "}
                    <Button
                      // disabled={!submenu.link}
                      size="large"
                      fullWidth
                      sx={{
                        display: "flex",
                        textTransform: "capitalize",
                        justifyContent: "left",
                        color:
                          location.pathname == `/breeder/${submenu.link}`
                            ? colors.white
                            : colors.textHeading,
                        bgcolor:
                          location.pathname == `/breeder/${submenu.link}`
                            ? colors.textHeadingTransparent
                            : "",
                        "&:hover": { color: colors.textHeading },
                      }}
                    >
                      {" "}
                      {submenu.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            )}
          </>
        );
      })}
    </Box>
  );
};

export default VerticalMenu;
