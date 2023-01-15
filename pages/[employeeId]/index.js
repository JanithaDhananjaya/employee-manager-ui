import EditEmployee from "@/components/employees/EditEmployee";


function DefaultEmployee() {
    function saveEmployee(data) {
        console.log(data)
    }

    return (
        <EditEmployee onSaveEmployee={saveEmployee}/>
    );
}

export default DefaultEmployee;