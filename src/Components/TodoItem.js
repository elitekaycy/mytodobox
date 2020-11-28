import React, {useContext, useState} from 'react'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { TodoContext } from '../Context/TodoProv';
import DoneIcon from '@material-ui/icons/Done';
import { Draggable } from 'react-beautiful-dnd'
import { motion } from 'framer-motion'

function TodoItem(prop) {
      const [todos, settodos] = useContext(TodoContext)
       const [checked, setchecked] = useState(false)

      const deleteTodo = (e, id) => {
          e.preventDefault()
           const newdata = todos.filter((v) => v.id !== id)
           settodos(newdata)
      }

      const donetodo = (e, id) => {
          e.preventDefault()
          setchecked(!checked)
      }
    return (
    <Draggable draggableId={prop.id} index={prop.index}>
      {(provided,snapshot) => (
          <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >
            <motion.div 
            animate={{ backgroundColor: checked ?'#2F363F':'#D3D3D3'}}
            className={`alert`}
            style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                color: checked ? 'white' : 'black',
              
                textDecoration: checked ? 'line-through': 'none',
                opacity: 1,
                }}
            >{prop.value}
            <span>
            <IconButton color="default">
                <DoneIcon style={{color: checked ? 'green':'black'}} onClick={(e) => {donetodo(e, prop.id)}}/>
                </IconButton>
                <IconButton color="default">
                    <DeleteIcon style={{ color: checked ? 'white':'black' }} onClick={(e) => {deleteTodo(e,prop.id)}} />
                </IconButton>
            </span>
            </motion.div>
            </div>
      )}
  
    </Draggable>
    )
}

export default TodoItem
