import { WidthFull } from '@mui/icons-material'
import { Box, Card, List, ListItem } from '@mui/material'
import { HOSTURL, colors } from '../../Constants'
import { useHistory } from 'react-router-dom'

const PetCard = (data:any) => {
  const location = useHistory();
  const {data: pet} = data;
  
  return (
    <Box onClick={()=> location.push(`/pet/${pet.id}`)} sx={{position: 'relative', color: colors.white, borderRadius: '15px', width: '300px', height: '300px', backgroundSize:'cover', backgroundPosition: 'center', backgroundImage: `url(${HOSTURL}/${pet.photos[0].filepath + pet.photos[0].filename})` }}>
        {/* <img src='cat-pet.jpg' alt='cat' width='100%' style={{borderRadius: '20px'}} /> */}
        <List  sx={{lineHeight: 0.5, bgcolor: colors.darkTransparent, borderRadius: '0 0 12px 12px', position: 'absolute', width: '100%', bottom: 0, }}>
            <ListItem sx={{fontWeight: '600', textTransform: 'uppercase',}}>{pet?.name}</ListItem>
            <ListItem> {pet?.breed?.name}</ListItem>
            <ListItem> North Carolina</ListItem>
        </List>
    </Box>
  )
}

export default PetCard