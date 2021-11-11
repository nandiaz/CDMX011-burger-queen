import React from 'react';
import MenuBf from './MenuBf';
//import './Styles/ShowMenu.css';

function ShowMenu() {
    
    return (
<div id="menu-container">
        <div id="btn-options">
          <button>Desayuno</button>
          <button>Almuerzo</button>
        </div>
        <div id="order">
          <label>Cliente:</label> 
          <input type="text" ></input>
        </div>
        <div id="menu"><MenuBf /></div>
      </div>  
    )  
}

export default ShowMenu