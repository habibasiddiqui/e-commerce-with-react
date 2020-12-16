import React from 'react'
import Todos from '../components/Todos'

export default {
    title: 'List',
    component: Todos
}
export const emptyList = () => <Todos todolist={[]} />
export const defaultList = () => <Todos todolist={[{title:'buy milk', id: 1},{title:'prepare tea', id: 2}]} />
export const fullList = () => <Todos todolist={[{title:'buy milk', id: 1},{title:'prepare tea', id: 2},{title:'new task', id:3},{title:'last task', id:4}]} />