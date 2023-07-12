import Title from '../../Common/Title'
import { Box, Button, Stack } from '@mui/material'
import { colors } from '../../Constants'
import { useHistory } from 'react-router-dom'

const InterestedPets = () => {
  const history = useHistory()
  return (
    <>
      <Title text="Interested Pets" sx={{ml:0}} />
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: {xs: 4, md:8},
          my: 6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box sx={{textAlign: 'center'}}>
          <img src="/dog-outline.svg" style={{width: '100px'}} alt="cat outline " />
          <Title text="No favorite pets to show yet" align='center' sx={{mb:0}}/>
          <p>When you find a pet you love, add it to your favorites list by tapping the ♥</p>
          <Stack sx={{width: '200px', mx: 'auto'}} spacing={3}>
            <Button sx={{bgcolor: colors.textHeadingTransparent, color: colors.white, '&:hover': {bgcolor: colors.textHeading}}} startIcon={<img width="20px" src="/dog.svg" />} onClick={()=> history.push(`/user/`)}> Browse Dogs</Button>
            <Button sx={{bgcolor: colors.textHeadingTransparent, color: colors.white, '&:hover': {bgcolor: colors.textHeading}}} startIcon={<img width="20px" src="/cat.svg" />}  onClick={()=> history.push(`/user/`)}> Browse Cats</Button>
            <Button sx={{bgcolor: colors.textHeadingTransparent, color: colors.white, '&:hover': {bgcolor: colors.textHeading}}} startIcon={<img width="20px" src="/paw.svg" />}  onClick={()=> history.push(`/user/`)}> Browse Other</Button>
            
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default InterestedPets