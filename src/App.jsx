import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navigation/NavBar';
import Home from "./components/static/Home";
import ListOfUsedCars from "./components/lists/ListOfUsedCars";
import ListOfDealerships from "./components/lists/ListOfDealerships";
import AddCar from "./components/lists/AddCar";

function App() {

  const [dealerships, setdealerships] = useState([]);
  const [cars, setCars] = useState([]);

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

  const handleSoldCar = (soldCar) => {
    const updatedListOfCars = cars.filter((car) => car.id !== soldCar.id);
    setCars(updatedListOfCars)
  }
  
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<ListOfUsedCars cars={cars} handleSoldCar={handleSoldCar} />} />
        <Route path="/dealerships" element={<ListOfDealerships dealerships={dealerships} />} />
        <Route path="/addcar" element={<AddCar />} />
      </Routes>
    </Router>
      
  );
}

export default App;
