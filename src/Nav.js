import './Nav.css';
import React from 'react';
import Logo from './Image.png';

function Nav() {
    return (
            <ul className='NavBar'>
                <li><a href="/home"><img src={Logo} alt="Logo" height={40} width={147.5} className='Logo'/></a></li>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
    )
}

export default Nav;