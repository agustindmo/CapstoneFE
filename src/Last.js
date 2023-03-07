import './last.css';
import React from 'react';
import canvas from './canvas.png';

function Last() {
    return (
        <div className='lastContainer'>
                <table className='lasttextCard'>
                        <tr><td><h1 className='lastTitle'>Little Lemon</h1></td></tr>
                        <tr><td><h2 className='lastSubtitle'>Chigago</h2></td></tr>
                        <tr><td><p className='lastText'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p></td></tr>
                </table>
                <table className='lasImg'>
                    <img src={canvas} alt="Restaurante picture" height={380} width={500} id="restaurantpic"/>
                </table>
        </div>
    );
}

export default Last;