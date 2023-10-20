import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const formatDate = (value) => {
        if (value) {
            return new Date(value).toISOString().substring(0,10);
        } else {
            return new Date().toISOString().substring(0,10);
        }
    }

    const defaultState = Object.freeze({
        title: '',
        amount: 0,
        date: formatDate()
    });


    const [newExpense, setNewExpense] = useState(defaultState);

    const returnCorrectType = (type, value) => {
        if (type === 'number') return +value;
        if (type === 'date') return formatDate(value);
        return value;
    }

    const expenseChangeHandler = (field, { target: { value, type } }) => {
        // Risky way: State updates are scheduled in React, you could be using old state data
        // setNewExpense({ ...newExpense, [name]: returnCorrectType(type, value)})

        // Safer way: Will always use latest state data if state depends on prev state
        setNewExpense((prevState) => ({ ...prevState, [field]: returnCorrectType(type, value)}))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(newExpense);

        setNewExpense(defaultState);

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input name="title" type="text" value={newExpense.title} onChange={(e) => expenseChangeHandler('title', e)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input name="amount" type="number" value={newExpense.amount} min="0.01" step="0.01" onChange={(e) => expenseChangeHandler('amount', e)}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input name="date" type="date" value={newExpense.date} min="2019-01-01" max="2023-12-31" onChange={(e) => expenseChangeHandler('date', e)}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;