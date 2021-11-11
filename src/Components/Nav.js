import React from 'react';
import './Styles/Nav.css'
import LogoFig from '../assets/Logo_fig.png'

function Nav(){

    return (
        <nav>
            <img src={LogoFig} alt="Burger-Queen-Logo" id="logo1"/>
            <button className="section btn-nav" id="btn-new-ord">Nueva orden</button>
            {/* <button className="section btn-nav" id="btn-recep">Recepción</button> */}
            {/* <button className="section btn-nav" id="btn-entreg">Entregas</button> */}
        </nav>
    )
}

export default Nav