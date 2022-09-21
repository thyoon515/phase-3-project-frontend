import React from 'react'

const ListOfDealerships = ({dealership}) => {
  const displayDealership = dealership.map(dealership => {
    return(
      <h3 key={dealership.id}>Dealership: {dealership.name}</h3>
    )
  })
  return (
    <div>{displayDealership}</div>
  )
}

export default ListOfDealerships