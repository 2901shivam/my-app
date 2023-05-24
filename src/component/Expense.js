import {useState} from 'react';
import "./Expense.css";
import ExpenseDetail from "./ExpenseDetail";
import Expenseform from './ExpenseForm';
const ExpenseItem=(props)=> {
  const[category,setCategory]=useState(props.Category);

  const month = props.Date.toLocaleString("en-US", { month: "long" });

  const day = props.Date.toLocaleString("en-US", { day: "2-digit" });

  const year = props.Date.getFullYear();

  //  const expenseDetails=props.expenseDetails.toLocaleString('en-US',{Category},{location},{Amount});

  

  const clickhandeler=()=>{
    setCategory("fun");
    console.log(category);
  }

  return (
   
    <div className="expense-item ">
    
     
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <>
        
        <ExpenseDetail
          Category={category}
          location={props.location}
          Amount={props.Amount}
        />
      </>
      <button onClick={clickhandeler}>Delete Expense</button>
    </div>
    
  );
}
export default ExpenseItem;
