import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const ListOfDealerships = ({dealerships}) => {

  const displayDealership = dealerships.map(dealership => {
    return(
    <div>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', m: 4}}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography key={dealership.id}>
                Dealership ID: {dealership.id} / {dealership.name} / 🤙call for more details : {dealership.contact} or visit us ⬇️
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {dealership.location}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </div>
    )
  })
  return (
    <div>
      {displayDealership}
    </div>
  )
}

export default ListOfDealerships