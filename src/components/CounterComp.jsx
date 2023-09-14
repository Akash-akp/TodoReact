import React, {useState , useEffect} from 'react'

const CounterComp = () =>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("Count get updated",count);
        return () => {
            console.log("Returning count",count);
        }
    },[count]);
    return (
        <div>
            <p>Count Component - {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Increment</button> 
            <button onClick={()=>{setCount(count-1)}}>Decrement</button> 
        </div>
    );
}

export default CounterComp;
