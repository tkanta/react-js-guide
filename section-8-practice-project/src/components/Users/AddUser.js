import React, {useState, Fragment} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error, setError] = useState()

    const userNameHandler = (event) => {
        setUserName(event.target.value)
    }

    const userAgeHandler = (event) => {
        setUserAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        
        if(userName.trim().length === 0 && userAge.trim().length === 0){
            setError({ title: 'Invalid Input', message: 'Please enter valid name and age (non-empty values)'})
            return;
        }
        if(+userAge < 1){
            setError({ title: 'Invalid Input', message: 'Please enter valid age (> 1 )'})
            return;
        }
        //console.log(userName, userAge)
        props.addUserList(userName, userAge)
        setUserName('')
        setUserAge('')

    }

    const errorHandler = () => {
        setError(null)
    }
    
    return (
       <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={classes.input}> 
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id='username' value={userName}  type="text" onChange={userNameHandler}/>
                    <label htmlFor="age">Age (years)</label>
                    <input id='age'  type="number" value={userAge} onChange={userAgeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
       </Fragment> 
       
        );
};

export default AddUser;