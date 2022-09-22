import React from 'react'

const ListOfUsedCars = ({car}) => {

  const displayCars = car.map(car => {
    return(
      <h3 key={car.id}>Make / Model: {car.make_and_model}</h3>
    )
  })
  return (
    <div>{displayCars}</div>
  )
}

export default ListOfUsedCars