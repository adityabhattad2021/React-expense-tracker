import { useState } from "react";
import "./ExpenseForm.css";


function ExpenseForm({changeFormState,formSubmitHandlerFromApp}) {

    // const [expenseCounter, setExpenseCounter] = useState(5);
    const [expense, setExpense] = useState({
        newTitle: '',
        newAmount: '',
        newDate:''
    });


    function changeHandler(event) {
        // console.log(event);
        setExpense(previousExpence => ({ ...previousExpence, [event.target.name]: event.target.value }))
        console.log(expense);
    }

    function formSubmitHandler(event) {
        event.preventDefault()

        const expenseData = {
            id:Math.random(),
            title: expense.newTitle,
            amount: expense.newAmount,
            date:new Date(expense.newDate)
        }

        let expenses = JSON.parse(localStorage.getItem('expenses'))
        if (expenses) {
            expenses.push(expenseData)
            localStorage.setItem('expenses',JSON.stringify(expenses))
        } else {
            localStorage.setItem('expenses',JSON.stringify([expenseData]))
        }

        console.log("Expense Added!");
        formSubmitHandlerFromApp()

        changeFormState(false)

        setExpense({
            newTitle: '',
            newAmount: '',
            newDate:''
        })
    }

    function cancelClickHandler() {

        // Hides the form.
        changeFormState(false)
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={changeHandler} name='newTitle'  value={expense.newTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={changeHandler} name='newAmount' value={expense.newAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2022-12-31" onChange={changeHandler} name='newDate' value={expense.newDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelClickHandler} type="button" >Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}


export default ExpenseForm;