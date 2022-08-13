import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/Button.scss'

const Button = ({
    color,
    size,
    disabled,
    onClick,
    onMouseEnter,
    onMouseLeave,
    innerText
}) => {
    return (
        <button
            className={`btn btn-${color} btn-${size}`}
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {innerText}
        </button>
    )
}

Button.defaultProps = {
    size: 'small',
    color: '',
    innerText: '',
}

Button.propTypes = {
    size: PropTypes.oneOf(['xLarge', 'large', 'medium', 'small']),
    color: PropTypes.oneOf(['primary', 'success', 'danger']),
    disabled: PropTypes.bool,
    innerText: PropTypes.string
}

export default Button