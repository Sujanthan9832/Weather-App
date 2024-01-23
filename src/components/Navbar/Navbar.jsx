import './navbar.css';
import logo from '../../assets/img/logo.png';

function Navbar() {
    return (
        <div className="nav">
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
            <div >
                <ul className='list_item'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;