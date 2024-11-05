import React from 'react'
import "./button.css"


function Button(props) {
    return (
        <button className={`font-Titillium close rounded-md uppercase border-2 ${props.text_color} ${props.textColor} `} >{props.title}</button>
        // <button className='btn'>{props.title}</button>
    )
}

export default Button