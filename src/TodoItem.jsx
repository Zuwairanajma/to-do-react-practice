// import React from 'react';
import PropTypes from 'prop-types';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li> 
        <label>
        <input type="checkbox" checked ={completed}
        onChange={e => toggleTodo(id, e.target.checked)}/>
        {title}
        </label>
        <button onClick={() => deleteTodo(id)} className='btn btn-danger'>Delete</button>
      </li>   
    )
}

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };