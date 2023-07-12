import { Box, Button, Grid,  } from '@mui/material'
import { Link, useHistory } from 'react-router-dom'
import { pets } from '../../data'
import PetCard from '../Discovery/PetCard'
import { useEffect, useState } from 'react'
import Axios from '../../API/Axios'
import { colors } from '../../Constants'

const AvailablePets = (data:any) => {
  const [pets, setPets] = useState<any>();
  const history = useHistory();

    useEffect(() => {
    
      const getPets = async()=> {
  
        const res = await Axios.get(`/breeder/pets/${data?.data?.id}/member`)
        setPets(await res.data.data);
      }
      getPets();
  
    }, [data.data.id]);
  return (
    <Box sx={{my:6, display: 'flex', gap: 5, flexDirection: 'column', justifyContent: 'center'}}>
        <Grid container spacing={3}>
            {pets?.filter((pet: any) => pet.status === 'AVAILABLE')?.map((pet: any) => (
            <PetCard
              key={pet.id}
              size={4}
              data={pet}
              Action={
                <>
                  <Button
                    variant="outlined"
                    sx={{
                      color: colors.primary,
                      borderColor: colors.primary,
                      mx: 1,
                      textTransform: "initial",
                      borderRadius: "6px",
                      "&:hover": { borderColor: colors.primary },
                    }}
                    onClick={() => history.push(`/pet/${pet?.id}`)}
                  >
                    View more
                  </Button>
                </>
              }
            />
          ))}
            
        </Grid>

        {/* <Link style={{textAlign: 'center'}} to="#">See more</Link> */}
    </Box>
  )
}

export default AvailablePets