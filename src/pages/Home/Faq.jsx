import frame from '../../assets/images/others/Frame.png';

const Faq = () => {
    const faqData = [
        {
            id: 0,
            question: 'What are the most important things I should know about riding a bike?',
            answer: 'Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. '
        },
        {
            id: 1,
            question: 'How can I tell if my helmet is old and I need a new one?',
            answer: 'Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. '
        },
        {
            id: 2,
            question: 'My bike has been in storage is it safe to ride?',
            answer: 'Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. '
        },
        {
            id: 3,
            question: 'What rules should I follow when riding my bike?',
            answer: 'Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. '
        },
    ]
    return (
        <div className='container mt-16 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl mb-2'>Frequently Asked <span className='text-primary'>Questions</span></h1>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-32 mt-28'>
                <img className='w-[432px]' src={frame} alt="" />
                <div className="space-y-4 w-[552px]">
                    {
                        faqData.map(data => <details key={data.id} className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">{data.question}</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                                {data.answer}
                            </p>
                        </details>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Faq;