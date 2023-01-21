const BASE_URL = 'http://localhost:3000';

//all employees
export const getEmployees = async () => {
    const response = await fetch(`${BASE_URL}/api/employee`);
    const json = await response.json();
    return json;
}

//single employee
export const getEmployee = async (employeeId) => {
    const response = await fetch(`${BASE_URL}/api/employee/${employeeId}`);
    const json = await response.json();
    return json;
}

//posting a new employee
export const addEmployee = async (formdata) => {
    try {
        const options = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formdata)
        }

        const response = await fetch(`${BASE_URL}/api/employee`, options);
        const json = await response.json();
        return json;
    } catch (error) {

    }
}

//update an employee
export const updateEmployee = async (employeeId, formdata) => {
    try {
        const options = {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formdata)
        }

        const response = await fetch(`${BASE_URL}/api/employee/${employeeId}`, options);
        const json = await response.json();
        return json;
    } catch (error) {

    }
}

//delete an employee
export const deleteEmployee = async (employeeId) => {
    try {
        const options = {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        }

        const response = await fetch(`${BASE_URL}/api/employee/${employeeId}`, options);
        const json = await response.json();
        return json;
    } catch (error) {

    }
}