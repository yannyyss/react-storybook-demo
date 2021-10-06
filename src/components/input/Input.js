import React from 'react'
import './Input.css'

const Input = ({size='medium', placeholder}) => {
    return (
        <input className={`input ${size}`} placeholder={placeholder}/>
    )
}

export default Input
