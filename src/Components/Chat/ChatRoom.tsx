import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import ChatList from "./ChatList";
import ChatMessages from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatRoom = () => {
  const AVATAR =
    "https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg";
  return (
    <Box>
      <Grid container>
        <Grid item md={4}>
          <ChatList />{" "}
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
        <Grid item md={8} sx={{ overflowY: 'auto'}}>
          <Box sx={{maxHeight: '600px', p: 2, overflowY: "auto" }}>
            <ChatMessages
              avatar={AVATAR}
              messages={[
                "Hi Jenny, How r u today?",
                "Did you train yesterday",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
              ]}
            />
            <ChatMessages
              side={"right"}
              messages={[
                "Great! What's about you?",
                "Of course I did. Speaking of which check this out",
              ]}
            />
            <ChatMessages
              avatar={AVATAR}
              messages={["Im good.", "See u later."]}
            />
          </Box>
          <ChatInput />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatRoom;
