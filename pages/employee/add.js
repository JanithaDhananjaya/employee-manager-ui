import {router} from "next/client";

import NewEmployeeFrom from "@/components/employees/NewEmployeeFrom";

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
        router.push('/');
    }
    return (
        <NewEmployeeFrom onAddEmployee={addEmployeeHandler}/>
    );
}

export default NewEmployee;