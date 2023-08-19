import Featured from './Featured';
import LatestNews from './LatestNews';
import Faq from './Faq';
import Footer from '../../components/Footer';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            
            <Hero />
            <Featured />
            <LatestNews />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;