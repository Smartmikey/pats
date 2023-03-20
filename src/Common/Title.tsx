import { Box, Typography } from "@mui/material";
import { colors } from "../Constants";

interface Props {
  variation?: "large" | "medium" | "small";
  align?: "center" | "left" | "right";
  text: string;
}
const Title = ({ variation, align, text }: Props) => {
  const styles = {
    color: colors.textHeading,
    fontSize:
      variation === "medium" ? "32px" : 
      variation === "large" ? "48px" : "28px",

    textAlign: align || "left",
    fontWeight: "800",
    margin: 6
  };
  return (
    <Box>
      <Typography sx={styles}>{text}</Typography>
    </Box>
  );
};

export default Title;
