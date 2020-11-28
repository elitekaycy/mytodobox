import React, {useContext} from 'react'
import { TodoContext } from '../Context/TodoProv'
import { Droppable } from 'react-beautiful-dnd'
import TodoItem from './TodoItem'

function TodoContainer() {
    const [todos, settodos ] = useContext(TodoContext)
    return (
   <Droppable droppableId="droppable-1">
    {(provided) => (
       
      <div ref={provided.innerRef} {...provided.droppableProps}  >
      {todos && todos.map((todo, index) => <TodoItem key={todo.id} value={todo.text} index={index} id={todo.id}  />)}
      {provided.placeholder} 
      </div>
    )}
    </Droppable>
    )
}

export default TodoContainer
