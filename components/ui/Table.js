import Table from 'react-bootstrap/Table';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function EmployeeDataTable(props) {
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

                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
}

export default EmployeeDataTable;