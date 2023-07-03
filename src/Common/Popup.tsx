import { Modal, Box, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { colors } from "../Constants";

interface Props {
  open: boolean;
  title: string;
  secondaryText?: any;
  actions?: ReactElement;
}

const Popup = ({ open, title, secondaryText, actions }: Props) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "7px",
    boxShadow: 24,
    // p: 4,
  };

  return (
    <Modal
      open={open}
      //   onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      
    >
      <Box sx={style}>
      <Box sx={{position: 'relative'}}>
        <img src='/green-paw.png' style={{position: 'absolute', width: '110px', top: 0, right: 0}} />
        <Box sx={{p:4}}>
        <Typography sx={{color: colors.textHeading, textAlign: 'center', fontWeight: 600}} variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {secondaryText}
        </Typography>
        {actions}
        </Box>
      </Box>
      </Box>
    </Modal>
  );
};

export default Popup;
