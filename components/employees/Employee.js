import {useRouter} from 'next/router';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Col from 'react-bootstrap/Col';

function Employee(props) {
    const router = useRouter();

    function editEmployee() {
        router.push('/' + props.emp._id);
    }

    const deleteEmployee=(empId) =>{
        console.log(empId)
        props.removeEmployee(empId);
    }

    return (
        <Col>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={props.emp.photo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.emp.first_name} {props.emp.last_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.emp.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.emp.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.emp.gender ==="M" ? "Male" : props.emp.gender === "F" ? "Female" : "-"}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => deleteEmployee(props.emp._id)}>Delete</Button>
                    <Button size="small" onClick={editEmployee}>Edit</Button>
                </CardActions>
            </Card>
        </Col>
    );
}

export default Employee;