import './Expense.css';


const ExpenseDetail=(props)=>{

    return(
        <div className='expense-item__description'>
        {/* <expenseDetails Category={props.Category}  location={props.location}   Amount={props.Amount} /> */}
        <h1>{props.Category}</h1>
        <h1>{props.location}</h1>
        
        <div className='expense-item__price '>{props.Amount}</div>
        </div>
    );
  
    
}

export default ExpenseDetail;