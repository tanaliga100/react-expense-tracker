import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    
    const [showForm, setShowForm] = useState(true)

    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount]  = useState('')
    const [enterDate, setEnterDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // })

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enterTitle:  event.target.value,
        // })
        // setUserInput((prevState)=> {
        //     return {...prevState, enterTitle:  event.target.value}
        // })
        setEnterTitle(event.target.value)
        // console.log(enterTitle);
        
    }
    
    const amountChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enterAmount: e.target.value
        // })
        setEnterAmount( e.target.value)
        // console.log(enterAmount);
    }
    const dateChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enterDate: e.target.value
        // })
        setEnterDate(e.target.value)

        console.log(enterDate);
    }

    const submitHandler = (e) => {       
        e.preventDefault()
        const expenseData = {
            title: enterTitle.toUpperCase(),
            amount: +enterAmount.toUpperCase(),
            date: new Date(enterDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnterTitle('')
        setEnterAmount('')
        setEnterDate('')
    }

    const showFormHandler = () => {
        setShowForm(!showForm)
    }

    return (
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input  type="text" name="" id="" value={enterTitle} onChange={titleChangeHandler} required />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" name="" id="" min='0.01' step='0.01' value={enterAmount} onChange={amountChangeHandler} required/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" name="" id="" min='2021-01-01' max='2022-12-31' value={enterDate} onChange={dateChangeHandler} />
            </div>
        </div> 
        
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}> Cancel</button>
            <button type='submit' onClick={showFormHandler}> Add Expense</button>
        </div>
        </form>
        
);
}

export default ExpenseForm;
