import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

  //console.log("-----------",props.items)
   
  const [filteredYear, setFilteredYear] = useState('2020')

  // const [filteredItems, setFilteredItems] = useState(props.items.filter( exp => exp.date.getFullYear().toString() === filteredYear)) ;

  // const filteredChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear)
  //   setFilteredItems( props.items.filter( exp => exp.date.getFullYear().toString() === selectedYear ) );
  // }

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  // let expenseContent = <p>Expense Record not found.</p>

  // if( filteredExpenses.length > 0 ){
  //   expenseContent = filteredExpenses.map( exp => 
  //     <ExpenseItem 
  //       key={exp.id}
  //       title={exp.title} 
  //       amount={exp.amount} 
  //       date={exp.date} 
  //       />
  //    )
  // }

  return (
    <div>

      <Card className="expenses">
        
        <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>

      </Card>
    </div>

  );
}

export default Expenses;