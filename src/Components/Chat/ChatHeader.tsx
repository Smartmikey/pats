import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Title from '../../Common/Title'
import { Input } from '@mui/joy'
import { KeyboardArrowDown, KeyboardArrowUp, Search } from '@mui/icons-material'
import { colors } from '../../Constants'
import { useState } from 'react'

const ChatHeader = () => {
    const [openPopOver, setOpenPopOver] = useState(false)
  return (
    <Box>
        <Box sx={{display: 'flex', p:1 }}>
            <Box sx={{flex: 1}}>

            <Title text="Messages" variation='small' sx={{m:0,}}/>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Input variant='soft' size='sm' placeholder='Search' startDecorator={<Search />} />
                <div style={{ position: "relative" }}>
              <Button
                endIcon={!openPopOver ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                sx={{ background: colors.white, px: 1.5, color: colors.dark }}
                onClick={() => setOpenPopOver(!openPopOver)}
              >
                Sort
              </Button>
              {openPopOver && (
                <List
                  sx={{
                    position: "absolute",
                    bgcolor: colors.white,
                    m: 2,
                    zIndex: 9999,
                    width: "200px",
                    right: 0,
                    borderRadius: "8px",
                    boxShadow: " 0 3px 8px rgb(0 0 0 / 0.15)",
                  }}
                >
                 
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          bgcolor: colors.primary,
                          color: colors.white,
                        },
                      }}
                      component="a"
                      href="#simple-list"
                    >
                      <ListItemText primary="Newest" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          bgcolor: colors.primary,
                          color: colors.white,
                        },
                      }}
                      component="a"
                      href="#simple-list"
                    >
                      <ListItemText primary="Oldest" />
                    </ListItemButton>
                  </ListItem>
                </List>
              )}
            </div>
            </Box>
        </Box>
    </Box>
  )
}

export default ChatHeader