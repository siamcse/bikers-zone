
const Navbar = () => {
    return (
        <div className='mt-10 container'>
            <nav className='flex justify-end items-center gap-9 '>
                <p>Home</p>
                <p>Shop</p>
                <p>News</p>
                <p>Contact</p>
                <button className='px-6 py-2 text-white rounded-lg bg-[#E76F51] ml-14'>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;