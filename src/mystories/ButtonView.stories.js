import React from 'react'
import ButtonView from '../components/ButtonView'
export default {
    title:'My buttons',
    component:ButtonView
}
export const AddButton1 = () => <ButtonView text='Add'  />
export const AddButton2 = () => <ButtonView text='Submit' />
export const AddButton3 = () => <ButtonView text='Add To Do' />