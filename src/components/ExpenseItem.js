import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FcPlus } from 'react-icons/fc'
import { FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }


    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td align='center'>
                <button className='btn' onClick={event => increaseAllocation(props.name)}>
                    <FcPlus size='1.5em' />
                </button>
            </td>
            <td align='center'>
                <button className='btn' onClick={event => decreaseAllocation(props.name)}>
                    <FaMinusCircle size='1.5em' color='red' />
                </button>
            </td>
            <td>
                <button className='btn' onClick={handleDeleteExpense}>
                    <TiDelete size='1.5em' ></TiDelete>
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;
