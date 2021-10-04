import React from 'react'
import './Button.css'

const Button = ({variant= 'primary',children, ...OtherProps}) => {
    return (
        <button className={`button ${variant}`} {...OtherProps}>
            {children}
        </button>
    )
}

export default Button
