import {MongoClient, ObjectId} from 'mongodb';

import EditEmployee from "@/components/employees/EditEmployee";

function DefaultEmployee(props) {
    function saveEmployee(data) {
        console.log(data)
    }

    return (
        <EditEmployee employeedata={props.employeeData} onSaveEmployee={saveEmployee}/>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://admin:123@cluster0.ckdacq0.mongodb.net/employeeManager?retryWrites=true&w=majority');
    const db = client.db();

    const employeeCollection = db.collection('employees');

    const employees = await employeeCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false,
        paths: employees.map((employee) => ({
            params: {employeeId: employee._id.toString()},
        })),
    };
}

export async function getStaticProps(context) {
    const employeeId = context.params.employeeId;

    const client = await MongoClient.connect('mongodb+srv://admin:123@cluster0.ckdacq0.mongodb.net/employeeManager?retryWrites=true&w=majority');
    const db = client.db();

    const employeeCollection = db.collection('employees');

    const selectedEmployee = await employeeCollection.findOne({_id: ObjectId(employeeId)});

    client.close();

    return {
        props: {
            employeeData: {
                first_name: selectedEmployee.first_name,
                last_name: selectedEmployee.last_name,
                email: selectedEmployee.email,
                number: selectedEmployee.number,
                gender: selectedEmployee.gender,
                id: selectedEmployee._id.toString(),
                photo: selectedEmployee.photo
            }
        }
    }
}

export default DefaultEmployee;