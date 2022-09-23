import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navigation/NavBar';
import Home from "./components/static/Home";
import ListOfUsedCars from "./components/lists/ListOfUsedCars";
import ListOfDealerships from "./components/lists/ListOfDealerships";

function App() {

  const [dealerships, setdealership] = useState([]);
  const [cars, setCar] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/dealerships")
      .then((r) => r.json())
      .then((dealerships) => setdealership(dealerships))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/cars")
      .then((r) => r.json())
      .then((cars) => setCar(cars))
  })

  const handleSoldCar = (soldCar) => {
    const updatedListOfCars = cars.filter((cars) => cars.id !== soldCar.id);
    setCar(updatedListOfCars)
  }
  
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<ListOfUsedCars cars={cars} handleSoldCar={handleSoldCar} />} />
        <Route path="/dealerships" element={<ListOfDealerships dealerships={dealerships} />} />
      </Routes>
    </Router>
      
  );
}

export default App;
