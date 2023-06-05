import { Box, Button, Container, IconButton } from '@mui/material'
import Title from '../../Common/Title'
import { FormControl, FormLabel, Input } from '@mui/joy'
import { colors } from '../../Constants'
import { RemoveRedEyeOutlined } from '@mui/icons-material'

const Password = () => {
  return (
    <Box sx={{
        mb: 18}}>
      <Title sx={{ ml: 0 }} text="Account" />
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          my: 6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <form>
          <Container maxWidth="sm" sx={{ textAlign: "center" }}>
            <FormControl sx={{ my: 2 }}>
              <FormLabel>Old Password</FormLabel>
              <Input endDecorator={<IconButton> <RemoveRedEyeOutlined /></IconButton>} type='password' variant="soft" />
            </FormControl>
            <FormControl sx={{ my: 2 }}>
              <FormLabel>New Password</FormLabel>
              <Input endDecorator={<IconButton> <RemoveRedEyeOutlined /></IconButton>} type='password' variant="soft" />
            </FormControl>
            <Button
              sx={{
                color: colors.white,
                bgcolor: colors.primary,
                textTransform: 'initial',
                "&:hover": { color: colors.textHeading },
              }}
            >
              Save Changes
            </Button>
          </Container>
        </form>
      </Box>
      </Box>
  )
}

export default Password