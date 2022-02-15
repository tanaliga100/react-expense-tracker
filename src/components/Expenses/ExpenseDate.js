import React from "react";
import "./ExpenseDate.css";

function ExpenseDate({date}) {
  const year = date?.getFullYear()
  const month = date?.toLocaleString("en-US", { month: "long" });
  const day = date?.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date_day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
