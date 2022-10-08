import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navigation/NavBar';
import Home from "./components/static/Home";
import ListOfUsedCars from "./components/lists/ListOfUsedCars";
import ListOfDealerships from "./components/lists/ListOfDealerships";
import AddCar from "./components/lists/AddCar";
import EditCar from "./components/lists/EditCar";
import AddDealership from "./components/lists/AddDealership";

function App() {

  const [dealerships, setdealerships] = useState([]);
  const [cars, setCars] = useState([]);
  const [editCarId, setEditCarId] = useState(0);

  useEffect(() => {
    fetch("http://localhost:9292/dealerships")
      .then((r) => r.json())
      .then((dealershipsData) => setdealerships(dealershipsData))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/cars")
      .then((r) => r.json())
      .then((carsData) => setCars(carsData))
  }, [])

  const handleDeleteCar = (deleteCar) => {
    const updatedListOfCars = cars.filter((car) => car.id !== deleteCar.id);
    setCars(updatedListOfCars)
  }

  const handleAddNewCar = (postNewCar) => {
    setCars([...cars, postNewCar])
  }

  const handleEditCar = (updateCar) => {
    const updatedCar = cars.map(car => {
      if(car.id === updateCar.id) {
        return updateCar;
      } else {
        return car;
      }
    })
    setCars(updatedCar);
  }
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<ListOfUsedCars cars={cars} handleDeleteCar={handleDeleteCar} setEditCarId={setEditCarId}/>} />
        <Route path="/dealerships" element={<ListOfDealerships dealerships={dealerships} />} />
        <Route path="/addCar" element={<AddCar dealerships={dealerships} handleAddNewCar={handleAddNewCar} />} />
        <Route path="/editCar" element={<EditCar editCarId={editCarId} dealerships={dealerships} handleEditCar={handleEditCar} />} />
        <Route path="/addDealership" element={<AddDealership />} />
      </Routes>
    </Router>
      
  );
}

export default App;
