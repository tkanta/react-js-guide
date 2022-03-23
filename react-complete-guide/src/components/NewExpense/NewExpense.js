import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseHandler = (savedExpense) => {

        const expense = {
            ...savedExpense,
            id: Math.random().toString()
        }

        //console.log(' ------ ', expense)
        props.onAddExpense(expense)
        setIsEditing(false)
    }

    const isEditingHandler = () => {
        setIsEditing(true)
    }

    const cancelEditingHandler = () => {
        setIsEditing(false)
    }
    //--------- JSX -------------
    return (
        <div className="new-expense">
            { !isEditing && <button onClick={isEditingHandler}>Add New Expense</button> }
            { isEditing && <ExpenseForm onSaveExpenseHanndler={saveExpenseHandler} onCancel={cancelEditingHandler} /> }
        </div>
    )
}

export default NewExpense
