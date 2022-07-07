import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ title, amount, date }) {
  const [ctitle, setCtitle] = useState(title);

  const clickHandler = () => {
    setCtitle('update!!');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{ctitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>change title!!</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
