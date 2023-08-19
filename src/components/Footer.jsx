import android from '../assets/images/others/android.png';
import ios from '../assets/images/others/ios.png';

const Footer = () => {
    return (
        <div className='mt-16 bg-black'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center pt-14 text-white'>
                    <div className='pb-28'>
                        <div className='flex gap-6 pb-3'>
                            <p>Download Now</p>
                            <p>License</p>
                        </div>
                        <div className='flex gap-6 pb-3'>
                            <p>About</p>
                            <p>Feature</p>
                            <p>Pricing</p>
                            <p>Career</p>
                            <p>Help</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className='flex gap-6 pb-3'>
                            2023 Abu Siam- Bike Rider. All Rights Reserved
                        </div>
                    </div>
                    <div className='pb-20'>
                        <h5>Get the App</h5>
                        <img className='w-36 mt-4 mb-4' src={android} alt="" />
                        <img className='w-36 ' src={ios} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;