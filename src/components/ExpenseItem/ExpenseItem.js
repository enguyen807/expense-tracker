import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>August 01, 2023</div>
      <div className="expense-item__description">
        <h2>Books</h2>
        <div className="expense-item__price">$36.99</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
