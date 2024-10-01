import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
/* import Logo from "../../assets/logo.png"; */

import "./Header.scss";
import { useRef } from "react";

const Header = () => {
    const navbarMobileRef = useRef();
    const burgerMenuRef = useRef();
    let navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <Link to="/" className="navItem">
                <div className="logo">
                    {/*< img src={Logo} alt="" /> */}
                    <p>TheyRise</p>
                </div>
            </Link>
            <nav>
                <ul className="navbarDesktop">
                    <Link to="/">Home</Link>
                    <Link to="/opportunities">Opportunities</Link>
                    <Link to="/shrerise">SheRise</Link>
                    <Link to="/#about">About Us</Link>
                    <Link to="/#contacts">Know about more initiatives? Share with us!</Link>
                </ul>
                {/* <div
                    className="burger"
                    onClick={toggleNavbarVisibility}
                    ref={burgerMenuRef}
                >
                    <div className="burgerText">MENU</div>
                    <div className="drawing">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
                <ul className="navbarMobile" ref={navbarMobileRef}>
                    <Link to="/">Home</Link>
                    <Link to="/anuncios">Anúncios</Link>
                </ul> */}
            </nav>
        </header>
    );
};

export default Header;