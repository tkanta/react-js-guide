import './ExpenseForm.css'
import {useState} from 'react'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    
    const changeTitleHandler = (event) => {
        setTitle(event.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, title: event.target.value}
        // })
    } 

    const changeAmountHandler = (event) => {
        setAmount(event.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, amount: event.target.value}
        // })
    } 

    const changeDateHandler = (event) => {
        setDate(event.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, date: event.target.value}
        // })
    } 

    const submitHandler = (event) => {
        event.preventDefault()
        //console.log("user data")
        const userData = {
            title: title,
            amount: parseInt(amount),
            date: new Date(date)
        }
        //console.log(userData)
        props.onSaveExpenseHanndler(userData)
        setTitle('')
        setAmount('')
        setDate('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={changeTitleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={changeAmountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={changeDateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm