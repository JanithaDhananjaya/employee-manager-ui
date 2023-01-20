import {router} from "next/client";

import NewEmployeeForm from "@/components/employees/NewEmployeeForm";

function NewEmployee() {
    async function addEmployeeHandler(enterEmployeeData){
       const response = await fetch('/api/employee', {
           method: "POST",
           body: JSON.stringify(enterEmployeeData),
           headers: {
               'Content-Type': 'application/json'
           }
       });

       const data = await response.json();
        console.log(data);
        router.push('/');
    }
    return (
        <NewEmployeeForm onAddEmployee={addEmployeeHandler}/>
    );
}

export default NewEmployee;