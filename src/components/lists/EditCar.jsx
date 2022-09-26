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

const EditCar = ({editCar}) => {

  const navigate = useNavigate();
  
  const [editMakeModel, setEditMakeModel] = useState(editCar.make_and_model);
  const [editColor, setEditColor] = useState(editCar.color);
  const [editYear, setEditYear] = useState(editCar.year);
  const [editMileage, setEditMileage] = useState(editCar.mileage);
  const [editPrice, setEditPrice] = useState(editCar.price);
  const [editSelectDealership, setEditSelectDealership] = useState(editCar.dealership_id);
  const [newEditCarData, setNewEditCarData] = useState([]);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/cars/${editCar.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        make_and_model: editMakeModel,
        color: editColor,
        year: editYear,
        mileage: editMileage,
        price: editPrice,
        dealership_id: editSelectDealership,
      }),
    })
      .then((r) => r.json())
      .then((updateCar) =>{
        setNewEditCarData(updateCar)
        navigate('/cars')
      })
    setEditMakeModel("");
    setEditColor("");
    setEditYear("");
    setEditMileage("");
    setEditPrice("");
    setEditSelectDealership("");
    }

  const handleEditMakeModel = (e) => {
    setEditMakeModel(e.target.value)
  }

  const handleEditColor = (e) => {
    setEditColor(e.target.value)
  }

  const handleEditYear = (e) => {
    setEditYear(e.target.value)
  }

  const handleEditMileage = (e) => {
    setEditMileage(e.taret.value)
  }

  const handleEditPrice = (e) => {
    setEditPrice(e.target.value)
  }

  const handleEditSelectDealership = (e) => {
    setEditSelectDealership(e.target.value)
  }

  return (
    <form onSubmit={handleSubmitEdit}>
     <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', m: 4}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={handleEditMakeModel} label="Make and Model" value={editMakeModel} />
            </Grid>
            <Grid item xs={4}>
              <TextField onChange={handleEditColor} label="Color" value={editColor} />
            </Grid>
            <Grid item xs={4}>
              <TextField onChange={handleEditYear} type="number" label="Year" value={editYear} />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={handleEditMileage} type="number" label="Mileage" value={editMileage} />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={handleEditPrice} type="number" label="Price" value={editPrice} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Dealership</InputLabel>
                <Select
                  onChange={handleEditSelectDealership}
                  label="Select Dealership"
                  value={editSelectDealership}
                >
                <MenuItem value={71}>Buy Used Cars</MenuItem>
                <MenuItem value={72}>Michael and Milo</MenuItem>
                <MenuItem value={73}>Cars on Us</MenuItem>
                <MenuItem value={74}>Best Cars Only</MenuItem>
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