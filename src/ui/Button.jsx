
// eslint-disable-next-line react/prop-types
function Button({ text = "Know More", onClick, className = "",icon ="" }) {
    return (
        <button
            className={`transition-all duration-300 transform ease-in-out ${className}`}
            type="submit"
            onClick={onClick}
        >
            {text}
            {icon && <span className="mr-2">{icon}</span>}
        </button>
    )
}

export default Button