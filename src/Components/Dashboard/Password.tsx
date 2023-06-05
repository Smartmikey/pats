import { Box, Button, Container, IconButton } from '@mui/material'
import Title from '../../Common/Title'
import { FormControl, FormLabel, Input } from '@mui/joy'
import { colors } from '../../Constants'
import { RemoveRedEyeOutlined } from '@mui/icons-material'
import { useForm } from 'react-hook-form'

interface PasswordInterface {
  oldPassword: string
  newPassword: string
}

const Password = () => {
  const {register, watch, handleSubmit, formState: { errors }} = useForm();
console.log("got here");

  const handleFormSubmit = async(data: any) => {
    // data.preventDefault();
    console.log("line 17 ", data);
    
  }
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
          <Container component="form" onSubmit={handleSubmit(handleFormSubmit)} maxWidth="sm" sx={{ textAlign: "center" }}>
            
            <FormControl sx={{ my: 2 }}>
              <FormLabel>Old Password</FormLabel>
              <Input {...register("oldPassword")} endDecorator={<IconButton> <RemoveRedEyeOutlined /></IconButton>} type='password' variant="soft" />
            </FormControl>
            <FormControl sx={{ my: 2 }}>
              <FormLabel>New Password</FormLabel>
              <Input {...register("newPassword")} endDecorator={<IconButton> <RemoveRedEyeOutlined /></IconButton>} type='password' variant="soft" />
            </FormControl>
            <Button
            type='submit'
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
      </Box>
      </Box>
  )
}

export default Password