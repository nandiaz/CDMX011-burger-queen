import React from 'react';
import './Nav.css'
import LogoFig from '../assets/Logo_fig.png'

function Nav(){

    return (
        <nav>
            <img src={LogoFig} alt="Burger-Queen-Logo" id="logo1"/>
            <button className="section">Nueva orden</button>
            {/* <button className="section">Pedidos</button> */}
        </nav>
    )
}

export default Nav