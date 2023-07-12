import { PlusOne, SentimentSatisfiedAltOutlined } from "@mui/icons-material";
import { Box, Button, TextField, createSvgIcon } from "@mui/material";
import { colors } from "../../Constants";
import { FieldValues, useForm } from "react-hook-form";
import useAuth from "../../Hooks/Auth";
import Axios from "../../API/Axios";
import { useState } from "react";

interface Props {
  recipientId?: string;
  refresh: any;
}
const ChatInput = ({ recipientId, refresh }: Props) => {
  const { register, handleSubmit } = useForm();
  const [text, setText] = useState("");
  const user: any = useAuth();

  const sendMessage = () => {

    const data = {
      text,
      sender_id: user.id,
      recipient_id: recipientId,
      name: "Chatting",
    };

    Axios.post("chat", data).then((response) => {
      setText("");
      refresh.setRefresh(!refresh.refresh);
    });
  };

  return (
    <Box sx={{ px: 4, py: 2 }} component="form">
      <TextField
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            e.preventDefault();
            sendMessage();
          }
        }}
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!recipientId}
        type="text"
        InputProps={{
          // startAdornment: <img src="/plus.svg" style={{paddingRight: '15px'}}/>,
          endAdornment: (
            <Box>
              {/* <SentimentSatisfiedAltOutlined sx={{color: colors.primary}} /> */}
              <Button
                type="submit"
                disabled={!recipientId}
                variant="contained"
                sx={{ px: 4, mx: 3, bgcolor: colors.primary }}
                endIcon={<img src="/send.svg" />}
                onClick={(e) =>{e.preventDefault(); sendMessage()}}
              >
                Send{" "}
              </Button>
            </Box>
          ),
        }}
        fullWidth
      />
    </Box>
  );
};

export default ChatInput;
