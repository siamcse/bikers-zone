

const Button = ({ title, styleProps }) => {
    return (
        <div>
            <button className={`px-6 py-2 text-white rounded-lg bg-[#E76F51] ${styleProps}`}>{title}</button>
        </div>
    );
};

export default Button;