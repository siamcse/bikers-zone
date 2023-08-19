import Navbar from '../../components/Navbar';
import Featured from './Featured';
import LatestNews from './LatestNews';
import Faq from './Faq';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Featured />
            <LatestNews />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;