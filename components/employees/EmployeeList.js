import Employee from "./Employee";
import Row from 'react-bootstrap/Row';
import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {deleteEmployee, getEmployee} from "@/service/EmployeeService";
import {useQueryClient} from "react-query";
import ButtonMaterial from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import EmployeeDataTable from "@/components/ui/Table";

function EmployeeList(props) {
    const [empId, setEmpId] = useState(null);
    const [cardLayout, setCardLayout] = useState(true);
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
    };

    const changeLayout = () => {
        setCardLayout(!cardLayout);
    }


    return (
        <>
            <Stack direction="row" alignItems="right" spacing={2}>
                <ButtonMaterial variant="contained" component="label">
                    Add Employee
                    <input hidden accept="image/*" multiple type="file"/>
                </ButtonMaterial>
                <ButtonMaterial variant="outlined" startIcon={<DeleteIcon/>} onClick={changeLayout}/>
            </Stack>
            <br/>
            {
                cardLayout ? (
                    <Row xs={1} md={5} className="g-4">
                        {props.employees && props.employees.map((emp, index) => (
                            <Employee key={index} emp={emp} removeEmployee={(id) => removeEmployee(id)}/>
                        ))}
                    </Row>
                ) : (
                    <EmployeeDataTable data={props.employees}/>
                )
            }
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