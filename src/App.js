import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Orders from './Components/Orders';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Orders />}/>  
            {/* <Route path ='/processing' component={< />}/>} */}
        </Routes>
    </Router>
  )
}

export default App;

//¿Aquí va el archivo de FB?
