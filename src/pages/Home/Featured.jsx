import feature1 from "../../assets/images/others/feature-bike.png";

const Featured = () => {
    const featureData = [
        {
            id: 0,
            img: feature1
        },
        {
            id: 1,
            img: feature1
        },
        {
            id: 2,
            img: feature1
        },
    ]
    return (
        <div className='container mt-16 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl mb-2'>Fetured Bikes In This Year</h1>
                <p className='text-sm text-primary'>Best bike collection</p>
                <hr className='border-1 border-primary w-14 mx-auto mt-1' />
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-32 mt-28'>
                {
                    featureData.map(data => <figure key={data.id} className="">
                        <img src={data.img} alt="" className="rounded-xl" />
                    </figure>)
                }
            </div>
        </div>
    );
};

export default Featured;