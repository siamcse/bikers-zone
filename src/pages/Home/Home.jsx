import Featured from './Featured';
import LatestNews from './LatestNews';
import Faq from './Faq';
import Footer from '../../components/Footer';
import Hero from './Hero';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>

            <Hero />
            <Featured />
            <LatestNews />
            <Reviews />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;