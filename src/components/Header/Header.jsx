import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
/* import Logo from "../../assets/logo.png"; */

import "./Header.scss";

const Header = () => {

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
            </nav>
        </header>
    );
};

export default Header;