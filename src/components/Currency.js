import React, { useContext, useState } from 'react'
import { AppContext } from "../context/AppContext";
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    //Adding all currencies list
    const currencies = [
        { symbol: '$', text: 'Dollar' },
        { symbol: '£', text: 'Pound' },
        { symbol: '€', text: 'Euro' },
        { symbol: '₹', text: 'Rupee' },
    ];

    //Selecting the default currency taken on Context
    const [actualCurrency, setActualCurrency] = useState(currencies.find(element => element.symbol === currency));

    //Function to handle the currency change
    const handleCurrencyChange = (value) => {
        let newCurrencie = currencies.find(element => element.symbol === value)

        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });

        setActualCurrency(newCurrencie);
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            {`Currency (${actualCurrency.symbol} ${actualCurrency.text})`}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {currencies.map((currencyItem) => {
                    return (
                        <Dropdown.Item key={currencyItem.symbol} value={currencyItem.symbol} onClick={() => handleCurrencyChange(currencyItem.symbol) }>{currencyItem.symbol} {currencyItem.text}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Currency;
