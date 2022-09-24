import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const ListOfUsedCars = ({cars, handleDeleteCar}) => {

  const displayCars = cars.map(car => {

    const handleDelete = () => {
      fetch(`http://localhost:9292/cars/${car.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((deleteCar) => handleDeleteCar(deleteCar))
    }

    return(
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', m: 4}}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div" key={car.id}>
              {car.make_and_model}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {car.color} / {car.year}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {car.mileage} mi
            </Typography>
            <Typography variant="body2">
              ${car.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Contact Dealership</Button>
            <Button size="small" onClick={handleDelete}>Remove Car</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
    )
  })

  return (
    <div>{displayCars}</div>
  )
}

export default ListOfUsedCars