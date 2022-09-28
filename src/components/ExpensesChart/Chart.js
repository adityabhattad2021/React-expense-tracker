import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({totalExpense,dataSet}) {

	return (
		<div className="chart">
			{dataSet.map((data) => {
				return <ChartBar key={data.label} month={data} totalExpense={totalExpense} />;
			})}
		</div>
	);
}

export default Chart;
