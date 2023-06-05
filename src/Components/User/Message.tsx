import { Box } from '@mui/material'
import Index from '../Chat/Index'

const Message = () => {
  return (
    <Box>
         <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          my:6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Index />
      </Box>
    </Box>
  )
}

export default Message