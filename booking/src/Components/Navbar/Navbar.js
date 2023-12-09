import React, { useState } from 'react';
import Logo from '../../Assits/Logo.png'
import { Link } from 'react-router-dom';

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
                <a className="NavItem" href="/"><Link to="/">Home</Link></a>
                <a className="NavItem" href="/"><Link to="/PageNotReady">About</Link></a>
                <a className="NavItem" href="/"><Link to="/Main">Reserve Table</Link></a>
                <a className="NavItem" href="/"><Link to="/PageNotReady">Contact</Link></a>
            </div>
            <div className="logo"> <Link to="/"><img src={Logo} style={{ width: "150px" }} alt="Logo" /></Link></div>
            <div className='shoppingcart'><i className="fa-solid fa-cart-plus"></i></div>


        </div>
    );
};

export default Navbar;