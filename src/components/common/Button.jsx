const Button = ({
    children,
    onClick,
    disabled = false,
    variant = "success",
}) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={`visualizer-button
                ${variant === "success" ? "hover:bg-emerald-500" : ""}
                ${variant === "danger" ? "hover:bg-red-500" : ""}
                ${variant === "warning" ? "hover:bg-yellow-500" : ""}
                ${variant === "primary" ? "hover:bg-blue-500" : ""}
            `}
        >
            {children}
        </button>
    );
};

export default Button;