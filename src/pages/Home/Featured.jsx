import feature1 from "../../assets/images/others/feature-bike.png";

const Featured = () => {
    return (
        <div className='container mt-16 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl mb-2'>Fetured Bikes In This Year</h1>
                <p className='text-sm text-secondary'>Best bike collection</p>
                <hr className='text-secondary w-14 mx-auto mt-1'/>
            </div>
            <div className='flex justify-center items-center gap-36 mt-28'>
                <img src={feature1} alt="" />
                <img src={feature1} alt="" />
                <img src={feature1} alt="" />
            </div>
        </div>
    );
};

export default Featured;