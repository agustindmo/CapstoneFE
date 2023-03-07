import './Footer.css';
import Logo from './Image.png';


function Footer() {
    return (
    <div className="Container">
        <table>
            <a href="/home"><img src={Logo} alt="Logo" height={40} width={147.5}/></a>
        </table>
        <table>
            <th><a href="/home">Doormat Navigation</a></th>
            <a href="/home">Home</a>
            <a href="/home">About</a>
            <a href="/home">Menu</a>
            <a href="/home">Reservations</a>
            <a href="/home">Order Online</a>
            <a href="/home">Login</a>
        </table>
        <table>
            <th><a href="/home">Contact</a></th>
            <td><a href="/home">Address</a></td>
            <td><a href="/home">Phone number</a></td>
            <td><a href="/home">Email</a></td>
        </table>
        <table>
            <th><a href="/home">Social Media Links</a></th>
            <a href="/home" className='Contact'>Address</a>
            <a href="/home" className='Contact'>Phone number</a>
            <a href="/home" className='Contact'>Email</a>
        </table>
    </div>
    );
}

export default Footer;