
const Button = ({ title, styleProps }) => {
    return (
        <>
            <button className={`px-6 py-2 text-white rounded-md bg-primary ${styleProps}`}>{title}</button>
        </>
    );
};

export default Button;