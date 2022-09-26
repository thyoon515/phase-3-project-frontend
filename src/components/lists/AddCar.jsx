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

  const [selectDealership, setSelectDealership] = useState('');
  const [makeModel, setMakeModel] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [price, setPrice] = useState('');
  // eslint-disable-next-line
  const [addCarData, setAddCarData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9292/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        make_and_model: makeModel,
        color: color,
        year: year,
        mileage: mileage,
        price: price,
        dealership_id: selectDealership,
      }),
    })
      .then((r) => r.json())
      .then((postNewCar) =>{
        setAddCarData(postNewCar)
        navigate('/cars')
      })
    setMakeModel("");
    setColor("");
    setYear("");
    setMileage("");
    setPrice("");
    setSelectDealership("");
  }
  

  const handleChangeMakeModel = (e) => {
    setMakeModel(e.target.value);
  }

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  }

  const handleChangeYear = (e) => {
    setYear(e.target.value);
  }

  const handleChangeMileage = (e) => {
    setMileage(e.target.value);
  }

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  }

  const handleChangeSelect = (event) => {
    setSelectDealership(event.target.value);
  };

  return ( 
    <form onSubmit={handleSubmit}>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', m: 4}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={handleChangeMakeModel} value={makeModel} label="Make and Model" />
            </Grid>
            <Grid item xs={4}>
              <TextField onChange={handleChangeColor} value={color} label="Color" />
            </Grid>
            <Grid item xs={4}>
              <TextField type="number" onChange={handleChangeYear} value={year} label="Year" />
            </Grid>
            <Grid item xs={12}>
              <TextField type="number" onChange={handleChangeMileage} value={mileage} label="Mileage" />
            </Grid>
            <Grid item xs={12}>
              <TextField type="number" onChange={handleChangePrice} value={price} label="Price" />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Dealership</InputLabel>
                <Select
                  value={selectDealership}
                  label="Select Dealership"
                  onChange={handleChangeSelect}
                >
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