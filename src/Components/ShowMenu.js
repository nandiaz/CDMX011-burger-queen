import React, { useState } from 'react';
import MenuBf from './MenuBf';
import MenuMeals from './MenuMeal';
import './Styles/ShowMenu.css';

function ShowMenu() {
  //se declara lo que queremos que cambie
  const [client, setClient] = useState('');
  const [typeOfFood, setTypeOfFood] = useState('breakfast');

    const handleInputChange = (e) => {
      setClient(e.target.value)
      console.log(client);
    }
    
    return (
      <div id="menu-container">
        <div id="btn-options">
          <button onClick={()=>{setTypeOfFood('breakfast')}}>Desayuno</button>
          <button onClick={()=>{setTypeOfFood('meal')}}>Almuerzo</button>
        </div>
        <div id="order">
          <label>Cliente: </label> 
          <input 
            type="text" 
            //value={}
            onChange={handleInputChange}
          />
          <label>Mesa: </label>           
          <input type="text" ></input>
          {/* <p>Conteo: {count}</p>           */}
        </div>
        <div id="menu">
          {
            typeOfFood === 'breakfast'? <MenuBf/>:<MenuMeals/>
          }
        </div>
      </div>  
    )  
}

export default ShowMenu

// class Menus extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       breakfast : true,
//       meal : false,
//     }
//   }

//   meals = () => {
//     this.setState({
//       breakfast: false,
//       meal : true
//     })
//   }


//   render(){
//     return (
//       <div id="menu-container">
//         <div id="btn-options">
//           <button onCLick={this.menus}>Desayuno</button>
//           <button onCLick={this.meals}>Almuerzo</button>
//         </div>
//         <div id="order">
//           <label>Cliente: </label> 
//           <input type="text" ></input>
//           <label>Mesa: </label> 
//           <input type="text" ></input>
//         </div>
//         <div id="menu"><MenuBf /></div>
//       </div>  
//     )  
//   }
// };