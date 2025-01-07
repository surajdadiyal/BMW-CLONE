
// eslint-disable-next-line react/prop-types
function Image({ src, alt, className ,loading }) {
    return (
            <img
                src={src}
                alt={alt}
                className={className}
                loading={loading}
            />
    )
}

export default Image