import latest1 from '../../assets/images/others/latest1.png';
import latest2 from '../../assets/images/others/latest2.png';
import latest3 from '../../assets/images/others/latest3.png';

const LatestNews = () => {
    const newsData = [
        {
            id: 0,
            title: "Ducati XDIAVEL S-73",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
            img: latest1
        },
        {
            id: 1,
            title: "Motorcycles & Scooters",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
            img: latest2
        },
        {
            id: 2,
            title: "2021 Honda CBR500R",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
            img: latest3
        },
    ]
    return (
        <div className='container mt-16 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl mb-2'>Latest News</h1>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-5'>
                {
                    newsData.map((data) => <div key={data.id} className="card bg-base-100 shadow">
                        <figure className="px-10 pt-10">
                            <img src={data.img} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="text-xl">{data.title}</h2>
                            <p>{data.description}</p>
                            <div className="card-actions">
                                <button className='px-6 py-2 text-primary rounded-md border-2 border-primary hover:bg-primary hover:text-white'>Read More</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestNews;