import HeroSection from '../components/HeroSection/HeroSection';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection';
import Footer from '../../components/Footer/Footer';
import ContactsSection from '../components/ContactsSection/ContactsSection';
import OpportunitiesAreas from '../components/OpportunitiesAreas/OpportunitiesAreas';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div>
            <HeroSection />
            <OpportunitiesAreas />
            <AboutUsSection />
            <ContactsSection />
            <Footer />
        </div>
    )
}

export default Home