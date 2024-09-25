import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({ todos ,handleDelete,handleEdit}) => {
    return (
        <ul className='todo-list'>
            {
                todos.map((t) => (
                    <li className='Todo'>
                        <span className='todoText'  key={t._id}>{t.todo}</span>
                        <button onClick={()=>{handleEdit(t._id)}}><FontAwesomeIcon className="edit-icon" icon={faPenToSquare} /></button>
                        <button onClick={()=>handleDelete(t._id)}>  <FontAwesomeIcon className="delete-icon" icon={faTrash} /></button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList