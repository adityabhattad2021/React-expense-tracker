import { useEffect, useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
	const currentYear = new Date().getFullYear();
	const [filterYear, setFilterYear] = useState(currentYear);
	const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

	useEffect(() => {
		if (props.expenses.length > 0) {
			console.log("Some thing just got changed!");
			setFilteredExpenses(
				props.expenses.filter((expense) => {
					return (
						new Date(expense.date).getFullYear().toString() ===
						filterYear.toString()
					);
				})
			);

		}
		console.log(`Apply filter for year ${filterYear}`);
	}, [filterYear, props.expenses]);

	let displayContent = <p className="no-expense__text">No Expenses Found.</p>;
	if (filteredExpenses.length > 0) {
		displayContent = filteredExpenses;
	}

	return (
		<Card className="expenses">
			<ExpensesFilter
				filteredYear={filterYear}
				onFilterApplied={setFilterYear}
			/>
			<ExpensesChart filteredExpenses={filteredExpenses} />
			{filteredExpenses.length > 0
				? displayContent.map((expense) => {
						return (
							<ExpenseItem
								key={expense.id}
								title={expense.title}
								amount={expense.amount}
								date={expense.date}
							/>
						);
				  })
				: displayContent}
		</Card>
	);
}

export default Expenses;
