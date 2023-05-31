import react, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpenses=(props)=>{

    const[iseditind,setIsediting]=useState(false)

    const saveExpenseHandler=(enterExpenseData)=>{

        const expenseData={
        ...enterExpenseData,
        id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    const starthandeling=()=>{
        setIsediting(true);
    }
    const stopHandeling=()=>{
        setIsediting(false);
    }
    return(
        <div className='new-expense'>
       {!iseditind && <button onClick={starthandeling}>Add New Expense</button>}
       { iseditind && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopHandeling}/>}
        </div>
     
    );
}

export default NewExpenses;