import { useEffect } from "react";
import Chart from "./Chart";

function ExpensesChart({ filteredExpenses }) {
	const dataSet = [
		{ label: "Jaunary", value: 0 },
		{ label: "February", value: 0 },
		{ label: "March", value: 0 },
		{ label: "April", value: 0 },
		{ label: "May", value: 0 },
		{ label: "June", value: 0 },
		{ label: "July", value: 0 },
		{ label: "August", value: 0 },
		{ label: "September", value: 0 },
		{ label: "October", value: 0 },
		{ label: "November", value: 0 },
		{ label: "December", value: 0 },
	];

	for (let exp of filteredExpenses) {
		const expenseMonth = new Date(exp.date).getMonth();
		// console.log(exp.date);
		dataSet[expenseMonth].value += parseInt(exp.amount);
	}

	const filteredExpensesAmt = filteredExpenses.map((exp) => exp.amount);
	const filteredExpensesAmtNum = filteredExpensesAmt.map((exp) =>
		parseInt(exp)
	);

	let totalExpense;
	if (filteredExpensesAmtNum.length > 0) {
		totalExpense = filteredExpensesAmtNum.reduce(
			(total, num) => total + num
		);
	} else {
		totalExpense = 0;
	}

	// console.log(totalExpense);

	return (
		<div>
			<Chart totalExpense={totalExpense} dataSet={dataSet} />
		</div>
	);
}

export default ExpensesChart;
