import React, {useState, useContext} from 'react'
import { TextField } from '@material-ui/core'
import { TodoContext } from '../Context/TodoProv'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';



function UpdateTodo() {

const [todos, settodos] = useContext(TodoContext)    
const [todo, Settodo] = useState('')

    const updatetodo = (e) => {
        if(todo === '')
                return null
        e.preventDefault()
        const todoitem = { 
            id: uuidv4(),
            text: todo, 
        }
        settodos([...todos, todoitem])
        Settodo('')
    }

    return (
        <div className="clear-fix" style={{display: 'flex', flexDirection: "row", alignItems:"center"}}>
        <div style={{width: '80%'}}>
            <form onSubmit={updatetodo}>
             <TextField 
               variant="filled"
                placeholder="add new todo"
                fullWidth
                size="small"
                value={todo}
                onChange={(e) => {Settodo(e.target.value)}}
               />
               </form>
             </div> 
             <div className='ml-3' style={{cursor: 'pointer'}}>
              <IconButton disabled={todo === '' ? true:false} color='primary'>
             <SendIcon fontSize='large'  onClick={updatetodo}/>
             </IconButton>
             </div>
    </div> 
    )
}

export default UpdateTodo
