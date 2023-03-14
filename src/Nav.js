import './Nav.css';
import React from 'react';
import Logo from './Image.png';
import {Link} from "react-router-dom";


function Nav() {
    return (
            <ul className='NavBar'>
                <li><Link to={"/"} className="Home"><img src={Logo} alt="Logo" height={40} width={147.5} className='Logo'/></Link></li>
                <li><Link to={"/"} className="Home">Home</Link></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><Link to={"/reservations"} className="Reservations">Reservations</Link></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
    )
}

export default Nav;