import React, {useContext} from 'react'
import { TodoContext } from '../Context/TodoProv'
import SideTodoItem from './SideTodoItem'

function SideTodoItemContainer() {
    const [todos, settodos] = useContext(TodoContext)
    
    return (
       <React.Fragment>
        {todos && todos.map((todo) => {
           return <SideTodoItem key={todo.id} id={todo.id} todo={todo.text} />
        })}
       </React.Fragment>
    )
}

export default SideTodoItemContainer
