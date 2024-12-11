import { Link } from "react-router-dom";
import TheyRiseLogo from "../../assets/logos/theyrise_logo.svg";
import SheRiseLogo from "../../assets/logos/sherise_logo.svg";

import "./Header.scss";

const Header = () => {

    return (
        <header className="header">
            <Link to="/" className="navItem">
                <div className="logo">
                    <div className="image-container">
                        < img src={TheyRiseLogo} alt="" />
                    </div>
                    <p>TheyRise</p>
                </div>
            </Link>
            <nav>
                <ul className="navbarDesktop">
                    <Link to="/">Home</Link>
                    <Link to="/opportunities">Opportunities</Link>
                    <Link to="/sherise">
                        <div className="sherise-container">
                            <div className="image-container">
                                <img src={SheRiseLogo} alt="" />
                            </div>
                            SheRise
                        </div>
                    </Link>
                    <Link to="/#about">About Us</Link>
                    <Link to="/#contacts">Know about more initiatives? Share with us!</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;