import React from "react";
import './testimonials.css';
import commentA  from  './Mario and Adrian A.jpg';

function Testimonials() {
    return (
        <div className="testimonials">
            <h2 className="testTitle">Testimonials</h2>
            <div className="testCards">
                <table className="testCard">
                    <tr>
                        <td className="tTitle"><h3>Rating</h3></td>
                    </tr>
                    <tr>
                        <td className="tImg"><img src={commentA} height={46} width={46}/></td>
                        <td className="tName"><h3>Name</h3></td>
                    </tr>
                    <tr>
                        <td className="tDescription"><p>Description</p></td>
                    </tr>
                </table>
                <table className="testCard">
                    <tr>
                        <td className="tTitle"><h3>Rating</h3></td>
                    </tr>
                    <tr>
                        <td className="tImg"><img src={commentA} height={46} width={46}/></td>
                        <td className="tName"><h3>Name</h3></td>
                    </tr>
                    <tr>
                        <td className="tDescription"><p>Description</p></td>
                    </tr>
                </table>
                <table className="testCard">
                    <tr>
                        <td className="tTitle"><h3>Rating</h3></td>
                    </tr>
                    <tr>
                        <td className="tImg"><img src={commentA} height={46} width={46}/></td>
                        <td className="tName"><h3>Name</h3></td>
                    </tr>
                    <tr>
                        <td className="tDescription"><p>Description</p></td>
                    </tr>
                </table>
                <table className="testCard">
                    <tr>
                        <td className="tTitle"><h3>Rating</h3></td>
                    </tr>
                    <tr>
                        <td className="tImg"><img src={commentA} height={46} width={46}/></td>
                        <td className="tName"><h3>Name</h3></td>
                    </tr>
                    <tr>
                        <td className="tDescription"><p>Description</p></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Testimonials;