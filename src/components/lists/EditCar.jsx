import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const EditCar = ({ editCar, dealerships, handleEditCar }) => {

  const navigate = useNavigate();

  const [editCarFormData, setEditCarFormData] = useState({
    makeModel: editCar.make_and_model,
    color: editCar.color,
    year: editCar.year,
    mileage: editCar.mileage,
    price: editCar.price,
    dealership: editCar.dealership
  })
  const [editSelectDealership, setEditSelectDealership] = useState(editCar.dealership_id);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/cars/${editCar.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        make_and_model: editCarFormData.makeModel,
        color: editCarFormData.color,
        year: editCarFormData.year,
        mileage: editCarFormData.mileage,
        price: editCarFormData.price,
        dealership_id: editSelectDealership
      }),
    })
      .then((r) => r.json())
      .then((updateCar) => {
        handleEditCar(updateCar)
      })
      navigate('/cars')
      setEditCarFormData({})
      setEditSelectDealership("")
    }

  const handleEditChange = (e) => {
    const key = e.target.id
    setEditCarFormData({
      ...editCarFormData,
      [key]: e.target.value
    })
  }

  const handleEditSelectDealership = (e) => {
    setEditSelectDealership(e.target.value)
  }

  const displayDealership = dealerships.map((dealership) => {
    return (
      <MenuItem key={dealership.id} value={dealership.id}>{dealership.name}</MenuItem>
    )
  })

  return (
    <form onSubmit={handleSubmitEdit}>
     <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', m: 4}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                id="makeModel" 
                onChange={handleEditChange} 
                label="Make and Model" 
                value={editCarFormData.makeModel} 
              />
            </Grid>
            <Grid item xs={4}>
              <TextField 
                id="color" 
                onChange={handleEditChange} 
                label="Color" 
                value={editCarFormData.color} 
              />
            </Grid>
            <Grid item xs={4}>
              <TextField 
                id="year" 
                onChange={handleEditChange} 
                type="number" 
                label="Year" 
                value={editCarFormData.year} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id="mileage" 
                onChange={handleEditChange} 
                type="number" 
                label="Mileage" 
                value={editCarFormData.mileage} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id="price" 
                onChange={handleEditChange} 
                type="number" 
                label="Price" 
                value={editCarFormData.price} 
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Dealership</InputLabel>
                <Select
                  id="selectDealership"
                  onChange={handleEditSelectDealership}
                  label="Select Dealership"
                  value={editSelectDealership} >
                    {displayDealership}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Edit Car</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
    
  )
}

export default EditCar