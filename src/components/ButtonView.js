import React from 'react'
import '../App.css'
function ButtonView({text}) {
    return (
            <button className='mybtn' type='submit'>{text}</button>
    )
}

export default ButtonView
