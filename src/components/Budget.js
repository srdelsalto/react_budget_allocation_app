import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { dispatch, currency, budget, totalExpenses } = useContext(AppContext);

    const handleSetBudget = (value) => {
        value <= 20000
            ?
            (
                value >= totalExpenses
                    ?
                    dispatch({
                        type: 'SET_BUDGET',
                        payload: value
                    })
                    :
                    alert('Budget ammount cant be lower than amount to spent so far!')
            )
            :
            alert('Budget cant exceed 20000!')
    };

    return (
        <div className="alert alert-secondary">
            <div className="row g-4 align-items-center">
                <div className="col-sm-3">
                    Budget:
                </div>
                <div className="col" style={ {marginLeft: '-0.8rem'}}>
                    {currency}
                    <input
                        className="col col-sm-10"
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '0.2rem' , size: 10 }}
                        step={10}
                        max={20000}
                        onChange={event => handleSetBudget(event.target.value)}
                    >
                    </input>
                </div>
            </div>
        </div>
    );
};

export default Budget;