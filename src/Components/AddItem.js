import React, { useState } from 'react'
import '../Components/Styles/AddItem.css'

function AddItem(props){
    const [count, setCount] = useState(0);
    const [key, setKey] = useState(props.keyI);

    const restItem = () => {
        setCount(count - 1);
        props.sendvalue(count, key)
    }

    const addItem = () => {
        setCount(count + 1);
        props.sendvalue(count, key)
    }


    return (
        <div id="counter">
            <button onClick={restItem} 
                className="btn-amount"
                value="-"
            >-</button>
            <p>{count}</p>
            <button onClick={addItem} 
                className="btn-amount" 
                value="+"
            >+</button>
        </div>
    )
}

export default AddItem