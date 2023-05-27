import {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{

   const[enteredTitle,setEnetredTitle]=useState('');
   const[enteredAmount,setEnteredAmount]=useState('');
   const[enterDate,setEnterDate]=useState('');

   const titleChangeHandeler=(event)=>{
      setEnetredTitle(event.target.value);

   }

   const amountChangeHandeler=(event)=>{
      setEnteredAmount(event.target.value);
   }
   
   const dateChangehandler=(event)=>{
      setEnterDate(event.target.value);
   }

   const submitHandeler=(event)=>{
      event.preventDefault();
      // props.save

      const ExpenseData={
         title:enteredTitle,
         amount:enteredAmount,
         date: new Date(enterDate)
      }

      //console.log(ExpenseData);
      props.onSaveExpenseData(ExpenseData);
      setEnetredTitle('');
      setEnteredAmount('');
      setEnterDate('');

   }
    return(
        <form onSubmit={submitHandeler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control lable'>
        <lable>Title</lable>
        <input type='text' value={enteredTitle} onChange={titleChangeHandeler}></input>
         </div>
         <div className='new-expense__control lable'>
            <label>Amount</label>
            <input type='number' value={enteredAmount} onChange={amountChangeHandeler}></input>
         </div>
         <div className='new-expense__control lable'>
            <lable>Date</lable>
            <input type='date' min="2022-01-01" max="2023-01-01" value={enterDate} onChange={dateChangehandler}></input>
         </div>

         <div className='new-expense__actions '>
            <button type='submit'>Add Expenses</button>
         </div>


        </div>
        </form>
    )

}
export default ExpenseForm;