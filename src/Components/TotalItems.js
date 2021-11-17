import React from 'react';

function TotalItems(props){
    const price = props.price * props.cost
    return (
        <p>$ {price}</p>
    )

}

export default TotalItems