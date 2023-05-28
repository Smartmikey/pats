import { Avatar, Badge, Box, Chip, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Typography } from "@mui/material"
import React from "react"
import { messages } from "../../data"
import { Delete } from "@mui/icons-material"
import { colors } from "../../Constants"

const ChatList = () => {
    
  return (
    <Box>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              
              <ListItem  secondaryAction={
                <Box>

                   <Box >
                    
                    <Chip size="small" label="New" sx={{bgcolor: colors.chip, fontSize: 10}}/>
                    <Chip size="small" label="4" sx={{bgcolor: colors.primary, color: colors.white, mx: '4px', fontSize: 10}}/>
                    {/* <Box component="span" sx={{bgcolor: colors.primary, color: colors.white, p:'4px 5px',  fontSize: "10px", borderRadius: '50%'}}>4</Box> */}
                   </Box>
                   <Typography sx={{}} variant="caption">12:55 a.m</Typography>
                </Box>
                  }>
                <ListItemButton  sx={{ maxWidth: {md: '900px'}}}>
                    <ListItemAvatar>
                  <Avatar variant="rounded" alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary.slice(0,26)} />
                </ListItemButton>
                
                {/* <ListItemText >
                    <Badge>new</Badge>
                </ListItemText> */}
              </ListItem>
              <Divider sx={{borderColor: "#F1F3F9"}} />
            </React.Fragment>
          ))}
        </List>
    </Box>
  )
}

export default ChatList