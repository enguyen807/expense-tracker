import React from 'react';

import './NewExpense.css';
import '../ExpenseForm/ExpenseForm';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;