import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const AddCar = () => {

  return ( 
    <form>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', m: 4}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Make and Model" />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Color" />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Year" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Mileage" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Price" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">Add Car</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
}

export default AddCar