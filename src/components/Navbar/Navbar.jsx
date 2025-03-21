import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`list_item ${isOpen ? "open" : ""}`}>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    );
}

export default Navbar;
