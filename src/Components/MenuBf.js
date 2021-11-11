import React from 'react';
import Data from '../Data/menu.json'
import './Styles/MenuBf.css';

function MenuBf() {
const breakfast = Data.items.filter(item => item.category === "breakfast")

    return (
        <div className="tabla-menu">
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
                                <td>0</td>
                                <td>$0</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MenuBf