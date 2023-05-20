import './Expense.css';

function ExpenseItem(props) {

  
  return (
    <div className='expense-item '>
      <div>
        <h2>{props.Date.toISOString()}</h2>
      </div>
      <div className='expense-item__description'>
        <h1>{props.Category}</h1>
        <h1>{props.location}</h1>
      <div className='expense-item__price '>{props.Amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
