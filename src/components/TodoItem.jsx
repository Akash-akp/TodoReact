import React from 'react';

const TodoItem = (props) => {
    return (
        <li className='todo-item'>
            <span>
                {props.completed ? <></> : <input type="checkbox" />}
                <span>{props.task}</span>
            </span>
            <p>...</p>
        </li>
    );
}

export default TodoItem;