import React, {useState}from "react";
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart  from "./ExpensesChart";

function Expenses(props) {

  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // console.log('Expense.js', selectedYear);
    setFilterYear(selectedYear)
  }
  
  const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filterYear
    })

  return (
    <>
    
    <Card className="expenses">
      <ExpensesFilter onFilter={filterChangeHandler} selected={filterYear}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  </>
  );
}

export default Expenses;
