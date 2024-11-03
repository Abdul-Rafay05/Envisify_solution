import React from 'react'
import "./button.css"

function Button(props) {
    return (
        <button className="close rounded-md uppercase">{props.title}</button>
        // <button className='btn'>{props.title}</button>
    )
}

export default Button