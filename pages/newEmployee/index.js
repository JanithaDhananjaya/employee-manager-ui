import NewEmployeeForm from "@/components/employees/NewEmployeeForm";

function NewEmployee() {
    function addEmployeeHandler(enterEmployeeData){
        console.log(enterEmployeeData);
    }
    return (
        <NewEmployeeForm onAddEmployee={addEmployeeHandler}/>
    );
}

export default NewEmployee;