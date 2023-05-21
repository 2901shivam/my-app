import "./Expense.css";
import ExpenseDetail from "./ExpenseDetail";
const ExpenseItem=(props)=> {
  const month = props.Date.toLocaleString("en-US", { month: "long" });

  const day = props.Date.toLocaleString("en-US", { day: "2-digit" });

  const year = props.Date.getFullYear();

  //  const expenseDetails=props.expenseDetails.toLocaleString('en-US',{Category},{location},{Amount});

  return (
    <div className="expense-item ">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <>
        
        <ExpenseDetail
          Category={props.Category}
          location={props.location}
          Amount={props.Amount}
        />
      </>
    </div>
  );
}
export default ExpenseItem;
