import { Card, CardActionArea, CardMedia, CardContent, Typography, Badge, Stack, Chip, Grid } from '@mui/material'

const Article = () => {
  return (
    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="cat-pet.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant='caption' color='#1976D2' >John Doe • 4 Feb 2022</Typography>
          <Typography gutterBottom variant="h5" component="h5">
            Lizardss
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
          <Stack direction='row' spacing={1} sx={{p: 2}}>

          <Chip label="Dogs" variant='outlined' size="small" color='secondary' />
          <Chip label="Cat" variant='outlined' size="small" color='secondary'/>
          </Stack>
        
      </CardActionArea>
    </Card>
    </Grid>
  )
}

export default Article