import React from 'react'
import "./button.css"

function Button(props) {
    return (
        <button className="close rounded-md uppercase border-2">{props.title}</button>
        // <button className='btn'>{props.title}</button>
    )
}

export default Button