import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../Card/Card';

function Expenses({ item }) {
    return (
        <Card className="expenses">
            <ExpenseItem title={item[0].title} amount={item[0].amount} date={item[0].date}/>
        </Card>
    )
}

export default Expenses;