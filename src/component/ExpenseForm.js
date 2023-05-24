import React from 'react';

const Expenseform=()=>{

    const categoryChange=(event)=>{
        console.log(event.target.value);

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
                <input type='text'></input>
            </div>
            <div>
                <lable>Amount</lable>
                <input type='number'></input>
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