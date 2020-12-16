import React from 'react'
import ButtonView from './ButtonView'
function AddForm({handleSubmit,handleChange}) {
    return (
        <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange}></input>
        <ButtonView text='Add' />
    </form>

    )
}

export default AddForm
