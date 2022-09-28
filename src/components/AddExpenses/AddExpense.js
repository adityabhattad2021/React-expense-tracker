import { useState } from "react";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

function AddExpense({formSubmitHandler}) {
    const [showForm, setShowForm] = useState(false);
    
    function addExpensesHandler() {
        setShowForm(true)
    }

	if (showForm) {
		return (
			<div className="new-expense">
                <ExpenseForm changeFormState={setShowForm} formSubmitHandlerFromApp={ formSubmitHandler } />
			</div>
		);
    } else {
        return (
            <div className="new-expense">
                <button onClick={addExpensesHandler} type="submit" >Click to add an expense</button>
            </div>
       ) 
	}
}

export default AddExpense;
