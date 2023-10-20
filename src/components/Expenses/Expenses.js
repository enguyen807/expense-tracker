import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../Card/Card';

function Expenses({ items }) {
    return (
        <Card className="expenses">
            {
                items.map((item) => (
                    <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
                ))
            }
        </Card>
    )
}

export default Expenses;