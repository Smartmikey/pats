
import { Box, Button, SvgIconProps } from "@mui/material";
import { isTemplateExpression } from "typescript";
import { colors } from "../Constants";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../interface/Menu";



// interface Props {
//   menuItems: PropsItem[];
// }
const VerticalMenu = ({data}: menuData) => {
  

  const location = useLocation();
  return (
    <Box sx={{ p: 2 }}>
      {data.map((item, index) => {
        const { Icon, name, link, submenu } = item;
        return (
          <Box key={index}>
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
                    location.pathname.endsWith(link!)
                      ? colors.white
                      : colors.textHeading,
                  bgcolor:
                    location.pathname.endsWith(link!)
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
                {submenu.map((submenu: any, index) => (
                  <Link key={index} to={submenu.link || "#"} style={{ textDecoration: "none" }}>
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
                          location.pathname.endsWith(submenu.link!)
                            ? colors.white
                            : colors.textHeading,
                        bgcolor:
                          location.pathname.endsWith(submenu.link!)
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
          </Box>
        );
      })}
    </Box>
  );
};

export default VerticalMenu;
