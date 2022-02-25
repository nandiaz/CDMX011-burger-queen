import { createOrder } from '../firebase.js'
import React from 'react';

import Header from './Header';
import Nav from './Nav';
import ShowMenu from './ShowMenu';
//import { getFirestore } from '@firebase/firestore';


function Orders(){

  //Crear elemento en la colección 'order'
  const addClient = (clientData)=>{
    console.log(clientData)

    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let time = d + h + ":" + m + ":" + s;
    
    createOrder(`order/${time}`, clientData)
    //addClientFirebase(clientData)
    console.log('nueva orden agregada')
  }

    return (
      <section
        style={{display:"flex", flexDirection:"row", justifyContent: "spaceAround",  }}
      >
        <Header />
        <Nav />
        <ShowMenu addOrEdit={addClient}/>
      
      </section> 
    );
  }

export default Orders