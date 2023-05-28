import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandeler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredexpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  let exxpenseContent=<p>No expense found</p>

  if(filteredexpense.length>0){
    exxpenseContent=filteredexpense.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })}

  


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandeler}
      />
      {exxpenseContent}
     
    
    </Card>
  );
}


export default Expenses;
