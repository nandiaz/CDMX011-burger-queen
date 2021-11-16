import React, {useState} from 'react';
import Data from '../Data/menu.json'
import './Styles/MenuBf.css';
import AddItem from './AddItem';
import TotalItems from './TotalItems';

function MenuBf() {
const breakfast = Data.items.filter(item => item.category === "breakfast")
const [cost, setCost] = useState(0)
const [keyItem, setKeyItem] = useState(0)

const catchvalue = (e, k) => {
    console.log(e)
    setCost(e)
    setKeyItem(k)

}

    return (
            <table className="menu-bf">
                <thead>
                    <tr>
                        <th>Platillo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {breakfast.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <AddItem 
                                    //propiedad = {funcion, string, booleano, etc}
                                       sendvalue={catchvalue}
                                       keyI={i}
                                    />
                                </td>
                                <td>
                                       <TotalItems
                                           price={item.price}
                                           cost={cost}
                                       />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    )
}

export default MenuBf