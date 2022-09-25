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


const AddCar = () => {

  const [selectDealership, setSelectDealership] = useState('');
  const [makeModel, setMakeModel] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [price, setPrice] = useState('');
  const [addCarData, setAddCarData] = useState([]);

  const handleChangeSelect = (event) => {
    console.log(event.target.value)
    setSelectDealership(event.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      makeModel: makeModel,
      color: color,
      year: year,
      mileage: mileage,
      price: price,
      selectDealership: selectDealership
    };
    const dataArray = [...addCarData, formData];
    setAddCarData(dataArray);
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

  console.log(addCarData)
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
              <TextField onChange={handleChangeYear} value={year} label="Year" />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={handleChangeMileage} value={mileage} label="Mileage" />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={handleChangePrice} value={price} label="Price" />
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
              <Button variant="contained">Add Car</Button>
            </Grid>
          </Grid>
          
        </Box>
      </Container>
    </form>
  );
}

export default AddCar