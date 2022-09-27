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


const AddCar = () => {

  const navigate = useNavigate();

  const [addCarFormData, setAddCarFormData] = useState({
    makeModel: "",
    color: "",
    year: "",
    mileage: "",
    price: ""
  })
  const [selectDealership, setSelectDealership] = useState("")
  // eslint-disable-next-line
  const [addNewCarData, setAddNewCarData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9292/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        make_and_model: addCarFormData.makeModel,
        color: addCarFormData.color,
        year: addCarFormData.year,
        mileage: addCarFormData.mileage,
        price: addCarFormData.price,
        dealership_id: selectDealership,
      }),
    })
      .then((r) => r.json())
      .then((postNewCar) =>{
        setAddNewCarData(postNewCar)
        navigate('/cars')
      })
    setAddCarFormData({})
    setSelectDealership("")
  }

  const handleChange = (e) => {
    const key = e.target.id
    setAddCarFormData({
      ...addCarFormData,
      [key]: e.target.value
    })
  }

  const handleChangeDealership = (e) => {
    setSelectDealership(e.target.value)
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', m: 4}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                id="makeModel" 
                onChange={handleChange} 
                value={addCarFormData.makeModel} 
                label="Make and Model" 
              />
            </Grid>
            <Grid item xs={4}>
              <TextField 
                id="color" 
                onChange={handleChange} 
                value={addCarFormData.color} 
                label="Color" 
              />
            </Grid>
            <Grid item xs={4}>
              <TextField 
                id="year" 
                type="number" 
                onChange={handleChange} 
                value={addCarFormData.year} 
                label="Year" 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id="mileage" 
                type="number" 
                onChange={handleChange} 
                value={addCarFormData.mileage} 
                label="Mileage" 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id="price" 
                type="number" 
                onChange={handleChange} 
                value={addCarFormData.price} 
                label="Price" 
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Dealership</InputLabel>
                <Select
                  id="selectDealership"
                  value={selectDealership}
                  label="Select Dealership"
                  onChange={handleChangeDealership} >
                    <MenuItem value={71}>Buy Used Cars</MenuItem>
                    <MenuItem value={72}>Michael and Milo</MenuItem>
                    <MenuItem value={73}>Cars on Us</MenuItem>
                    <MenuItem value={74}>Best Cars Only</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Add Car</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
}

export default AddCar