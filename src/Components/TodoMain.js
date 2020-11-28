import React, {useContext} from 'react'
import UpdateTodo from './UpdateTodo'
import { DragDropContext } from 'react-beautiful-dnd'
import TodoContainer from './TodoContainer'
import { TodoContext } from '../Context/TodoProv'


function TodoMain() {

  const [todos, settodos] = useContext(TodoContext)
 
  const dragEndEvent = (result) => {
   const { destination, source} = result
   if(!destination)
          return;
    
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
    {
      return;
    }
        const newtodos = Array.from(todos)
         const temp = newtodos[source.index]
         newtodos.splice(source.index, 1)
         newtodos.splice(destination.index, 0 , temp )


         settodos(newtodos)
  }

    return (
      <div className='container'>
          <div className='jumbotron mt-2 mx-auto' style={{backgroundColor: '#2F363F', color: 'white'}}>
    <h5 className="display-4">Welcome {localStorage.getItem('MytodotaskUser').toString()}</h5>
           <hr />
    <p className="lead">you have {todos.length} todos left in {localStorage.getItem('Mytodotask').toString()}</p>
          </div>

           <h4>{localStorage.getItem('Mytodotask').toString()}</h4>
          <div className='jumbotron mt-2 mx-auto' style={{backgroundColor: '#F8F8FF', overflowY: 'auto'}}>
           <DragDropContext onDragEnd={dragEndEvent}>
           <TodoContainer/>
           </DragDropContext>
           <hr />
           <UpdateTodo />
          </div>

      </div>
    )
}

export default TodoMain
