import React , { useState } from 'react'

const Head = (props) =>{
    const [count,SetCount] = useState(0);
    return (
    <h1 className='todo-header'>
        {props.title} <span>({count})</span>
    </h1>
    );
}

export default Head;