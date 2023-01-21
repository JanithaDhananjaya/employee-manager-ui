import {useReducer, useRef} from 'react';

import Card from '../ui/Card';
import classes from './EditEmployee.module.css';
import {useRouter} from "next/router";
import {useMutation, useQueryClient} from "react-query";
import {getEmployees, updateEmployee} from "@/service/EmployeeService";
import Alert from "@mui/material/Alert";
import SimpleReactValidator from "simple-react-validator";

const formReducer = (state, event) => {
    return {
        ...state, [event.target.name]: event.target.value
    }
};

function EditEmployee(props) {
    const simpleValidator = useRef(new SimpleReactValidator());
    const router = useRouter();
    const queryClient = useQueryClient();
    const [formData, setFormData] = useReducer(formReducer, {});
    const updateMutation = useMutation(() => updateEmployee(props.employeedata.id, formData), {
        onSuccess: async (data) => {
            queryClient.prefetchQuery("employees", getEmployees);
            setTimeout(() => {
                router.push('/');
            }, 2000);

        }
    });

    async function submitHandler(event) {
        event.preventDefault();
        let updatedData = Object.assign({}, props.employeedata, formData);

        await updateMutation.mutate(updatedData);
    }

    if (updateMutation.isLoading) return <div>Loading!</div>
    if (updateMutation.isError) return (<Alert severity="error">{updateMutation.error.message}</Alert>);
    if (updateMutation.isSuccess) return (<Alert severity="success">Updated Successfully</Alert>);

    return (<Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control} hidden>
                    <label htmlFor='id'>Id</label>
                    <input type='text' required name='id' defaultValue={props.employeedata.id}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' required name='first_name'
                           defaultValue={props.employeedata.first_name} onChange={setFormData}
                           onBlur={() => simpleValidator.current.showMessageFor('first_name')}></input>
                    {simpleValidator.current.message('first_name', formData.first_name, 'required|alpha|min:6|max:10', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' required name='last_name'
                           defaultValue={props.employeedata.last_name} onChange={setFormData}
                           onBlur={() => simpleValidator.current.showMessageFor('last_name')}/>
                    {simpleValidator.current.message('last_name', formData.last_name, 'required|alpha|min:6|max:10', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required name='email'
                           defaultValue={props.employeedata.email} onChange={setFormData}
                           onBlur={() => simpleValidator.current.showMessageFor('email')}/>
                    {simpleValidator.current.message('email', formData.email, 'required|email', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='number'>Number</label>
                    <input type='text' required name='number'
                           defaultValue={props.employeedata.number} onChange={setFormData}
                           onBlur={() => simpleValidator.current.showMessageFor('number')}/>
                    {simpleValidator.current.message('number', formData.number, 'required|phone', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='gender'>Gender</label>
                    <select required name='gender' onChange={setFormData}
                            onBlur={() => simpleValidator.current.showMessageFor('first_name')}>
                        <option value='M'>M</option>
                        <option value='F'>F</option>
                    </select>
                    {simpleValidator.current.message('gender', formData.gender, 'required', {className: 'text-danger'})}
                </div>
                <div className={classes.control}>
                    <label htmlFor='photo'>Photo</label>
                    <input type='url' required name='photo'
                           defaultValue={props.employeedata.photo} onChange={setFormData}
                           onBlur={() => simpleValidator.current.showMessageFor('photo')}/>
                    {simpleValidator.current.message('photo', formData.photo, 'required|url', {className: 'text-danger'})}
                </div>
                <div className={classes.actions}>
                    <button>Save</button>
                </div>
            </form>
        </Card>
    );
}

export default EditEmployee;