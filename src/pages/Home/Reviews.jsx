import user1 from '../../assets/images/others/user-1.png';
import user2 from '../../assets/images/others/user-2.png';
import user3 from '../../assets/images/others/user-3.png';
import starRegular from '../../assets/images/icons/star-regular.svg';
import starSolid from '../../assets/images/icons/star-solid.svg';
import starHalf from '../../assets/images/icons/star-half-stroke-solid.svg';


const Reviews = () => {
    const reviewsData = [
        {
            id: 0,
            name:'Regina Miles',
            image : user1 ,
            rating: 4,
            reviewText: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
            title: "Banker"
        },
        {
            id: 1,
            name:'Regina Miles',
            image : user2 ,
            rating: 4,
            reviewText: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
            title: "Banker"
        },
        {
            id: 2,
            name:'Regina Miles',
            image : user3 ,
            rating: 4,
            reviewText: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
            title: "Banker"
        },
    ]
    return (
        <div className='container mt-16 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl mb-2'>Happy <span className='text-primary'>Clients Says</span></h1>
            </div>
            <div className='flex flex-col sm:flex-row justify-center gap-5 items-center mt-14'>
                {
                    reviewsData.map(data => <div key={data.id} className='w-80 flex flex-col items-center shadow p-9 border-2 rounded-md'>
                        <img className='w-40' src={data.image} alt="" />
                        <div className='text-center pt-8'>
                            <p>{data.reviewText}</p>
                            <div className='flex gap-1 justify-center pt-4'>
                                <img className='w-5' src={starSolid} alt="" />
                                <img className='w-5' src={starSolid} alt="" />
                                <img className='w-5' src={starSolid} alt="" />
                                <img className='w-5' src={starSolid} alt="" />
                                <img className='w-5' src={starRegular} alt="" />
                            </div>
                            <p className='pt-4 text-secondary text-sm font-semibold'>{data.name}</p>
                            <p className='pt-4 text-sm font-semibold'>{data.title}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;