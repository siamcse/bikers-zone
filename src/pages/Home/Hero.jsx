import bike5 from '../../assets/images/slider/bike5.png';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import ellipsGroup from '../../assets/images/icons/ellipsGroup.svg'

const Hero = () => {
    return (
        <div style={{ backgroundColor: "#264653" }} className='text-white'>
            <Navbar />
            <div className="container mx-auto">
                <div className="py-20 sm:flex items-center gap-20 px-5 sm:px-0">
                    <div className='w-[500px]'>
                        <p className="text-sm">Computer-controlled digital transistorized with electronic advance</p>
                        <h1 className="text-3xl sm:text-5xl mt-3 mb-5">Honda CBR 300R</h1>
                        <p className='       '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <Button title="Purchase" styleProps="mt-5" />
                    </div>
                    <div className='pt-14 sm:pt-0'>
                        <img className='relative z-10' src={bike5} alt="" />
                        <img className='absolute top-44 right-48 z-0 hidden lg:block' src={ellipsGroup} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;