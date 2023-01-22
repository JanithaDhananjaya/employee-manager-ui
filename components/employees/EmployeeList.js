import {useRouter} from 'next/router';
import Employee from "./Employee";
import Row from 'react-bootstrap/Row';
import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {deleteEmployee, getEmployee} from "@/service/EmployeeService";
import {useQueryClient} from "react-query";
import ButtonMaterial from '@mui/material/Button';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Stack from '@mui/material/Stack';
import EmployeeDataTable from "@/components/ui/Table";


function EmployeeList(props) {
    const [empId, setEmpId] = useState(null);
    const [cardLayout, setCardLayout] = useState(true);
    const queryClient = useQueryClient();
    const router = useRouter();
    const removeEmployee = (id) => {
        if (id) {
            setEmpId(id);
        }
    };

    const addEmployee = () => {
       router.push('/employee/add');
    };

    const handleClose = () => setEmpId(null);

    const deleteHandler = async ()=> {
        await deleteEmployee(empId);
        await queryClient.prefetchQuery(('employees', getEmployee));
        setCardLayout(!cardLayout);
    };

    const changeLayout = () => {
        setCardLayout(!cardLayout);
    };

    return (
        <>
            <Stack direction="row" alignItems="right" spacing={2} style={{float: 'right'}}>
                <ButtonMaterial variant="contained" component="label" onClick={addEmployee}>
                    Add Employee
                </ButtonMaterial>
                <ButtonMaterial variant="outlined" startIcon={<FormatListBulletedIcon/>} onClick={changeLayout}/>
            </Stack>
            <br/>
            <br/>
            {
                cardLayout ? (
                    <Row xs={1} md={5} className="g-4">
                        {props.employees && props.employees.map((emp, index) => (
                            <Employee key={index} emp={emp} removeEmployee={(id) => removeEmployee(id)}/>
                        ))}
                    </Row>
                ) : (
                    <EmployeeDataTable data={props.employees} removeEmployee={(id) => removeEmployee(id)}/>
                )
            }
            <Modal show={empId} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to remove this employee?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={deleteHandler}>
                        Yes, Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeeList;