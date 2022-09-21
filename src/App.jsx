import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navigation/NavBar';
import Home from "./components/static/Home";
import ListOfUsedCars from "./components/lists/ListOfUsedCars";
import ListOfDealerships from "./components/lists/ListOfDealerships";

function App() {

  const [dealership, setdealership] = useState([]);
  const [car, setCar] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/dealerships")
      .then((r) => r.json())
      .then((dealership) => setdealership(dealership))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/cars")
      .then((r) => r.json())
      .then((car) => setCar(car))
  })
  
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<ListOfUsedCars car={car}/>} />
        <Route path="/dealerships" element={<ListOfDealerships dealership={dealership} />} />
      </Routes>
    </Router>
      
  );
}

export default App;
