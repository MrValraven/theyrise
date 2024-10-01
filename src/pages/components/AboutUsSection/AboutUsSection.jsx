import Button from '../../../components/Button/Button';
import AboutUsImage from '../../../assets/aboutUsImage.svg'
import './AboutUsSection.scss';

const AboutUsSection = () => {
    return (
        <section id="about" className='about'>
            <h1>About Us</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>At TheyRise, we aim to uplift individuals by connecting them with scholarships, grants, awards, and courses designed to support their growth and help them showcase their unique talents, unlocking their full potential.
                    </p>
                    <p>
                        <strong>Our Story</strong>
                        <span>TheyRise and SheRise were created with a shared vision—bridging the gap between people and the opportunities they need to succeed. Inspired by the challenges faced in first hand, our founders, <a href='https://www.linkedin.com/in/rita-pinhol/'>Rita Pinhol</a>, <a href='#'>Nathalia Muller</a> and <a href='https://www.linkedin.com/in/tiagoagcosta/'>Tiago Costa</a>, were driven to create a platform where these barriers could be dismantled.</span>
                    </p>
                    <p>SheRise was born from the recognition that women often face unique hurdles in their journey. Through SheRise, we provide the resources and support that women need to pursue their passions and shape their future.
                    </p>
                    <p>
                        Today, TheyRise and SheRise are proud to be part of a movement that fosters growth for all. We are building a world where everyone, regardless of gender, has the tools and support needed to thrive, ensuring that every individual can pursue their dreams and reach their full potential.
                    </p>
                    <p>Together, we’re shaping a future where everyone can rise.</p>
                </div>
                <div className="about-image">
                    <img src={AboutUsImage} alt="" />
                    <Button buttonText='Talk to us!' />
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection