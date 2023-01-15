import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './EditEmployee.module.css';

function EditEmployee(props){

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const genderInputRef = useRef();
    const photoInputRef = useRef();
    const numberInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredGender = genderInputRef.current.value;
        const enteredPhoto = photoInputRef.current.value;
        const enteredNumber = numberInputRef.current.value;

        const employeeData = {
            first_name: enteredFirstName,
            last_name: enteredLastName,
            email: enteredEmail,
            number: enteredNumber,
            gender: enteredGender,
            photo: enteredPhoto
        };

        props.onSaveEmployee(employeeData);
    }

    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' required id='first_name' ref={firstNameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' required id='last_name' ref={lastNameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required id='email' ref={emailInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='number'>Number</label>
                    <input type='text' required id='number' ref={numberInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='gender'>Gender</label>
                    <input type='text' required id='gender' ref={genderInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='photo'>Photo</label>
                    <input type='url' required id='photo' ref={photoInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Save</button>
                </div>
            </form>
        </Card>
    );
}

export default EditEmployee;