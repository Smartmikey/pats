import {
  Avatar,
  Badge,
  Box,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";
import { messages } from "../../data";
import { Delete } from "@mui/icons-material";
import { colors } from "../../Constants";
import { useHistory } from "react-router-dom";
import useAuth from "../../Hooks/Auth";
import { capitalizeFirstLowercaseRest } from "../../utility";
interface Props {
  data: any;
  setValue(value: any): void;
}
const ChatList = ({ data, setValue }: Props) => {
  // const {data: } = data
  // const {setOtherId} = setValue
  const history = useHistory();
  const user: any = useAuth();
  // console.log(setValue);

  return (
    <Box>
      <List sx={{ mb: 2 }}>
        {data?.map((chat: any) => (
          <React.Fragment key={chat.id}>
            <ListItem
              key={chat.id}
              secondaryAction={
                <Box>
                  {/* <Box >
                    
                    <Chip size="small" label="New" sx={{bgcolor: colors.chip, fontSize: 10}}/>
                    <Chip size="small" label="4" sx={{bgcolor: colors.primary, color: colors.white, mx: '4px', fontSize: 10}}/>
                    {/* <Box component="span" sx={{bgcolor: colors.primary, color: colors.white, p:'4px 5px',  fontSize: "10px", borderRadius: '50%'}}>4</Box> 
                   </Box>
                   <Typography sx={{}} variant="caption">12:55 a.m</Typography> */}
                </Box>
              }
            >
              <ListItemButton
                onClick={() => {
                  // history.push(
                  //   `${
                  //     user.role === "ROLE_MEMBER"
                  //       ? "/breeder?otherId=" + chat.id
                  //       : "/user/message?otherId=" + chat.id
                  //   }`
                  // );
                  setValue(chat.id);
                }}
                sx={{ maxWidth: { md: "900px" } }}
              >
                <ListItemAvatar key={chat.id}>
                  <Avatar variant="rounded" alt="Profile Picture" />
                </ListItemAvatar>
                <ListItemText primary={capitalizeFirstLowercaseRest(chat.name)} />{" "}
                {/* secondary={secondary.slice(0,26)} /> */}
              </ListItemButton>

              {/* <ListItemText >
                    <Badge>new</Badge>
                </ListItemText> */}
            </ListItem>
            <Divider sx={{ borderColor: "#F1F3F9" }} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ChatList;
