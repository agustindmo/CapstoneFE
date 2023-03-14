import React from "react";
import './Specials.css';
import Greek from './greek salad.jpg';
import Lemon from './lemon dessert.jpg';
import Bruchetta from './bruchetta.png';


function Specials() {
    return (
    <div className="fullContainer">
        <div className="twe">
            <table className="tableSpecialsPromo">
                <td className="promoTitle"><h2>This weeks specials!</h2></td>
                <td width={500}></td>
                <td><button className="omb">Online Menu</button></td>
            </table>
        </div>
        <div className="cardContainer">
            <table className="card" width={284}>
                <tr>
                    <td><img src={Greek} width={284} height={185} className='imgCard'/></td>
                </tr>
                <tr>
                    <td className="cardTitle"><h3>Greek Salad</h3></td>
                    <td className="cardPrice"><h3>$12.99</h3></td>
                </tr>
                <tr>
                    <td><p className="cardText">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p></td>
                </tr>
                <tr>
                    <td><a href="" className="cardButton">Order a delivery</a></td>
                    <td><img /></td>
                </tr>
            </table>
            <table className="card" width={284}>
                <tr>
                    <td><img src={Bruchetta} width={284} height={185} className='imgCard'/></td>
                </tr>
                <tr>
                    <td className="cardTitle"><h3>Bruchetta</h3></td>
                    <td className="cardPrice"><h3>$ 5.99</h3></td>
                </tr>
                <tr>
                    <td><p className="cardText">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p></td>
                </tr>
                <tr>
                    <td><a href="" className="cardButton">Order a delivery</a></td>
                    <td><img /></td>
                </tr>
            </table>
            <table className="card" width={284}>
                <tr>
                    <td><img src={Lemon} width={284} height={185} className='imgCard'/></td>
                </tr>
                <tr>
                    <td className="cardTitle"><h3>Lemon Dessert</h3></td>
                    <td className="cardPrice"><h3>$ 5.00</h3></td>
                </tr>
                <tr>
                    <td><p className="cardText">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p></td>
                </tr>
                <tr>
                    <td><a href="" className="cardButton">Order a delivery</a></td>
                    <td><img /></td>
                </tr>
            </table>
        </div>
    </div>
    )
}

export default Specials;