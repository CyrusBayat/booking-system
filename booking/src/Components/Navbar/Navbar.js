import React, { useState } from 'react';
import Logo from '../../Assits/Logo.png'

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
            <div className="logo"> <img src={Logo} style={{ width: "50px" }} alt="Logo" /></div>
            <div className='shoppingcart'><i className="fa-solid fa-cart-plus"></i></div>


        </div>
    );
};

export default Navbar;