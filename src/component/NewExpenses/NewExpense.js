import react from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpenses=(props)=>{

    const saveExpenseHandler=(enterExpenseData)=>{

        const expenseData={
        ...enterExpenseData,
        id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);

    }
    return(
        <div className='new-expense'>
         <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
        </div>
     
    );
}

export default NewExpenses;