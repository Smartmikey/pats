import { Box, Typography } from "@mui/material";
import { colors } from "../Constants";

interface Props {
  variation?: "large" | "medium" | "small";
  align?: "center" | "left" | "right";
  text: string;
  m?: number;
  sx?: any
}
const Title = ({ variation, align, text, m, sx }: Props) => {
  const styles = {
    color: colors.textHeading,
    fontSize:
      variation === "medium" ? "32px" : 
      variation === "large" ?{xs: "40px", md: "48px"} : {xs: "20px",md:"28px"},

    textAlign: align || "left",
    fontWeight: "800",
    margin: m || 6,
    ...sx

  };
  return (
    <Box>
      <Typography sx={styles}>{text}</Typography>
    </Box>
  );
};

export default Title;
