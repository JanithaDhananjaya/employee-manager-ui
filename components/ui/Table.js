import Table from 'react-bootstrap/Table';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Button} from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';

function EmployeeDataTable(props) {
    function editEmployee() {
        router.push('/' + props.emp._id);
    }

    const deleteEmployee=(empId) =>{
        props.removeEmployee(empId);
    }
    return (
        <Table bordered>
            <thead>
            <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                props.data.map((row, index) => (
                    <tr key={index}>
                        <td>
                            <Card sx={{maxWidth: 345}}>
                                <CardMedia
                                    sx={{height: 140}}
                                    image={row.photo}
                                    title="green iguana"
                                />
                            </Card>
                        </td>
                        <td>{row.first_name}</td>
                        <td>{row.last_name}</td>
                        <td>{row.email}</td>
                        <td>{row.number}</td>
                        <td>{row.gender}</td>
                        <td>
                            <Button onClick={editEmployee}>Edit</Button>
                            <DeleteIcon onClick={() => deleteEmployee(row._id)} color='error'/>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
}

export default EmployeeDataTable;