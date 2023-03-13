import './Main.css';
import React, {useReducer, useState, useEffect} from 'react';
import Photo from './restauranfood.jpg';
import BookPage from './BookinPage.js'


function Main() {

    return (

    <>
        <div className='fullFirst'>
            <table className='Main'>
                <tr><td><h1 className='Title'>Little Lemon</h1></td></tr>
                <tr><td><h2 className='Subtitle'>Chigago</h2></td></tr>
                <tr className='rowDescription'><td><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></td></tr>
                <a href='/reservations'><button className='ratb'>Reserve a Table</button></a>
            </table>
            <table>
                <td><img src={Photo} alt="Logo" height={383} width={350} id='restauranfood' /></td>
            </table>
        </div>
    </>
    );
}

export default Main;
