import { PlusOne, SentimentSatisfiedAltOutlined } from "@mui/icons-material"
import { Box, Button, TextField, createSvgIcon } from "@mui/material"
import { colors } from "../../Constants"

const ChatInput = () => {
    const PlusIcon = createSvgIcon(
        <>
        <rect width="42" height="42" rx="6" fill="#13D3BD" fill-opacity="0.2"/>
<path d="M16 9V23" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 16H23" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </>,
        "PlusIcon"
    )
  return (
   <Box sx={{px: 4, py: 2}}>
    <TextField InputProps={{
            startAdornment: <img src="/plus.svg" style={{paddingRight: '15px'}}/>,
            endAdornment: <>
                <SentimentSatisfiedAltOutlined sx={{color: colors.primary}} />
                <Button variant="contained" sx={{px:4, mx: 3, bgcolor: colors.primary,}} endIcon={<img src="/send.svg" />}>Send </Button>
            </>
          }} fullWidth />
   </Box>
  )
}

export default ChatInput