import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const upperBudgetLimit = 20000

    const handleBudgetChange = (event) => {
        const newBudget = event.target.value

        if (newBudget > upperBudgetLimit){
            alert(`The budget cannot exceed ${currency}`+upperBudgetLimit);
        } else if (newBudget < totalExpenses){
            alert(`The budget cannot be reduced below the spending of currently ${currency}`+totalExpenses);
        } else {
            setNewBudget(newBudget);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
