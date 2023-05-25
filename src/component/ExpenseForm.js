import { useState } from 'react';
import React from 'react';

const Expenseform=()=>{
    const[category,setCategory]=useState('');
    const[location,setLocation]=useState('');
    const[amount,setAmount]=useState('');

    const categoryChange=(event)=>{
        setCategory(event.target.value);

    }

    const loactionChange=(event)=>{
        setLocation(event.target.value);
    }

    const amountcahnge=(event)=>{
       setAmount(event.target.value);
    }

    return (
    <form>
        <div>
            <div>
                <lable>Category</lable>
                <input type='text' onChange={categoryChange}></input>
            </div>
            <div>
                <label>Location</label>
                <input type='text' onChange={loactionChange}></input>
            </div>
            <div>
                <lable>Amount</lable>
                <input type='number' onChange={amountcahnge}></input>
            </div>
            <div>
                <label>Date</label>
                <input type='date' min='2018-01-01' max='2023-01-01'></input>
            </div>
            <button>Submit</button>
        </div>
    </form>

    );

}

export default Expenseform;