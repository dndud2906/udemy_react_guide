import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import ExpenseList from "./ExpenseList";

function Expenses({ expenses }) {
  const [filteredDate, setFilteredDate] = useState("2020");

  const saveFilterDateHandler = (filteredDate) => {
    setFilteredDate(filteredDate);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredDate;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredDate}
        onSaveFilterDate={saveFilterDateHandler}
      />
      <ExpenseList item={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
