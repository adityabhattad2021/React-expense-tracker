import "./ChartBar.css"

function ChartBar({ month, totalExpense }) {
    
    let percentExpense; 
    if (month.value>0) {
        percentExpense=Math.round((parseInt(month.value)/parseInt(totalExpense)*100))
    } else {
        percentExpense=0
    }
    
    // console.log(`expense for ${month.label} is ${month.value}`);

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{'height':`${percentExpense}%`}}></div>
            </div>
            <div className="chart-bar__label">
                {month.label.slice(0,3)}
            </div>
        </div>
    )
}


export default ChartBar;