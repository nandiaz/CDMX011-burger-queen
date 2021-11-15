import React, { useState } from 'react'

function AddItem(){
    const [count, setCount] = useState(0);

    return (
        <div id="counter"
        style={{display:"flex", flexDirection:"row"}}>
            <button onClick={()=>{setCount(count - 1)}} value="-">-</button>
            <p>{count}</p>
            <button onClick={()=>{setCount(count + 1)}} value="+">+</button>
        </div>
    )
}

export default AddItem