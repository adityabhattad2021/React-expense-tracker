import { useEffect, useState } from "react";
import AddExpense from "./components/AddExpenses/AddExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
	const [expenses, setExpenses] = useState([]);


	function formSubmitHandler() {
		setExpenses(JSON.parse(localStorage.getItem('expenses')))
	}

	useEffect(() => {
		const currentExpenses = JSON.parse(localStorage.getItem('expenses'));
		if (currentExpenses) {
			setExpenses(currentExpenses)
		}
	},[])

	console.log(expenses);

	return (
		<div className="App">
			<AddExpense formSubmitHandler={formSubmitHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
