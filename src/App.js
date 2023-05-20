import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./component/Expense";

function App() {
  const expense = [
    {
      Category: "Food",
      location: "CanaughtPlace",
      Amount: 10,
      Date: new Date(2023,5,20),
    },
    {
      Category: "Movie",
      location: "PvR",
      Amount: 1000,
      Date: new Date(2023,5,21),
    },
    {
      Category: "Shoping",
      location: "Pantaloons",
      Amount: 10000,
      Date: new Date(2023,5,22),
    },
    {
      Category: "Cab",
      location: "BotanicalGarden",
      Amount: 500,
      Date: new Date(2023,5,23),
    },
  ];
  return (
    <div className="App">
     
        <ExpenseItem
          Category={expense[0].Category}
          location={expense[0].location}
          Amount={expense[0].Amount}
          Date={expense[0].Date}
        ></ExpenseItem>
        <ExpenseItem
          Category={expense[1].Category}
          location={expense[1].location}
          Amount={expense[1].Amount}
          Date={expense[1].Date}
        ></ExpenseItem>
        <ExpenseItem
          Category={expense[2].Category}
          location={expense[2].location}
          Amount={expense[2].Amount}
          Date={expense[2].Date}
        ></ExpenseItem>
        <ExpenseItem
          Category={expense[3].Category}
          location={expense[3].location}
          Amount={expense[3].Amount}
          Date={expense[3].Date}
        ></ExpenseItem>
      
    </div>
  );
}

export default App;
