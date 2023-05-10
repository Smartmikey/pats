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

interface Props {
  Icon: any;
  name: string;
  link: string;
  submenu?: any[];
}
const VerticalMenu = () => {
  const menuItems: Props[] = [
    {
      Icon: <House />,
      name: "home",
      link: "breeder",
    },
    {
      Icon: <Person />,
      name: "my profile",
      link: "breeder/profile",
      submenu: [{ name: "contact info", link: "breeder/contact" }],
    },
    {
      Icon: <Pets />,
      name: "pet",
      link: "breeder/pets",
      submenu: [
        { name: "available pets", link: "breeder/available-pets" },
        { name: "past pets", link: "breeder/past-pets" },
        { name: "add pets", link: "breeder/add-pets" }
      ],
    },
    {
      Icon: <Settings />,
      name: "settings",
      link: "breeder/settings",
      submenu: [
        { name: "account", link: "breeder/available-pets" },
        { name: "password", link: "breeder/past-pets" },
        { name: "subscription", link: "breeder/add-pets" }
      ],
    },
  ];
  return (
    <Box sx={{ p: 2 }}>
      {menuItems.map((item) => {
        const { Icon, name, link, submenu } = item;
        return (
          <>
            <Button
              href={link}
              size="large"
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "left",
                textTransform: 'capitalize',
                color: colors.textHeading,
              }}
              startIcon={Icon}
            >
              {" "}
              {name}
            </Button>
            {submenu && (
              <Box sx={{ ml: 4 }}>
                {submenu.map((submenu) => (
                  <Button
                    href={submenu.link}
                    size="large"
                    fullWidth
                    sx={{
                      display: "flex",
                      textTransform: 'capitalize',
                      justifyContent: "left",
                      color: colors.textHeading,
                    }}
                  >
                    {" "}
                    {submenu.name}
                  </Button>
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
