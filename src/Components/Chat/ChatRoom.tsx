import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatMessages from "./ChatMessage";
import ChatInput from "./ChatInput";
import Axios from "../../API/Axios";
import useAuth from "../../Hooks/Auth";
import { getUserMessages } from "../../utility";
import { useLocation, useParams } from "react-router-dom";

const ChatRoom = () => {
  const [chatMessage, setChatMessage] = useState<any>();
  const user: any = useAuth();
  const [otherId, setOtherId] = useState("");
  const {id} = useParams<any>();
  const [refresh, setRefresh] = useState(false);
  const AVATAR =
    "https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg";
  // const {otherId} = useParams<any>();
  const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const [searchParams, setSearchParams] = useSearchParams();
  const userChat = chatMessage?.filter(
    (chat: any) =>
      (chat.sender_id === user?.id && chat.recipient_id === otherId) ||
      (chat.recipient_id === user?.id && chat.sender_id === otherId)
  );
  const chatList = getUserMessages(user?.id, chatMessage);

  useEffect(() => {
    const getChatMessages = () => {
      Axios.get("/chat").then((res) => {
        setChatMessage(res.data.data);
      });
    };
    getChatMessages();
    const interval = setInterval(getChatMessages, 30000);
    return () => clearInterval(interval);
  }, [otherId, refresh]);
  return (
    <Box>
      <Grid container>
        <Grid item md={4}>
          <ChatList data={chatList} setValue={setOtherId} />{" "}
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
        <Grid item md={8} sx={{ overflowY: "auto" }}>
          <Box
            sx={{
              minHeight: "599px",
              maxHeight: "600px",
              p: 2,
              overflowY: "auto",
              position: "relative",
            }}
          >
            {/* <ChatMessages
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
            /> */}

            {userChat?.length > 0 &&
              userChat
                .sort(
                  (a: any, b: any) =>
                    new Date(a.created_at).getTime() -
                    new Date(b.created_at).getTime()
                )
                .map((chat: any) => (
                  <ChatMessages
                    avatar={chat.recipient.name[0]}
                    side={chat.sender_id === user.id ? "right" : "left"}
                    messages={chat.messages.map((message: any) => message.text)}
                  />
                ))}
          </Box>
          {userChat?.length < 1 && (
            <Box sx={{ textAlign: "center" }}>
              <Typography>Start a new chat</Typography>
            </Box>
          )}
          <ChatInput recipientId={otherId || id} refresh={{ refresh, setRefresh }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatRoom;
