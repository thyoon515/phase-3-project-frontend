import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AddDealership = () => {

    const navigate = useNavigate();

    const [addDealershipFormData, setAddDealershipFormData] = useState({
      name: "",
      location: "",
      contact: ""
    })
    
    // eslint-disable-next-line
    const [newDealershipData, setNewDealershipData] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:9292/dealerships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
        name: addDealershipFormData.name,
        location: addDealershipFormData.location,
        contact: addDealershipFormData.contact
        }),
      })
        .then((r) => r.json())
        .then((addNewDealership) =>{
          setNewDealershipData(addNewDealership)
          navigate('/dealerships')
        })
      setAddDealershipFormData({})
    }
  
    const handleChange = (e) => {
      const key = e.target.id
      setAddDealershipFormData({
        ...addDealershipFormData,
        [key]: e.target.value
      })
    }

  return ( 
    <form onSubmit={handleSubmit}>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', m: 4}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                id="name" 
                onChange={handleChange} 
                value={addDealershipFormData.name} 
                label="Dealership Name" 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id="location" 
                onChange={handleChange} 
                value={addDealershipFormData.color} 
                label="Location" 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id="contact" 
                onChange={handleChange} 
                value={addDealershipFormData.contact} 
                label="Contact #"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Add Dealership</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
}

export default AddDealership