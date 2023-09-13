import React, {useState} from 'react'

const CounterComp = () =>{
    const [count,setCount] = useState(12);
    console.log(count);
    return (
        <div>
            <p>Count Component -> {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Increment</button> 
        </div>
    );
}

export default CounterComp;
