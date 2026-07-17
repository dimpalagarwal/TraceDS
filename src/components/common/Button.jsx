const Button = ({ children, onClick, disabled = false, hoverColor = "emerald-500" }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`rounded-xl border py-2 text-sm cursor-pointer hover:bg-${hoverColor} hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full`}>
            {children}
        </button>
    );
};

export default Button;
