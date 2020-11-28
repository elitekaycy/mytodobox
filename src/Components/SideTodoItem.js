import React, {useContext} from 'react'
import Chip from '@material-ui/core/Chip';
import { TodoContext } from '../Context/TodoProv';


function SideTodoItem(prop) {

    const [todos, settodos] = useContext(TodoContext)

    const handleDelete = (e, id) => {
        e.preventDefault()
        const newdata = todos.filter((v) => v.id !== id)
        settodos(newdata)
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', padding: 10}}>
        <Chip label={prop.todo} onDelete={(e) => {handleDelete(e, prop.id)}} color="primary" />
        </div>
    )
}

export default SideTodoItem
