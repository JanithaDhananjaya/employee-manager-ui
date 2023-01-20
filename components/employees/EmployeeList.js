import Employee from "./Employee";
import Row from 'react-bootstrap/Row';
import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {deleteEmployee, getEmployee} from "@/service/EmployeeService";
import {useQueryClient} from "react-query";

function EmployeeList(props) {
    const [empId, setEmpId] = useState(null);
    const queryClient = useQueryClient();
    const removeEmployee = (id) => {
        if (id) {
            setEmpId(id);
        }
    };

    const handleClose = () => setEmpId(null);

    const deleteHandler = async ()=> {
        await deleteEmployee(empId);
        await queryClient.prefetchQuery(('employees', getEmployee));
    }


    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {props.employees && props.employees.map((emp, index) => (
                    <Employee key={index} emp={emp} removeEmployee={(id) => removeEmployee(id)}/>
                ))}
            </Row>
            <Modal show={empId} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>dd</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteHandler}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeeList;