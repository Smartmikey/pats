import { Box, Typography } from "@mui/material";
import { colors } from "../Constants";

interface Props {
  variation?: "large" | "medium" | "small";
  align?: "center" | "left" | "right";
  text: string;
  m?: number;
  secondary?: string;
  sx?: any
}
const Title = ({ variation, align, text, m, sx, secondary }: Props) => {
  const styles = {
    color: colors.textHeading,
    fontSize:
      variation === "medium" ? "32px" : 
      variation === "large" ?{xs: "40px", md: "48px"} : {xs: "20px",md:"28px"},

    textAlign: align || "left",
    fontWeight: "800",
    margin: !secondary ? (m || 6) : `${m || "16px"} 0 0 0` ,
    ...sx

  };
  return (
    <Box>
      <Typography sx={styles}>{text}</Typography>
      {secondary && (
              <Typography sx={{textAlign: align, mb: 6}} >{secondary}</Typography>
      )}
    </Box>
  );
};

export default Title;
