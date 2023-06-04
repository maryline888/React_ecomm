import PropTypes from 'prop-types'

const Button = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${className}`}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default Button