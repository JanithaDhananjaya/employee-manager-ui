

import EditEmployee from "@/components/employees/EditEmployee";

function DefaultEmployee(props) {
    function saveEmployee(data) {
    }

    return (
        <EditEmployee employeedata={props.employeeData} onSaveEmployee={saveEmployee}/>
    );
}

export async function getStaticPaths() {

    return {
        fallback: false,
        paths: employees.map((employee) => ({
            params: {employeeId: employee._id.toString()},
        })),
    };
}

export async function getStaticProps(context) {
}

export default DefaultEmployee;