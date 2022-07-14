import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [toggle, setToggle] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const toggleHandler = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  let formContent = <button onClick={toggleHandler}>Add New Expense</button>;

  if (toggle) {
    formContent = (
      <ExpenseForm
        onChangeToggle={toggleHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{formContent}</div>;
}

export default NewExpense;
