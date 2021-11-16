import React from 'react';
import './Styles/Nav.css'
import LogoFig from '../assets/Logo_fig.png'
import { Link } from 'react-router-dom'

function Nav(){

    return (
        <nav>
            <img src={LogoFig} alt="Burger-Queen-Logo" id="logo1"/>
            <Link to='/'><button className="section btn-nav" id="btn-new-ord">Nueva orden</button></Link>
            <Link to='/cooking'><button className="section btn-nav" id="btn-recep">Recepción</button></Link>
            {/* <button className="section btn-nav" id="btn-entreg">Entregas</button> */}
        </nav>
    )
}

export default Nav