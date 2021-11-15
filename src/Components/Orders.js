import React from 'react';

import Header from './Header';
import Nav from './Nav';
import ShowMenu from './ShowMenu';
//import MenuMeals from './Components/MenuMeal';

function Orders(){
  
    return (
      <section
        style={{display:"flex", flexDirection:"row", justifyContent: "spaceAround",  }}
      >
        <Header />
        <Nav />
        <ShowMenu />
      
      </section> 
    );
  }

export default Orders