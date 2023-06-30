import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const UnauthorizedPage = () => {
const history = useHistory();
  return (
    <Box sx={{display: 'flex', height: '85vh', justifyContent: 'center', alignItems: "center"}}>
      <Box>

      <Typography variant='h3'>Unauthorized</Typography>
      <Typography>You're not authorized to view this page</Typography>
     <Link to='#' onClick={()=> history.goBack()}>Go back home</Link>
      </Box>
    </Box>
  )
}

export default UnauthorizedPage