import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Budget';
import './components/Remaining';
import './components/ExpenseItem';
import './components/ExpenseList';
import './components/ExpenseTotal';
import './components/AllocationForm';

// Add code to import the components
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;