
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
      {data.map((item) => {
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
                {submenu.map((submenu: any) => (
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
