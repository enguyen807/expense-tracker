import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../BaseCard/BaseCard';

function Expenses({ items }) {
    return (
        <Card className="expenses">
            {
                items.map((item) => (
                    <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
                ))
            }
        </Card>
    )
}

export default Expenses;