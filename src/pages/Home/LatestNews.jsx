import React from 'react';
import latest1 from '../../assets/images/others/latest1.png';
import Button from '../../components/Button';

const LatestNews = () => {
    return (
        <div className='container mt-16 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl mb-2'>Latest News</h1>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={latest1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ducati XDIAVEL S-73</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;