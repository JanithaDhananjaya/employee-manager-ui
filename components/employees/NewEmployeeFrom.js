import {useReducer, useRef} from 'react';
import Alert from '@mui/material/Alert';

import Card from '../ui/Card';
import classes from './NewEmployeeFrom.module.css';
import {useMutation, useQueryClient} from "react-query";
import {addEmployee, getEmployees} from "@/service/EmployeeService";
import {useRouter} from "next/router";
import SimpleReactValidator from "simple-react-validator";


const formReducer = (state, event) => {
    return {
        ...state, [event.target.name]: event.target.value
    }
};

function NewEmployeeFrom(props) {
    const simpleValidator = useRef(new SimpleReactValidator());
    const router = useRouter();
    const queryClient = useQueryClient();
    const [formData, setFormData] = useReducer(formReducer, {});
    const addMutation = useMutation(addEmployee, {
        onSuccess: () => {
            queryClient.prefetchQuery("employees", getEmployees);
            setTimeout(() => {
                router.push('/');
            }, 2000);

        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formData).length == 0) {
            return (<Alert severity="warning">Please fill all the fields.</Alert>);
        }
        let {first_name, last_name, email, number, gender, photo} = formData;
        const model = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            number: number,
            gender: gender,
            photo: photo
        }

        addMutation.mutate(model);
    }

    if (addMutation.isLoading) return <div>Loading!</div>
    if (addMutation.isError) return (<Alert severity="error">{addMutation.error.message}</Alert>);
    if (addMutation.isSuccess) return (<Alert severity="success">Added Successfully</Alert>);

    return (<Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' name='first_name' onChange={setFormData} required
                           onBlur={() => simpleValidator.current.showMessageFor('first_name')}/>
                    {simpleValidator.current.message('first_name', formData.first_name, 'required|alpha|min:6|max:10', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' required name='last_name' onChange={setFormData}
                           onBlur={() => simpleValidator.current.showMessageFor('last_name')}/>
                    {simpleValidator.current.message('last_name', formData.last_name, 'required|alpha|min:6|max:10', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required name='email' onChange={setFormData}
                           onBlur={() => simpleValidator.current.showMessageFor('email')}/>
                    {simpleValidator.current.message('email', formData.email, 'required|email', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='number'>Number</label>
                    <input type='text' required name='number' onChange={setFormData}
                           onBlur={() => simpleValidator.current.showMessageFor('number')}/>
                    {simpleValidator.current.message('number', formData.number, 'required|phone', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='gender'>Gender</label>
                    <select required name='gender' onChange={setFormData}
                            onBlur={() => simpleValidator.current.showMessageFor('gender')}>
                        <option value='M'>M</option>
                        <option value='F'>F</option>
                    </select>
                    {simpleValidator.current.message('gender', formData.first_name, 'required', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='photo'>Photo</label>
                    <input type='url' required name='photo' onChange={setFormData}
                           onBlur={() => simpleValidator.current.showMessageFor('photo')}/>
                    {simpleValidator.current.message('photo', formData.photo, 'required|url', {className: 'text-danger'})}
                </div>
                <div className={classes.actions}>
                    <button>Add</button>
                </div>
            </form>
        </Card>
    );
}

export default NewEmployeeFrom;