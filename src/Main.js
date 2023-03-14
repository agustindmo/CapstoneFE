import './Main.css';
import React, {useReducer, useState, useEffect} from 'react';
import Photo from './restauranfood.jpg';
import { Link } from 'react-router-dom';


function Main() {

    return (

    <>
        <div className='fullFirst'>
            <table className='Main'>
                <tr><td><h1 className='Title'>Little Lemon</h1></td></tr>
                <tr><td><h2 className='Subtitle'>Chigago</h2></td></tr>
                <tr className='rowDescription'><td><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></td></tr>
                <Link to={"/reservations"} className="Reservations"><button className='ratb'>Reserve a Table</button></Link>
            </table>
            <table>
                <td><img src={Photo} alt="Logo" height={383} width={350} id='restauranfood' /></td>
            </table>
        </div>
    </>
    );
}

export default Main;
