import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Orders from './Components/Orders';
import Cooking from './Components/Reception';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Orders />}/>  
            <Route path ='/cooking' element={<Cooking />}/>
        </Routes>
    </Router>
  )
}

export default App;

//¿Aquí va el archivo de FB?
