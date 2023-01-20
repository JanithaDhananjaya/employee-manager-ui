import {Schema, models, model} from 'mongoose';

const employeeSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    number: String,
    gender: String,
    photo: String
});

const Employees = models.employees || model('employees', employeeSchema);
export default Employees;
