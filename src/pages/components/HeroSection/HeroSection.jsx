import Button from '../../../components/Button/Button.jsx';

import HeroImage from '../../../assets/heroImage.svg';
import './HeroSection.scss';

const HeroSection = () => {
    return (
        <section className='heroSection'>
            <div className="hero-text">
                <h1>Empowering Everybody</h1>
                <p><strong>Welcome to TheyRise: </strong>A platform dedicated to helping individuals achieve their goals by connecting them with scholarships, grants, awards, and courses designed to support their journey and promote their talent</p>
                <div className="hero-buttons">
                    <Button buttonText="See Opportunities" buttonStyle="primary" />
                    <Button buttonText="Learn more about us" buttonStyle="secondary" />
                </div>
            </div>
            <img src={HeroImage} alt="" />
        </section>
    )
}

export default HeroSection