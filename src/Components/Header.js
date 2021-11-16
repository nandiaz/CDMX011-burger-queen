import React from 'react';
import './Styles/Header.css'
import LogoLet from '../assets/Logo_let.png'

function Header(){

    return (
        <section id="header">
            <img src={LogoLet} alt="Burger-Queen-Logo" id="logo2"/>
        </section>
    )
}

export default Header