import { ArrowRight, East, West } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { ReactElement, useRef } from "react";
import { colors } from "../Constants";
interface Props {
  children: string | JSX.Element | ReactElement | JSX.Element[];
}
const Scrollable = ({ children }: Props) => {
  const ref = useRef<any>();

  const scroll = (scrollOffset: number) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        ref={ref}
        sx={{ display: "-webkit-box", flexDirection: "row", overflow: "auto" }}
      >
        {children}
      </Box>
      <IconButton
        onClick={() => scroll(-900)}
        sx={{
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          position: "absolute",
          left: -20,
          top: "50%",
          bgcolor: colors.white,
          "&:hover": { bgcolor: colors.white },
        }}
      >
        <West />
      </IconButton>
      <IconButton
        onClick={() => scroll(900)}
        sx={{
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          position: "absolute",
          right: -20,
          top: "50%",
          bgcolor: colors.white,
          "&:hover": { bgcolor: colors.white },
        }}
      >
        <East />
      </IconButton>
    </Box>
  );
};

export default Scrollable;
