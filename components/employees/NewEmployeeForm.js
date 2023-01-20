import {useReducer} from 'react';
import Alert from '@mui/material/Alert';

import Card from '../ui/Card';
import classes from './NewEmployeeForm.module.css';
import {useMutation, useQueryClient} from "react-query";
import {addEmployee, getEmployees} from "@/service/EmployeeService";
import {useRouter} from "next/router";

const formReducer = (state, event) => {
    return {
        ...state, [event.target.name]: event.target.value
    }
};

function NewEmployeeForm(props) {
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
                    <input type='text' required name='first_name' onChange={setFormData}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' required name='last_name' onChange={setFormData}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required name='email' onChange={setFormData}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='number'>Number</label>
                    <input type='text' required name='number' onChange={setFormData}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='gender'>Gender</label>
                    <select required name='gender' onChange={setFormData}>
                        <option value='M'>M</option>
                        <option value='F'>F</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor='photo'>Photo</label>
                    <input type='url' required name='photo' onChange={setFormData}/>
                </div>
                <div className={classes.actions}>
                    <button>Add</button>
                </div>
            </form>
        </Card>
    );
}

export default NewEmployeeForm;