import React, { useState } from 'react'

const TodoContext = React.createContext()

function TodoProv(props) {

    const [todos, settodos] = useState([])
    return (
    <TodoContext.Provider value={[todos, settodos]}>
        {props.children}
    </TodoContext.Provider>
    )
}

export {TodoProv, TodoContext}
