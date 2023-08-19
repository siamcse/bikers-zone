import Button from "./Button";

const Navbar = () => {
    return (
        <div className='pt-10 container'>
            <nav className='flex justify-end items-center gap-9 '>
                <p>Home</p>
                <p>Shop</p>
                <p>News</p>
                <p>Contact</p>
                <Button title="Login" styleProps="ml-14"/>
            </nav>
        </div>
    );
};

export default Navbar;