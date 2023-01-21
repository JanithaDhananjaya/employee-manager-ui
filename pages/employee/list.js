import {useQuery} from "react-query";

import EmployeeList from "@/components/employees/EmployeeList";

import {getEmployees} from "@/service/EmployeeService";

function List(props) {
    const {isLoading, isError, data, error} = useQuery('employees', getEmployees);

    if (!data) return <p>Loading...</p>;

    return (
        <EmployeeList employees={data}/>
    );
}


export default List;