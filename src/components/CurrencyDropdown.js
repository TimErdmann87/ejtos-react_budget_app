import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import "./CurrencyDropdown.css"

const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);
    
    const changeCurrency = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        })
    }

    return (
        <div className='CurrencyDropdown'>
            <span>Currency</span>
            <select onChange={changeCurrency} defaultValue={currency}>
            <option value="$" name="dollar" >$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default CurrencyDropdown;