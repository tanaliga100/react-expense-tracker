import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [showForm, setShowForm] =  useState(true)

    const showEventHandler = ()=> {
        setShowForm(!showForm)
    }

    const expenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const stopSubmitting = () => {
        setShowForm(!showForm)
      }

    return (
        <div className='new-expense'>
        {!showForm &&
        <button onClick={showEventHandler}>Add New Expense</button>
        }
        {showForm && 
           <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={stopSubmitting}/>
        }
        </div>
    );
}

export default NewExpense;
