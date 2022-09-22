import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ListOfDealerships = ({dealership}) => {
  
  const displayDealership = dealership.map(dealership => {
    return(
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography key={dealership.id}>{dealership.name} / 🤙call for more details : {dealership.contact} or visit us ⬇️</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {dealership.location}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    )
  })
  return (
    <div>{displayDealership}</div>
  )
}

export default ListOfDealerships